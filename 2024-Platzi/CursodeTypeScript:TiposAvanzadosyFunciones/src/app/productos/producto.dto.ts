import { Producto } from "./producto.model";


export interface CreateProductDto extends Omit<Producto, "id" | "createdAt" | "updatedAt" | "categoria"> {//Un DTO es un el objeto que vamos a estar mandando y este no siempre necesita todos los datos, muchos se hacen desde el backend como el id y la fecha.
  categoryId: string;
}


type example = Pick<Producto, "color" | "descripcion"> //El contrario de omit


export interface UpdateProductDto extends Partial<CreateProductDto> {

} //Me da la opcion de que todos los campos sean opcionales


type example2 = Required<Producto> //Deja todo como obligatorio


export interface FindProductDto extends Readonly<Partial<Omit<Producto, "tags">>> {
  tags: ReadonlyArray<string>
}
