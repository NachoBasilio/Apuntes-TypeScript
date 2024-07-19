export interface BaseModel {
  readonly id: number | string; //No se puede sobre escribir
  readonly createdAt: Date;
  updatedAt: Date;
}
