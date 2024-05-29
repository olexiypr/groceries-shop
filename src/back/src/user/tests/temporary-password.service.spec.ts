import { getRepositoryToken } from '@nestjs/typeorm';
import { Test, TestingModule } from '@nestjs/testing';
import { MoreThanOrEqual, Repository } from 'typeorm';
import * as crypto from 'crypto';
import { TemporaryPasswordService } from '../services/temporary-password.service';
import { TemporaryPassword } from '../entities/temporary-password.entity';
import { generateRandomTemporaryPassword } from './utils/generate-random-temporary-password.utils';
import { IUpdateTemporaryPassword } from '../interfaces/update-temporary-password.interface';
import { UserError } from '../user.error';

describe('TemporaryPasswordService', () => {
  let service: TemporaryPasswordService;
  let temporaryPasswordReposiroty: Repository<TemporaryPassword>;

  const TEMPORARY_PASSWORD_REPO_TOKEN = getRepositoryToken(TemporaryPassword);

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        TemporaryPasswordService,
        {
          provide: TEMPORARY_PASSWORD_REPO_TOKEN,
          useValue: {
            save: jest.fn(),
            delete: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            findOne: jest.fn()
          }
        }
      ]
    }).compile();

    temporaryPasswordReposiroty = moduleRef.get(TEMPORARY_PASSWORD_REPO_TOKEN);
    service = moduleRef.get<TemporaryPasswordService>(TemporaryPasswordService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should successfully create temporary password', async () => {
      const userId = crypto.randomInt(5, 10);
      const password = crypto.randomBytes(16).toString('hex');
      const temporaryPassword = generateRandomTemporaryPassword({
        password,
        user: {
          id: userId
        }
      });

      jest
        .spyOn(temporaryPasswordReposiroty, 'create')
        .mockReturnValue(temporaryPassword);
      jest
        .spyOn(temporaryPasswordReposiroty, 'save')
        .mockResolvedValue(temporaryPassword);

      const result = await service.create(userId, password);

      expect(temporaryPasswordReposiroty.create).toBeCalledTimes(1);
      expect(temporaryPasswordReposiroty.create).toBeCalledWith({
        password,
        expiresAt: expect.any(Date),
        user: {
          id: userId
        }
      });

      expect(temporaryPasswordReposiroty.save).toBeCalledTimes(1);
      expect(temporaryPasswordReposiroty.save).toBeCalledWith(
        temporaryPassword
      );

      expect(result).toBe(temporaryPassword);
    });
  });

  describe('findWithRelationsByUserId', () => {
    it('should successfully find temporary password', async () => {
      const userId = crypto.randomInt(5, 10);
      const temporaryPassword = generateRandomTemporaryPassword({
        user: {
          id: userId
        }
      });

      jest
        .spyOn(temporaryPasswordReposiroty, 'findOne')
        .mockResolvedValue(temporaryPassword);

      const result = await service.findWithRelationsByUserId(userId);

      expect(temporaryPasswordReposiroty.findOne).toBeCalledTimes(1);
      expect(temporaryPasswordReposiroty.findOne).toBeCalledWith({
        relations: {
          user: true
        },
        where: {
          user: {
            id: userId
          },
          expiresAt: MoreThanOrEqual(expect.any(Date))
        }
      });

      expect(result).toBe(temporaryPassword);
    });
  });

  describe('update', () => {
    it('should successfully update temporary password', async () => {
      const payload: IUpdateTemporaryPassword = {
        where: {
          id: crypto.randomInt(5, 10)
        },
        fields: {
          password: crypto.randomBytes(16).toString('hex')
        }
      };

      jest.spyOn(temporaryPasswordReposiroty, 'update').mockResolvedValue({
        raw: [],
        affected: 1,
        generatedMaps: []
      });

      const result = await service.update(payload);

      expect(temporaryPasswordReposiroty.update).toBeCalledTimes(1);
      expect(temporaryPasswordReposiroty.update).toBeCalledWith(
        payload.where,
        payload.fields
      );

      expect(result).toBe(true);
    });

    it('should throw "Temporary password not updated" error', async () => {
      const error = UserError.TemporaryPasswordNotUpdated();
      const payload: IUpdateTemporaryPassword = {
        where: {
          id: crypto.randomInt(5, 10)
        },
        fields: {
          password: crypto.randomBytes(16).toString('hex')
        }
      };

      jest.spyOn(temporaryPasswordReposiroty, 'update').mockResolvedValue({
        raw: [],
        affected: 0,
        generatedMaps: []
      });

      await expect(service.update(payload)).rejects.toThrow(error);

      expect(temporaryPasswordReposiroty.update).toBeCalledTimes(1);
      expect(temporaryPasswordReposiroty.update).toBeCalledWith(
        payload.where,
        payload.fields
      );
    });
  });

  describe('deleteByUserId', () => {
    it('should successfully delete temporary password', async () => {
      const userId = crypto.randomInt(5, 10);

      jest.spyOn(temporaryPasswordReposiroty, 'delete').mockResolvedValue({
        raw: [],
        affected: 1
      });

      const result = await service.deleteByUserId(userId);

      expect(temporaryPasswordReposiroty.delete).toBeCalledTimes(1);
      expect(temporaryPasswordReposiroty.delete).toBeCalledWith({
        user: {
          id: userId
        }
      });

      expect(result).toBe(true);
    });

    it('should throw "Temporary password not deleted" error', async () => {
      const error = UserError.TemporaryPasswordNotDeleted();
      const userId = crypto.randomInt(5, 10);

      jest.spyOn(temporaryPasswordReposiroty, 'delete').mockResolvedValue({
        raw: [],
        affected: 0
      });

      await expect(service.deleteByUserId(userId)).rejects.toThrow(error);

      expect(temporaryPasswordReposiroty.delete).toBeCalledTimes(1);
      expect(temporaryPasswordReposiroty.delete).toBeCalledWith({
        user: {
          id: userId
        }
      });
    });
  });
});
