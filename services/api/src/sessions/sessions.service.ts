import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';

@Injectable()
export class SessionsService {
  constructor(private prisma: PrismaService) { }

  create(createSessionDto: CreateSessionDto) {
    return this.prisma.session.create({ data: createSessionDto })
  }

  findAll() {
    return this.prisma.session.findMany();
  }

  findOne(id: string) {
    return this.prisma.session.findUnique({ where: { id } });
  }

  update(id: string, updateSessionDto: UpdateSessionDto) {
    return this.prisma.session.update({ where: { id }, data: updateSessionDto });
  }

  remove(id: string) {
    return this.prisma.session.delete({ where: { id } });
  }
}
