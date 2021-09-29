export function randomString(length: number = 16): string {
    const inputLength = Math.ceil(length / 2);
    // server side
    if (typeof window === 'undefined') {
        return require('crypto').randomBytes(inputLength).toString('hex');
    }
    // browser side
    else {
        const uintArray = new Uint8Array(inputLength);
        window.crypto.getRandomValues(uintArray);
        return Array.from(uintArray)
            .map((value) => value.toString(16).padStart(2, '0'))
            .join('');
    }
}
