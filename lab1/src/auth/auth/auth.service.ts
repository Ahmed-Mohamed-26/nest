import { Injectable } from '@nestjs/common';
import { loginUser, user } from '../auth.dto';

@Injectable()
export class UsersService {
  users: user[] = [
    {
      name: 'ahmed',
      email: 'ahmed09@gmail.com',
      password: 123456
    },
    {
      name: 'joba',
      email: 'joba34@gmail.com',
      password: 789123
    },
    {
      name: 'esraa',
      email: 'esraa@gmail.com',
      password: 147852
    },
    {
      name: 'mohamed',
      email: 'mohamed@gmail.com',
      password: 1302518
    }
  ];
  signUp(user: user): string {
    const isExist = this.users.find((ele) => ele.email == user.email);
    if (isExist) {
      return 'Email already registered';
    } else {
      this.users.push(user);
      return 'successfull';
    }
  }
  signIn(user: loginUser): string {
    const exist = this.users.find((ele) => ele.email == user.email);
    console.log(exist);
    if (exist && exist.password === user.password) {
      return 'Welcome';
    } else {
      return ' invalid email or password';
    }
  }
}
