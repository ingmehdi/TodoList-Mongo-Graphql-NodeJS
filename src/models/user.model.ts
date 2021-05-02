import { ObjectType, Field } from 'type-graphql';
import { prop } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';

@ObjectType()
export class User {
  @Field()
  readonly _id!: ObjectId;

  @prop()
  @Field()
  firstName!: string;

  @prop()
  @Field()
  lastName!: string;

  @prop()
  @Field()
  username!: string;

  @prop()
  @Field()
  password!: string;

  @prop()
  @Field()
  email!: string;
}
