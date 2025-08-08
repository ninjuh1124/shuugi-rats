import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GamesService {
  constructor(private prisma: PrismaService) { }

  create(createGameDto: CreateGameDto) {
    return this.prisma.game.create({ data: createGameDto });
  }

  findAll() {
    return this.prisma.game.findMany();
  }

  findOne(id: string) {
    return this.prisma.game.findUnique({ where: { id } });
  }

  update(id: string, updateGameDto: UpdateGameDto) {
    return this.prisma.game.update({ where: { id }, data: updateGameDto });
  }

  remove(id: string) {
    return this.prisma.$transaction([
      this.prisma.game.delete({ where: { id } }),
      this.prisma.entry.deleteMany({ where: { gameId: id } })
    ]);
  }
}
