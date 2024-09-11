import {
  IsNotEmpty,
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  IsNumber
} from 'class-validator';

export class user {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(15)
  name: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  @MinLength(3)
  @MaxLength(15)
  password: number;
}

export class loginUser {
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  password: number;
}
