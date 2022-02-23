import { CreateRecepieInput } from './create-recepie.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsArray, IsString, IsUrl, Length } from 'class-validator';

@InputType()
export class UpdateRecepieInput extends PartialType(CreateRecepieInput) {
  @Field(() => String)
  id: string;

  @Length(6, 64)
  @IsString()
  @Field(() => String, { nullable: true })
  title: string;

  @IsArray()
  @Field(() => [String], {
    description: 'Recepie ingridients',
    nullable: true,
  })
  ingridients: string[];

  @Length(60, 2000)
  @IsString()
  @Field(() => String, { description: 'Recepie description', nullable: true })
  description: string;

  @IsUrl()
  @Field(() => String, { description: 'Recepie image', nullable: true })
  image: string;
}
