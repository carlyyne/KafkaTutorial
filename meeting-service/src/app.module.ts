import { Module } from '@nestjs/common';
import { ClientsModule, Transport, ClientKafka } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MEETING-SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'nestjs-consumer-server',
            brokers: ['localhost:29092', 'localhost:29093'], // Add all broker addresses
            connectionTimeout: 10000, // Increased timeout
            requestTimeout: 30000, // Increased timeout
            retry: {
              retries: 10, // Increased retries
              initialRetryTime: 300,
              maxRetryTime: 2000, // Increased max retry time
            },
          },
          consumer: {
            groupId: 'nestjs-group-server',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}