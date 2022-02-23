export interface RecepieType {
  id: string;
  title: string;
  description: string;
  image: string;
  date: Date;
  ingridients: string[];
}
export interface RecepiesType {
  recepies: RecepieType[];
}
