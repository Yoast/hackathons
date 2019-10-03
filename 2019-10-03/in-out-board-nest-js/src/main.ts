import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, Logger } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

/**
 * Initializes the Swagger api explorer.
 *
 * @param {INestApplication} app The Express/NestJs app.
 *
 * @returns {void}
 */
function initializeSwagger( app: INestApplication ) {
	const options = new DocumentBuilder()
		.setTitle( "MyYoast server" )
		.setDescription( "The MyYoast server NestJS Api" )
		.setSchemes( "http" )
		.setHost( "localhost:3000" )
		.setBasePath( "/" )
		.addBearerAuth( "access_token", "query" )
		.build();
	const document = SwaggerModule.createDocument( app, options );
	const swaggerPath = "swagger";
	SwaggerModule.setup( swaggerPath, app, document );

	Logger.log( "Initialized Swagger. Listening on /" + swaggerPath + " and /" + swaggerPath + "-json", "initializeSwagger.ts", false );
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  initializeSwagger( app );
  await app.listen(3000);
}
bootstrap();
