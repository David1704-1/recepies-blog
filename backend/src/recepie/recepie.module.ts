import { Module } from '@nestjs/common';
import { RecepieService } from './recepie.service';
import { RecepieResolver } from './recepie.resolver';
import { PrismaService } from './prisma.service';

@Module({
  providers: [RecepieResolver, RecepieService, PrismaService],
})
export class RecepieModule {}
