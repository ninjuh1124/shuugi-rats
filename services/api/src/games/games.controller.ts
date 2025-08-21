import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { GameEntity } from './entities/game.entity';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) { }

  @Post()
  @ApiCreatedResponse({ type: GameEntity })
  create(@Body() createGameDto: CreateGameDto) {
    return this.gamesService.create(createGameDto);
  }

  @Get()
  @ApiOkResponse({ type: GameEntity, isArray: true })
  findAll() {
    return this.gamesService.findAll();
  }
  
  @Get(":sessionId")
  @ApiOkResponse({ type: GameEntity, isArray: true })
  findBySessionId(@Param("sessionId") sessionId: string) {
    return this.gamesService.findBySessionId(sessionId);
  }

  @Patch(':id')
  @ApiOkResponse({ type: GameEntity })
  update(@Param('id') id: string, @Body() updateGameDto: UpdateGameDto) {
    return this.gamesService.update(id, updateGameDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: GameEntity })
  remove(@Param('id') id: string) {
    return this.gamesService.remove(id);
  }
}
