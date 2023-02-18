import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { AppController } from './app.controller';
import { Order } from './orders/entities/order.entity';
import { OrdersModule } from './orders/orders.module';
import { AccountsModule } from './accounts/accounts.module';
import { Account } from './accounts/entities/account.entity';

@Module({
  imports: [
    OrdersModule,
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: join(__dirname, '..', 'orders.db'),
      autoLoadModels: true,
      models: [Order, Account],
      sync: { alter: true },
    }),
    AccountsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}