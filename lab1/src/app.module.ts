import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagsModule } from './tags/tags.module';
import { UsersModule } from './auth/auth.module';

@Module({
  imports: [TagsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
