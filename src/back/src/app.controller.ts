import { Controller, Get, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { join } from 'node:path';

@Controller()
@ApiTags('Test Report')
export class AppController {
  @Get('test-report')
  public getTestReport(@Res() res: Response): void {
    res.sendFile(join(__dirname, '../../reports/test-report.html'));
  }
}
