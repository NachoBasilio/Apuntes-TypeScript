export const printObject = (argument: any) => {
    console.log(argument);
}

export function genericFunction<T>(argumento: T):T{
    return argumento;
}
