async function newpoke(){
    const totpokedata = await fetch('https://pokeapi.co/api/v2/pokemon?limit=898');
    const data = await totpokedata.json();
    const count = data.count; 

    let randid = Math.floor(Math.random()*count + 1);

    let t = await stat_finder(randid)

    return t
}

async function stat_finder(id) {
    let pokedata = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let p = await pokedata.json();
    let t = p.stats[1].base_stat;

    return t
}


