import {User, ROLES} from "./01-enums"

const currentUser: User = {
  username: "Nacho",
  rol: ROLES.USUARIO
}

export const checkAdminRole = () => {
  if(currentUser.rol === ROLES.ADMIN){
    return true
  }
  return false
}




export const checkRol = (...roles: string[]) => {//Asi lo podemos hacer para seguir usando rest params
  if(roles.includes(currentUser.rol)){
    return true
  }
  return false
}


console.log(checkRol(ROLES.ADMIN, ROLES.USUARIO))//Le podemos mandar todos los parámetros que querramos.

