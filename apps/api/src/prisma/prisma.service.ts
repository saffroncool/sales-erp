import { Injectable, OnModuleDestroy } from '@nestjs/common'

@Injectable()
export class PrismaService implements OnModuleDestroy {
  async onModuleDestroy() {
    // placeholder - real Prisma client is in packages/db; integrate when ready
    return Promise.resolve()
  }
}
