import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { EntryEntity } from './entities/entry.entity';
import { EntriesService } from './entries.service';

@Controller('entries')
export class EntriesController {
  constructor(private readonly entriesService: EntriesService) { }

  @Get(':sessionId')
  @ApiOkResponse({ type: EntryEntity, isArray: true })
  findBySessionId(@Param('sessionId') sessionId: string) {
    return this.entriesService.findBySessionId(sessionId);
  }
}
