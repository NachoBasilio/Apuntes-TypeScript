import { Producto } from "../productos/producto.model"
import { User } from "../../01-enums"
import { BaseModel } from "../base.model"

export interface Orden extends BaseModel {
  createdAt: Date,
  productos: Producto,
  user: User
}
