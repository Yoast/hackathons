import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Person } from './person/person.entity';
import { PersonModule } from "./person/person.module";


@Module({
  imports: [
	  TypeOrmModule.forRoot({
		  type: 'mysql',
		  host: '127.0.0.1',
		  port: 3306,
		  username: 'root',
		  password: '',
		  database: 'inoutboard',
		  entities: [Person],
		  synchronize: true,
	  }),
      PersonModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
	constructor(private readonly connection: Connection) {}
}
