import { ApiProperty } from "@nestjs/swagger";
import { Session } from "generated/prisma";

export class SessionEntity implements Session {
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
}
