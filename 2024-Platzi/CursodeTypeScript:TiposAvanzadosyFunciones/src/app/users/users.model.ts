import { BaseModel } from "../base.model";

export enum ROLES {
  ADMIN = "admin",
  VENDEDOR = "vendedor",
  CUSTOMER = "customer"
}

export interface User extends BaseModel {
  userName: string,
  role: ROLES
}
