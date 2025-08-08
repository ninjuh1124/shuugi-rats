import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { SessionsModule } from './sessions/sessions.module';
import { GamesModule } from './games/games.module';
import { EntriesModule } from './entries/entries.module';

@Module({
  imports: [UsersModule, PrismaModule, SessionsModule, GamesModule, EntriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
