import { ApiProperty } from "@nestjs/swagger";
import { Session } from "generated/prisma";
import { GameEntity } from "src/games/entities/game.entity";

export class SessionEntity implements Session {
	constructor(partial: Partial<SessionEntity>) {
		Object.assign(this, partial);
	}

	@ApiProperty()
	id: string;

	@ApiProperty({ required: false, nullable: true })
	name: string | null;

	@ApiProperty()
	rules: object;

	@ApiProperty()
	createdAt: Date;

	@ApiProperty({ required: false, nullable: true })
	expires: Date | null;

	@ApiProperty()
	expired: boolean;

	@ApiProperty()
	games: Partial<GameEntity>;
}
