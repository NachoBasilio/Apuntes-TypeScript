interface myInterface<T>{
    field:T;
}

const myObject: myInterface<number> = {
    field: 1
}

function getData<T>(id: string): Promise<T> |void {
    
}