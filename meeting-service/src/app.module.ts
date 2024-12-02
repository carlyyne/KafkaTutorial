import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MEETING-SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'meeting',
            brokers: ['localhost:29092'],
          },
          consumer: {
            groupId: 'meeting-group',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
