import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { TemporaryPassword } from '../entities/temporary-password.entity';
import { IUpdateTemporaryPassword } from '../interfaces/update-temporary-password.interface';
import { UserError } from '../user.error';

@Injectable()
export class TemporaryPasswordService {
  constructor(
    @InjectRepository(TemporaryPassword)
    private readonly temporaryPasswordRepository: Repository<TemporaryPassword>
  ) {}

  public async create(
    userId: number,
    password: string
  ): Promise<TemporaryPassword> {
    const temporaryPassword = this.temporaryPasswordRepository.create({
      password,
      user: {
        id: userId
      },
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)
    });

    return this.temporaryPasswordRepository.save(temporaryPassword);
  }

  public async findWithRelationsByUserId(
    userId: number
  ): Promise<TemporaryPassword> {
    const temporaryPassword = await this.temporaryPasswordRepository.findOne({
      relations: {
        user: true
      },
      where: {
        expiresAt: MoreThanOrEqual(new Date()),
        user: {
          id: userId
        }
      }
    });

    return temporaryPassword;
  }

  public async update(payload: IUpdateTemporaryPassword): Promise<boolean> {
    const result = await this.temporaryPasswordRepository.update(
      payload.where,
      payload.fields
    );

    const updated = result.affected > 0;

    if (!updated) {
      throw UserError.TemporaryPasswordNotUpdated();
    }

    return updated;
  }

  public async deleteByUserId(userId: number): Promise<boolean> {
    const result = await this.temporaryPasswordRepository.delete({
      user: {
        id: userId
      }
    });

    const deleted = result.affected > 0;

    if (!deleted) {
      throw UserError.TemporaryPasswordNotDeleted();
    }

    return deleted;
  }
}
