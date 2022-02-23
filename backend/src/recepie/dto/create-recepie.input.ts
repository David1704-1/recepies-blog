import { InputType, Field } from '@nestjs/graphql';
import { IsArray, IsString, IsUrl, Length } from 'class-validator';

@InputType()
export class CreateRecepieInput {
  @Length(6, 64)
  @IsString()
  @Field(() => String)
  title: string;

  @IsArray()
  @Field(() => [String], { description: 'Recepie ingridients' })
  ingridients: string[];

  @Length(60, 2000)
  @IsString()
  @Field(() => String, { description: 'Recepie description' })
  description: string;

  @IsUrl()
  @Field(() => String, { description: 'Recepie image' })
  image: string;
}
