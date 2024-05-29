import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { TemporaryPasswordService } from './services/temporary-password.service';
import { TemporaryPassword } from './entities/temporary-password.entity';

@Module({
  exports: [UserService, TemporaryPasswordService],
  providers: [UserService, TemporaryPasswordService],
  imports: [TypeOrmModule.forFeature([User, TemporaryPassword])]
})
export class UserModule {}
