import { describe, it, expect } from 'vitest';
import request from 'supertest';
import express from 'express';
import { registerOAuthRoutes } from './_core/oauth';

describe('Authentication Routes', () => {
  const app = express();
  registerOAuthRoutes(app);

  it('should have /api/auth/login route', async () => {
    const response = await request(app).get('/api/auth/login');
    // Should redirect (302) to OAuth portal
    expect([302, 200]).toContain(response.status);
  });

  it('should have /api/auth/logout route', async () => {
    const response = await request(app).get('/api/auth/logout');
    // Should redirect (302) to home
    expect(response.status).toBe(302);
    expect(response.headers.location).toBe('/');
  });

  it('should have /api/oauth/callback route', async () => {
    const response = await request(app).get('/api/oauth/callback');
    // Should return 400 without code and state
    expect(response.status).toBe(400);
  });
});
