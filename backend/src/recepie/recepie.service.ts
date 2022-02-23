import { Injectable } from '@nestjs/common';
import { CreateRecepieInput } from './dto/create-recepie.input';
import { UpdateRecepieInput } from './dto/update-recepie.input';
import { Recepie } from './entities/recepie.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class RecepieService {
  recepies: Recepie[] = [];
  create(createRecepieInput: CreateRecepieInput) {
    const recepie = new Recepie();

    recepie.id = uuid();
    recepie.title = createRecepieInput.title;
    recepie.description = createRecepieInput.description;
    recepie.date = new Date();
    recepie.image = createRecepieInput.image;
    recepie.ingridients = createRecepieInput.ingridients;

    this.recepies.push(recepie);

    return recepie;
  }

  findAll() {
    return this.recepies;
  }

  findOne(id: string) {
    return this.recepies.find((recepie) => recepie.id === id);
  }

  update(id: string, updateRecepieInput: UpdateRecepieInput) {
    this.recepies = this.recepies.map((recepie) => {
      if (recepie.id === id) {
        return {
          ...recepie,
          ...updateRecepieInput,
        };
      }
      return recepie;
    });
    return 'Updated recepie';
  }

  remove(id: string) {
    this.recepies = this.recepies.filter((recepie) => recepie.id !== id);
    return `Removed item with id ${id}`;
  }
}
