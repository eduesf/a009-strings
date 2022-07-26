// Resolução do Exercício 3 

//Crie a const para a frase aqui

// a)
const frase1 = ("Jorge tem uma casa verde e")
const frase2 = ("com portão azul, com os dizeres:\"BOAS VINDAS,")
const frase3 = ("mas não deixe o gato sair\"")
const somaFrase = (`${frase1} ${frase2} ${frase3}`)
console.log (somaFrase)

// b)
const trocaFrase1 = frase1.replace("verde","rosa")
const trocaFrase2 = frase2.replace("azul","laranja")
const novaFrase = (`${trocaFrase1} ${trocaFrase2} ${frase3}`)
console.log (novaFrase)

// c)
console.log ("A nova String inclui a palavra \"verde\"?", novaFrase.includes("verde"))
console.log ("A nova String inclui a palavra \"laranja\"?", novaFrase.includes("laranja"))

// Extra 
const fonteFrase3 = (frase3.toUpperCase())
console.log (fonteFrase3)
console.log(`${trocaFrase1} ${trocaFrase2} ${fonteFrase3}`)
