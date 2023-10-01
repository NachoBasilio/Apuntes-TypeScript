(()=>{
    type RiverPlayer = {
        name: string,
        salary: number,
        active: boolean
    }

    const pityMartinez: RiverPlayer = {
        name: 'Gonzalo Pity Martinez',
        salary: 1000000,
        active: true
    }

    const juanferQuintero: RiverPlayer = {
        name: 'Juan Fernando Quintero',
        salary: 500000,
        active: false
    }

    const enzoPerez: RiverPlayer = {
        name: 'Enzo Perez',
        salary: 800000,
        active: true
    }

    const riverPlayers: RiverPlayer[] = [pityMartinez, juanferQuintero, enzoPerez]

    for (const player of riverPlayers) {
        console.log(player.name)
    }
})()