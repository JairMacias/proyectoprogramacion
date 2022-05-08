const ejemplo =async()=> {
    let httpEl = await fetch ("https://pokeapi.co/api/v2/pokemon?limit=10");
    let second = await httpEl.json();
    console.log ("second", second);
};