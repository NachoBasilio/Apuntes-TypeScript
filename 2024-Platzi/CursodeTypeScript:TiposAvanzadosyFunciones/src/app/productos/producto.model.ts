import { Categoria } from "../gategoria/categoria.model";
import { BaseModel } from "../base.model";

export type Sizes = "S" | "M" | "L" | "XL"

export interface Producto extends BaseModel {
  title: string;
  stock: number;
  size?: Sizes;
  categoria:Categoria//Esto es un subObjeto
}
