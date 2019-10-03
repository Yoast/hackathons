import {ApiModelProperty} from "@nestjs/swagger";

export class CreatePersonDto{
	@ApiModelProperty()
	name: string;
	@ApiModelProperty()
	building: number;
}
