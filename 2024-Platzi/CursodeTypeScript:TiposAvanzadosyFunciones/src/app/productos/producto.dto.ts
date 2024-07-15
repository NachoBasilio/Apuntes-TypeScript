import { Producto } from "./producto.model";


export interface CreateProductDto extends Omit<Producto, "id" | "createdAt" | "updatedAt" | "categoria"> {//Un DTO es un el objeto que vamos a estar mandando y este no siempre necesita todos los datos, muchos se hacen desde el backend como el id y la fecha.
  categoryId: string;
}


type example = Pick<Producto, "color" | "descripcion"> //El contrario de omit
