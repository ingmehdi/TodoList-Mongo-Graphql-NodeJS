import { ObjectType, Field } from 'type-graphql';
import { prop } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';

@ObjectType()
export class Todos {
  @Field()
  readonly _id!: ObjectId;

  @prop({ default: false })
  @Field()
  status!: boolean;

  @prop()
  @Field()
  content!: string;

  @prop({ default: '' })
  @Field()
  description!: string;

  @prop({ default: '' })
  @Field()
  assigned!: string;

  @prop({ default: Date.now() })
  @Field(() => Date)
  startTime!: Date;
}
