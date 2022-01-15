import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';
import { Length, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';
import * as bcrypt from 'bcryptjs';

@Entity()
@Unique(['username', 'mobile'])
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ default: null })
  // @Length(4, 20)
  username: string;

  @Column({ default: null })
  firstName: string;

  @Column({ default: null })
  lastName: string;

  @Column({ default: null })
  fullName: string;

  @Column({ default: null })
  profileImage: string;

  @Column({ default: null })
  fathersName: string;

  @Column({ default: null })
  mothersName: string;

  @Column({ default: null })
  gender: string;

  @Column({ default: null })
  dateOfBirth: string;

  @Column()
  @Length(4, 100)
  password: string;

  @Column({ default: null })
  @IsEmail()
  @IsOptional()
  email: string;

  @Column({ default: false })
  emailVerified: boolean;

  @Column({ default: '+91' })
  countryCode: string;

  @Column()
  @Length(10)
  mobile: string;

  @Column({ default: null })
  // @Length(10)
  parentsNumber: string;

  @Column({ default: null })
  // @Length(6, 12)
  aadhaarNumber: string;

  @Column({ default: null })
  // @Length(4)
  @IsOptional()
  mobileOTP: string;

  @Column({ default: false })
  mobileVerified: boolean;

  @Column({ default: false })
  forgotPasswordRequested: boolean;

  @Column()
  @IsNotEmpty()
  role: string;

  @Column({ default: null })
  bio: string;

  @Column({ default: null })
  religion: string;

  @Column({ default: null })
  caste: string;

  @Column({ default: 1 }) // default examin
  instituteId: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}
