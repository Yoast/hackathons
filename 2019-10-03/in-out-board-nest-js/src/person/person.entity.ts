import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ length: 500 })
	name: string;

	@Column({ type: 'int', default: 1 })
	building: number;
}
