import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tag, TagSchema } from 'src/core/schemas/tags.schema';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tag.name, schema: TagSchema }]),
    JwtModule.register({
      secret: 'Ahmed'
    })
  ],
  providers: [TagsService],
  controllers: [TagsController]
})
export class TagsModule {}
