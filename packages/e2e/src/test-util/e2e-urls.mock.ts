import {assert} from '@augment-vir/assert';
import {buildUrl} from 'url-vir';

export function getE2eFrontendUrl(): string {
    const frontendPort = process.env.FRONTEND_PORT?.trim();
    assert.isTruthy(frontendPort, 'Missing frontend port.');
    return buildUrl('http://localhost', {
        port: frontendPort,
    }).href;
}
