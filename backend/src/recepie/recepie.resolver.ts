import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Recepie } from './entities/recepie.entity';
import { CreateRecepieInput } from './dto/create-recepie.input';
import { UpdateRecepieInput } from './dto/update-recepie.input';
import { PrismaService } from './prisma.service';
import { Inject } from '@nestjs/common';

@Resolver(() => Recepie)
export class RecepieResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Mutation(() => String)
  async createRecepie(
    @Args('createRecepieInput') createRecepieInput: CreateRecepieInput,
  ) {
    await this.prismaService.recepie
      .create({
        data: {
          ...createRecepieInput,
        },
      })
      .catch((err) => console.error(err));
    return 'Receipe created successfully';
  }

  @Query(() => [Recepie], { name: 'recepies' })
  findAll() {
    return this.prismaService.recepie.findMany();
  }

  @Query(() => Recepie, { name: 'recepie' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.prismaService.recepie.findUnique({
      where: { id },
    });
  }

  @Mutation(() => String)
  async updateRecepie(
    @Args('updateRecepieInput') updateRecepieInput: UpdateRecepieInput,
  ) {
    const id = updateRecepieInput.id;
    await this.prismaService.recepie
      .update({
        where: { id: id },
        data: {
          ...updateRecepieInput,
        },
      })
      .catch((err) => console.error(err));
    return 'Update sucessful';
  }

  @Mutation(() => String)
  async removeRecepie(@Args('id', { type: () => String }) id: string) {
    await this.prismaService.recepie
      .delete({ where: { id: id } })
      .catch((err) => console.error(err));
    return 'Delete successful';
  }
}
