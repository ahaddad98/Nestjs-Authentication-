import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: '192.168.99.110',
    //   port: 5432,
    //   username: 'root',
    //   password: 'root',
    //   database: 'test_db',
    //   // entities: [users],
    //   synchronize: true,
    // }),
    UsersModule,
    AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
