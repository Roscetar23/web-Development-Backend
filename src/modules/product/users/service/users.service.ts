import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/database/repositories/users.repository';
import { CreateUserDto } from 'src/database/dto/users.dto';
import { UserInterface } from 'src/database/interface/users.interface';
import { encryptPassword } from 'src/common/encryptPassword';
import { InvalidProfileCreation } from 'src/exceptions/invalid-password.exception';
@Injectable()
export class usersService {
  constructor(private readonly UsersRepository: UsersRepository) {}

  async createUsers(createUserDto: CreateUserDto): Promise<UserInterface> {
    const hashEncrypted = await encryptPassword(createUserDto.password);
    let users;
    try {
      users = await this.UsersRepository.createUser({
        password: hashEncrypted,
        nameUser: createUserDto.nameUser,
        email: createUserDto.email,
      });
    } catch (err) {
      throw new InvalidProfileCreation('User already exists');
    }
    return {
      nameUser: users,
      password: users,
      email: users,
    };
  }
  async deleteUsers(nameUser: string): Promise<UserInterface> {
    return await this.UsersRepository.deleateUser(nameUser);
  }
}
