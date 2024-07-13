export const createProduct = (
  id: string | number,
  isNew?: boolean,
  stock?: number // Los parametros opcionales siempre van al final
) => {
  return {
    id,
    stock: stock ?? 10,
    //isNew: isNew || true //Asi podemos tener un valor por defecto en el retorno, pero esto es de JS. Tiene problemas esto con los valores falsy
    isNew: isNew ?? true
  }
}


const producto1 = createProduct(1, false, 12)

console.log(producto1)
