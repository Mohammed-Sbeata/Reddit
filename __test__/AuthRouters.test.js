/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../src/app');
const { connection, Build } = require('../src/database');

beforeAll(() => Build());
afterAll(() => connection.end());

const obj = {
  email: 'alaaAhmade@gmail.com',
  password: 'alaa123456',
  confirmPassword: 'alaa123456',
  username: 'alaaahmade',
  firstName: 'Alaa',
  lastName: 'ahmad',
  phone: '1234564567',
  photo: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80',
  title: 'testing post',
  content: 'testing content post',
  imageUrl: this.photo,
  id: 1,
};

describe('Testing routers', () => {
  it('Testing signup router', async () => {
    const response = await request(app)
      .post('/user/signup')
      .send(obj)
      .set('Accept', 'application/json');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('signup successfully');
  });

  it('Testing login router', async () => {
    const response = await request(app)
      .post('/user/login')
      .send(obj)
      .set('Accept', 'application/json');
    expect(response.statusCode).toBe(200);
    expect(response.body.login).toBe(true);
  });
});
