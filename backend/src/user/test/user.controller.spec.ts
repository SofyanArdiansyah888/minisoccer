/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from '../user.controller';
import { UserService } from '../user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '@prisma/client';
import { PrismaModule } from '../../prisma/prisma.module';
import { UpdateUserDto } from '../dto/update-user.dto';
import { take } from 'rxjs';

const mockUser = {
  id: 1,
  name: 'John',
  email: 'john@example.com',
  password: null,
  emailVerifiedAt: null,
  createdAt: null,
  updatedAt: null,
  rememberToken: null,
};

const mockUsers: User[] = [
  {
    id: 1,
    name: 'John',
    email: 'john@example.com',
    password: null,
    emailVerifiedAt: null,
    createdAt: null,
    updatedAt: null,
    rememberToken: null,
  },
];

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
      imports: [PrismaModule],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  describe('create', () => {
    it('Should create a user', async () => {
      const mockUserDto: CreateUserDto = {
        email: 'john@gmail.com',
        password: '1234',
      };

      jest.spyOn(service, 'create').mockResolvedValue(mockUser);
      expect(await controller.create(mockUserDto)).toBe(mockUser);
    });
  });

  describe('findAll', () => {
    it('Should return a list of users', async () => {
      jest
        .spyOn(service, 'users')
        .mockResolvedValueOnce({ users: mockUsers, count: 1, totalPages: 1 });

      expect(await controller.findAll(1)).toEqual({
        users: mockUsers,
        count: 1,
        totalPages: 1,
      });
    });
  });

  describe('findOne', () => {
    it('should return a user', async () => {
      jest.spyOn(service, 'user').mockResolvedValueOnce(mockUser);

      expect(await controller.findOne(1)).toBe(mockUser);
    });
  });

  describe('update', () => {
    it('should update a user', async () => {
      const mockUpdateUserDto = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: 'newpassword',
      };
      jest.spyOn(service, 'update').mockResolvedValueOnce(mockUser);

      expect(await controller.update(1, mockUpdateUserDto)).toBe(mockUser);
    });
  });

  describe('remove', () => {
    it('should remove a user', async () => {

      jest.spyOn(service, 'remove').mockResolvedValueOnce(mockUser);

      expect(await controller.remove(1)).toBe(mockUser);
    });
  });
});
