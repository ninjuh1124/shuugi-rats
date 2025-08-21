import { ApiProperty } from "@nestjs/swagger";
import { Entry } from "generated/prisma/index";
import { GameEntity } from "src/games/entities/game.entity";

export class EntryEntity implements Entry {
	constructor(partial: Partial<EntryEntity>) {
		Object.assign(this, partial);
	}

	@ApiProperty()
	id: string;

	@ApiProperty()
	score: number;

	@ApiProperty()
	chipCount: number | null;

	@ApiProperty()
	rank: number;

	@ApiProperty()
	userId: string;

	@ApiProperty()
	gameId: string;

	@ApiProperty()
	game: Partial<GameEntity>;
}
