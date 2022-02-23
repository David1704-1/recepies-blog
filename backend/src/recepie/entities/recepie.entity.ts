import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Recepie {
  @Field(() => String, { description: 'Recepie id' })
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => [String], { description: 'Recepie ingridients' })
  ingridients: string[];

  @Field(() => String, { description: 'Recepie description' })
  description: string;

  @Field(() => String, { description: 'Recepie image' })
  image: string;

  @Field(() => Date, { description: 'Date added' })
  date: Date;
}
