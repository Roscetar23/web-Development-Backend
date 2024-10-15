import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {} from '@nestjs/common';
import { usersService } from '../service/users.service';
import { InvalidCredentialsException } from 'src/exceptions/invalid-profile-creation.exception';
import { UserInterface } from 'src/database/interface/users.interface';
import { CreateUserDto } from 'src/database/dto/users.dto';

@Controller('Users')
export class UsersController {
  constructor(private readonly usersService: usersService) {}

  @Post()
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<UserInterface> {
    return await this.usersService.createUsers(createUserDto);
  }
  @Delete('DeleteUsers')
  async DeleateColor(
    @Body('nameUser') nameUser: string,
  ): Promise<UserInterface> {
    return await this.usersService.deleteUsers(nameUser);
  }
  @Get('ViewAllUsers')
  async getAllUsers(): Promise<UserInterface[]> {
    return await this.usersService.getAllUsers();
  }
}
