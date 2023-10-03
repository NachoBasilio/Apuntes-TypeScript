namespace Validations{//Los namespaces son como un mini modulo o programa donde vamos a tener funciones, clases, interfaces, etc y vamos a elegir que exportar
    export const validateText = (text: string): boolean => {
        return text.length > 0 ? true : false;
    }

    export const validateDate = (date: Date): boolean => {
        return date < new Date() ? true : false;
    }
}

Validations.validateText('Hello');