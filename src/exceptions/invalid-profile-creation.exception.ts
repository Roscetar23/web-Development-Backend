import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidCredentialsException extends HttpException {
  constructor() {
    const response = {
      code: 'Invalid credentials',
      message: 'Username or password are incorrect',
    };
    super(response, HttpStatus.UNAUTHORIZED);
  }
}
