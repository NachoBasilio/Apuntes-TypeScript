(()=>{
    const fullName = (fistName: string, ...restArgs: string[]): string => {
        return `${fistName} ${restArgs.join(' ')}`;
    }

    const superman = fullName('Clark', 'Joseph', 'Kent');
    const ironman = fullName('Anthony', 'Edward', 'Tony', 'Stark');
    console.log({superman, ironman});
    
})()