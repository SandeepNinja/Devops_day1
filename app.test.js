const request = require('supertest');
const app = require('./app');       // import your express app without starting the server

describe('GET /', () => {
    it('should return hellow world', async() => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hellow World');
    });
});