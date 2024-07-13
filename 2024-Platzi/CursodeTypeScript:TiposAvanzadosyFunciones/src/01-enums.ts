export enum ROLES {
  ADMIN = "admin",
  VENDEDOR = "vendedor",
  USUARIO = "usuario"
}

export type User = {
  username: string;
  rol: ROLES
}

const nachoUser : User = {
  username: "ignadev",
  rol: ROLES.ADMIN//Asi se asigna.
}


