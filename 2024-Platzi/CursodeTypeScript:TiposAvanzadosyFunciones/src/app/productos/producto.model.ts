import { Categoria } from "../gategoria/categoria.model";
import { BaseModel } from "../base.model";

export type Sizes = "S" | "M" | "L" | "XL"

export interface Producto extends BaseModel {
  titulo: string;
  imagen: string;
  descripcion: string;
  color: string;
  precio: number;
  stock: number;
  tamaño?: Sizes;
  categoria:Categoria;//Esto es un subObjeto
  esNuevo: boolean;
  tags: string[];
}
