import { Module } from '@nestjs/common';
import { UserModule } from './user/infra/ioc/user.module';
import { PostModule } from './post/infra/ioc/post.module';
import { EmoticonModule } from './emoticon/infra/ioc/emoticon.module';
import { ReactionModule } from './reaction/infra/ioc/reaction.module';

@Module({
  imports: [UserModule, PostModule, EmoticonModule, ReactionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
