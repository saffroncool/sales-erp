import { Module } from '@nestjs/common'
import { CustomersModule } from './modules/customers/customers.module'
import { HealthModule } from './modules/health/health.module'
import { PrismaModule } from './prisma/prisma.module'

@Module({
  imports: [PrismaModule, HealthModule, CustomersModule]
})
export class AppModule {}
