import { getRepositoryToken } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import * as crypto from 'crypto';
import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';
import { ICreateUser } from '../interfaces/create-user.interface';
import { generateRandomUser } from './utils/generate-random-user.util';
import { UserError } from '../user.error';

describe('UserService', () => {
  let service: UserService;
  let userReposiroty: Repository<User>;

  const USER_REPO_TOKEN = getRepositoryToken(User);

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: USER_REPO_TOKEN,
          useValue: {
            save: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            findOne: jest.fn()
          }
        }
      ]
    }).compile();

    userReposiroty = moduleRef.get(USER_REPO_TOKEN);
    service = moduleRef.get<UserService>(UserService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should successfully create user', async () => {
      const payload: ICreateUser = {
        name: crypto.randomBytes(4).toString('hex'),
        phone: crypto.randomBytes(4).toString('hex'),
        email: crypto.randomBytes(4).toString('hex'),
        address: crypto.randomBytes(4).toString('hex'),
        password: crypto.randomBytes(4).toString('hex')
      };

      const user = generateRandomUser(payload);

      jest.spyOn(userReposiroty, 'create').mockReturnValue(user as User);
      jest.spyOn(userReposiroty, 'save').mockResolvedValue(user as User);

      const result = await service.create(payload);

      expect(userReposiroty.create).toBeCalledTimes(1);
      expect(userReposiroty.create).toBeCalledWith(payload);

      expect(userReposiroty.save).toBeCalledTimes(1);
      expect(userReposiroty.save).toBeCalledWith(user);

      expect(result).toBe(user);
    });
  });

  describe('find', () => {
    it('should successfully find user', async () => {
      const id = crypto.randomInt(5, 10);
      const user = generateRandomUser({ id });

      jest.spyOn(userReposiroty, 'findOne').mockResolvedValue(user as User);

      const result = await service.find({
        where: {
          id
        }
      });

      expect(userReposiroty.findOne).toBeCalledTimes(1);
      expect(userReposiroty.findOne).toBeCalledWith({
        where: {
          id
        }
      });

      expect(result).toBe(user);
    });
  });

  describe('update', () => {
    it('should successfully update user', async () => {
      const payload = {
        fields: {
          isVerified: true
        },
        where: {
          id: crypto.randomInt(5, 10)
        }
      };

      jest.spyOn(userReposiroty, 'update').mockResolvedValue({
        raw: [],
        affected: 1,
        generatedMaps: []
      });

      const result = await service.update(payload);

      expect(userReposiroty.update).toBeCalledTimes(1);
      expect(userReposiroty.update).toBeCalledWith(
        payload.where,
        payload.fields
      );
      expect(result).toBe(true);
    });

    it('shoud throw "User not updated" error', async () => {
      const error = UserError.UserNotUpdated();
      const payload = {
        fields: {
          isVerified: true
        },
        where: {
          id: crypto.randomInt(5, 10)
        }
      };

      jest.spyOn(userReposiroty, 'update').mockResolvedValue({
        raw: [],
        affected: 0,
        generatedMaps: []
      });

      await expect(service.update(payload)).rejects.toThrow(error);

      expect(userReposiroty.update).toBeCalledTimes(1);
      expect(userReposiroty.update).toBeCalledWith(
        payload.where,
        payload.fields
      );
    });
  });
});
