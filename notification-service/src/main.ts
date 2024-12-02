import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.KAFKA,
        options: {
            client: {
                brokers: ['localhost:29092'],
            },
            consumer: {
                groupId: 'notification-consumer',
            },
        }
    });

    await app.listen();
}
bootstrap().then(r => console.log('Notification Service is listening'));
