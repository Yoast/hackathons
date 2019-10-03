import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './person.entity';

@Injectable()
export class PersonService {
	constructor(
		@InjectRepository(Person)
		private readonly personRepository: Repository<Person>,
	) {}

	async create( CreatePersonDto ): Promise<Person[]> {
		return await this.personRepository.save( CreatePersonDto );
	}

	findAll(): Promise<Person[]> {
		return this.personRepository.find();
	}
}
