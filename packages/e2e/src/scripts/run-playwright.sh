#!/bin/bash

# I'm sorry this is a bash script but playwright will not play nicely when it's running in a child shell via a TypeScript script.

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

find_repo_root() {
    local current_dir="$SCRIPT_DIR"

    while [[ "$current_dir" != "/" ]]; do
        if [[ -f "$current_dir/package.json" ]] && grep -q '"workspaces"' "$current_dir/package.json"; then
            echo "$current_dir"
            return 0
        fi
        current_dir="$(dirname "$current_dir")"
    done

    echo "Error: Could not find mono-repo root (package.json with workspaces)" >&2
    exit 1
}

REPO_ROOT=$(find_repo_root)

cd "$REPO_ROOT"

FRONTEND_PID_FILE=$(mktemp)

cleanup() {
    kill_group() {
        local PID="$1"
        if [[ -n "$PID" ]] && kill -0 "$PID" 2>/dev/null; then
            kill -TERM -"$PID" 2>/dev/null || true
            sleep 3
            if kill -0 "$PID" 2>/dev/null; then
                echo "Force killing remaining processes..." >&2
                    kill -KILL -"$PID" 2>/dev/null || true
                sleep 1
            fi
        fi
    }

    if [[ -f "$FRONTEND_PID_FILE" ]]; then
        FRONTEND_PID=$(cat "$FRONTEND_PID_FILE" 2>/dev/null || echo "")
        kill_group "$FRONTEND_PID"
        rm -f "$FRONTEND_PID_FILE"
    fi
}

trap cleanup EXIT ERR INT TERM

frontendPort=5173; while nc -z localhost $frontendPort 2>/dev/null; do ((frontendPort++)); done;

echo -e "\033[90mFrontend port: ${frontendPort}\033[0m"

echo -e "\033[90m> npm run --silent start --workspace @electrovir/element-vir-example -- --port=${frontendPort} --strictPort\033[0m"

set -m  # Enable job control
npm run --silent start --workspace @electrovir/element-vir-example -- --port=${frontendPort} --strictPort &
FRONTEND_PID=$!
echo "$FRONTEND_PID" > "$FRONTEND_PID_FILE"
set +m  # Disable job control

cd "$REPO_ROOT/packages/e2e"
echo -e "\033[90mRunning Playwright...\033[0m"

if [[ "${1:-}" == "codegen" ]]; then
    EXTRA_ARGS=("http://localhost:$frontendPort")
else
    EXTRA_ARGS=()
fi

# Reorder args so that --update-snapshots, if provided, is always last (Playwright does not tolerate it before file names)
PLAYWRIGHT_ARGS=()
UPDATE_FLAG_PRESENT=0
for arg in "$@"; do
    if [[ "$arg" == "--update-snapshots" ]]; then
        UPDATE_FLAG_PRESENT=1
    else
        PLAYWRIGHT_ARGS+=("$arg")
    fi
done
if [[ $UPDATE_FLAG_PRESENT -eq 1 ]]; then
    PLAYWRIGHT_ARGS+=("--update-snapshots")
fi

echo -e "\033[90m> playwright ${PLAYWRIGHT_ARGS[*]} ${EXTRA_ARGS[*]}\033[0m"

# Playwright fails to inject the PLAYWRIGHT_TEST env var when using a TS config with imports.
FRONTEND_PORT=${frontendPort} PLAYWRIGHT_TEST="1" NODE_OPTIONS="--import tsx" playwright "${PLAYWRIGHT_ARGS[@]}" --config src/playwright.config.ts "${EXTRA_ARGS[@]}"
