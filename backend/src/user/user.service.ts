/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.UserCreateInput) {
    return this.prisma.user.create({
      data: {
        ...data,
        password: bcrypt.hashSync(data.password, 10),
      },
    });
  }

  async users(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<{ users: User[]; count: number; totalPages: number }> {
    const users = await this.prisma.user.findMany({ ...params });
    const count = await this.prisma.user.count();
    const totalPages = Math.ceil(count / params.take);
    return { users, count, totalPages };
  }

  async user(input: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        ...input,
      },
    });
  }

  update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<User> {
    const {where,data} = params;
    return this.prisma.user.update({
      where,
      data: {
        ...data,
        password: bcrypt.hashSync(data.password.toString(), 10),
      }
      
    });
  }

  remove(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({ where });
  }
}
