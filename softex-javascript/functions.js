function confere(){
    return 'Caracter inválido!'
}

function setnome(nome){
    if (typeof(nome) === 'string'){
        return nome;
    }else{
        return confere();
    }
}

var idade = (idade) => {return (typeof(idade) === 'number') ? idade : confere()};

console.log(`Nome: ${setnome(21)}\nIdade: ${idade(21)}`);
console.log(`Nome: ${setnome('Bruna')}\nIdade: ${idade('l')}`);