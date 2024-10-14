import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInterface } from '../interface/users.interface';
import { Users, UsersDocument } from '../schema/users.schema';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(Users.name)
    private readonly usersModel: Model<UsersDocument>,
  ) {}

  async getUser(nameUser: string, password: string): Promise<UsersDocument> {
    return this.usersModel.findOne({
      nameUser,
      password,
    });
  }
  async createUser(Users: UserInterface): Promise<UsersDocument> {
    const createUser = new this.usersModel(Users);
    return createUser.save();
  }
  async deleateUser(nameUser: string): Promise<UsersDocument> {
    return await this.usersModel.findOneAndDelete({ nameUser });
  }
}
