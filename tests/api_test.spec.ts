import { test, expect } from '@playwright/test';

test('Get Request', async({ request }) => {
    const response = await request.get('https://api.publicapis.org/entries');
    expect(response.status()).toBe(200);

    const resBody = JSON.parse(await response.text());
    const data = resBody.entries;
    
    let count = 0;

    for (let i = 0; i < data.length; i++) {
        if (data[i].Category === 'Authentication & Authorization') {
            console.log(data[i]); // Log the entry that matches for visibility
            count++;
            expect(data[i].Category).toBe('Authentication & Authorization');
        }
    }

    expect(count).toBeGreaterThan(0);
});
