import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import { Request } from 'express';
import { PersonService } from "./person.service";
import { Person } from "./person.entity";
import {CreatePersonDto} from "../dto/create-person.dto";

@Controller('person')
export class PersonController {
	constructor( private readonly personService: PersonService ) {
	}

	@Post()
	async add(@Body() body: CreatePersonDto): Promise<Person[]> {
		return await this.personService.create( body );
	}

	@Get()
	async findAll(@Req() request: Request): Promise<Person[]> {
		return await this.personService.findAll();
	}
}
