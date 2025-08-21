import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GamesService {
  constructor(private prisma: PrismaService) { }

  create(createGameDto: CreateGameDto) {
    const gameData: Omit<CreateGameDto, "entries"> = Object.assign({}, createGameDto);
    delete (gameData as Partial<CreateGameDto>).entries;

    return this.prisma.$transaction(async (tx) => {
      const game = await tx.game.create({ data: gameData });
      if (createGameDto.entries.length) {
        const entries = await Promise.all(createGameDto.entries.map((entry, i) =>
          tx.entry.create({
            data: entry,
            include: {
              game: i === 3 && {
                include: {
                  entries: true
                }
              }
            }
          })
        ))

        return entries.pop()!.game;
      }

      return game;
    });
  }

  findAll() {
    return this.prisma.game.findMany();
  }

  findBySessionId(sessionId: string) {
    return this.prisma.game.findMany({ where: { sessionId } });
  }

  update(id: string, updateGameDto: UpdateGameDto) {
    const gameData: Omit<UpdateGameDto, "entries"> = Object.assign({}, updateGameDto);
    delete (gameData as Partial<UpdateGameDto>).entries;

    return this.prisma.$transaction(async (tx) => {
      const game = await tx.game.update({ where: { id }, data: gameData });

      if (updateGameDto.entries?.length) {
        const entries = await Promise.all(
          updateGameDto.entries.map((entry, i) =>
            tx.entry.update({
              where: { id: entry.id },
              data: entry,
              include: {
                game: i === 3 && {
                  include: {
                    entries: true
                  }
                }
              }
            })
          )
        );
  
        return entries.pop()!.game
      }

      return game;
    });
  }

  remove(id: string) {
    return this.prisma.$transaction([
      this.prisma.game.delete({ where: { id } }),
      this.prisma.entry.deleteMany({ where: { gameId: id } })
    ]);
  }
}
