import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EntriesService {
  constructor(private prisma: PrismaService) { }

  findBySessionId(sessionId: string) {
    return this.prisma.entry.findMany({
      where: { game: { sessionId } },
      include: { game: true}
    });
  }
}
