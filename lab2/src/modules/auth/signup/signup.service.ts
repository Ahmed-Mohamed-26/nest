import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { signUpDTO } from '../dto/auth.dto';
import { User } from 'src/core/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignupService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async signUp(body: signUpDTO) {
    const isUserFound = await this.userModel.findOne({ email: body.email });
    if (isUserFound) {
      throw new HttpException(
        'User is exist go to sign in',
        HttpStatus.CONFLICT
      );
    } else {
      body.password = await bcrypt.hash(body.password, 8);
      const addedUser = await this.userModel.insertMany(body);
      return { message: 'added done', addedUser };
    }
  }
}
