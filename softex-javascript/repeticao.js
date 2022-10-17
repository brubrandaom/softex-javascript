const filme = {
    titulo: 'Into the wild',
    ano: 2007,
    genero: 'Drama/Aventura',
    duracao: '2h 28m'
};

const musicas = ['Grace', 'Azul', 'Marigold', 'She had the world'];

function loopIn(obj){
    for (const key in obj){
    console.log(`${key}: ${obj[key]}`);
    }
}

function loopOf(array){
    for (const index of array){
    console.log(index);
    }
}

loopIn(filme);
loopOf(musicas);