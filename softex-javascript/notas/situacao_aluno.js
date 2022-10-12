var media = (nota1, nota2, nota3) => (nota1+nota2+nota3)/3
var situacao = (media) => {return (media>=7) ? 'Aprovado!' : 'Reprovado!'}

console.log(situacao(media(7, 7, 8)));