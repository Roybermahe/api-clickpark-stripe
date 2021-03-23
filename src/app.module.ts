import { Module } from '@nestjs/common';
import { AppService } from './application/app.service';
import { StripeModule } from 'nestjs-stripe';
import { repositoryModule } from './repository/repository.module';
import { databaseModule } from './database/database.module';
import { controllersModule } from './controllers/controllers.module';
import { applicationModule } from './application/application.module';
@Module({
  imports: [
    StripeModule.forRoot({
      apiVersion: '2020-08-27',
      apiKey:
        'sk_test_51ILp0nL2O9o5sGjiFUKzVuK40MiPrpH6Rv3EBy3WZkEAmrTXIHcNtOJtuzM3BU8AIf8goZmKyTyP3WRFo4RXWBHn00xtnGoGwK',
    }),
    controllersModule,
    applicationModule,
    repositoryModule,
    databaseModule,
  ],
})
export class AppModule {}
