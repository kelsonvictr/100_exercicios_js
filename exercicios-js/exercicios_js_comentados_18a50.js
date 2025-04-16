
// 18 - Maior número do array
function maiorNumero(arr) {
  return Math.max(...arr)
}
console.log(maiorNumero([10, 25, 3, 99]))

// 19 - Menor número do array
function menorNumero(arr) {
  return Math.min(...arr)
}
console.log(menorNumero([10, 25, 3, 99]))

// 20 - Média de array
function mediaArray(arr) {
  const soma = arr.reduce((acc, n) => acc + n, 0)
  return soma / arr.length
}
console.log(mediaArray([5, 10, 15]))

// 21 - Filter: apenas pares
const pares = [1, 2, 3, 4, 5, 6].filter(n => n % 2 === 0)
console.log(pares)

// 22 - Map: dobrar valores
const dobrado = [1, 2, 3].map(n => n * 2)
console.log(dobrado)

// 23 - Reduce: somar tudo
const somaReduce = [1, 2, 3, 4].reduce((acc, n) => acc + n, 0)
console.log(somaReduce)

// 24 - Join de strings
const palavras = ["Olá", "mundo", "JavaScript"]
console.log(palavras.join(", "))

// 25 - Strings em maiúsculas
function paraMaiusculas(arr) {
  return arr.map(s => s.toUpperCase())
}
console.log(paraMaiusculas(["abacaxi", "banana"]))

// 26 - Strings em minúsculas
function paraMinusculas(arr) {
  return arr.map(s => s.toLowerCase())
}
console.log(paraMinusculas(["MAÇÃ", "UVA"]))

// 27 - Quadrado dos números
function quadradoArray(arr) {
  return arr.map(n => n * n)
}
console.log(quadradoArray([2, 3, 4]))

// 28 - Múltiplos de 3
function multiplosDe3(arr) {
  return arr.filter(n => n % 3 === 0)
}
console.log(multiplosDe3([3, 5, 9, 12, 14]))

// 29 - Strings que começam com "A"
function comecaComA(arr) {
  return arr.filter(s => s.startsWith("A"))
}
console.log(comecaComA(["Ana", "Bruno", "Amanda", "Carlos"]))

// 30 - Objeto carro
const carro = {
  modelo: "Civic",
  ano: 2020,
  cor: "Prata"
}
console.log(carro.modelo, carro.ano, carro.cor)

// 31 - Array de objetos - loop for
const alunos = [
  { nome: "João", idade: 18, notas: [7, 8, 9] },
  { nome: "Maria", idade: 17, notas: [6, 8, 10] }
]

for (let i = 0; i < alunos.length; i++) {
  console.log(alunos[i].nome)
}

// 32 - Map para nomes dos alunos
const nomes = alunos.map(aluno => aluno.nome)
console.log(nomes)

// 33 - Filter por idade
const maioresDeIdade = alunos.filter(aluno => aluno.idade >= 18)
console.log(maioresDeIdade)

// 34 - Média das idades
const mediaIdades = alunos.reduce((acc, aluno) => acc + aluno.idade, 0) / alunos.length
console.log("Média das idades:", mediaIdades)

// 35 - Decrementar 1 em cada número
function decrementar(arr) {
  return arr.map(n => n - 1)
}
console.log(decrementar([5, 10, 15]))

// 36 - Múltiplos de 5
function multiplosDe5(arr) {
  return arr.filter(n => n % 5 === 0)
}
console.log(multiplosDe5([5, 7, 10, 13, 20]))

// 37 - Strings invertidas
function inverterStrings(arr) {
  return arr.map(s => s.split('').reverse().join(''))
}
console.log(inverterStrings(["banana", "uva", "abacaxi"]))

// 38 - Strings que terminam com "a"
function terminaComA(arr) {
  return arr.filter(s => s.endsWith("a"))
}
console.log(terminaComA(["Ana", "Lucas", "Marta", "João"]))

// 39 - Números com duas casas decimais
function formatarNumeros(arr) {
  return arr.map(n => n.toFixed(2))
}
console.log(formatarNumeros([3, 4.5, 7.987]))

// 40 - Números maiores que 10
function maioresQueDez(arr) {
  return arr.filter(n => n > 10)
}
console.log(maioresQueDez([5, 12, 8, 20]))

// 41 - Primeira letra maiúscula
function primeiraMaiuscula(arr) {
  return arr.map(s => s.charAt(0).toUpperCase() + s.slice(1))
}
console.log(primeiraMaiuscula(["banana", "laranja", "uva"]))

// 42 - Strings com mais de 5 caracteres
function maisDe5Caracteres(arr) {
  return arr.filter(s => s.length > 5)
}
console.log(maisDe5Caracteres(["casa", "apartamento", "uva", "banana"]))

// 43 - Multiplicado por 3
function multiplicarPor3(arr) {
  return arr.map(n => n * 3)
}
console.log(multiplicarPor3([2, 4, 6]))

// 44 - Apenas pares
function apenasPares(arr) {
  return arr.filter(n => n % 2 === 0)
}
console.log(apenasPares([1, 2, 3, 4, 5, 6]))

// 45 - Strings em maiúsculas e invertidas
function maiusculaInvertida(arr) {
  return arr.map(s => s.toUpperCase().split('').reverse().join(''))
}
console.log(maiusculaInvertida(["abacate", "melancia"]))

// 46 - Strings que contêm "e"
function contemLetraE(arr) {
  return arr.filter(s => s.includes("e"))
}
console.log(contemLetraE(["bola", "estrela", "café", "livro"]))

// 47 - Multiplicado por 10
function multiplicarPor10(arr) {
  return arr.map(n => n * 10)
}
console.log(multiplicarPor10([1, 2, 3, 4]))

// 48 - Números ímpares
function apenasImpares(arr) {
  return arr.filter(n => n % 2 !== 0)
}
console.log(apenasImpares([1, 2, 3, 4, 5]))

// 49 - Última letra em maiúscula
function ultimaMaiuscula(arr) {
  return arr.map(s => {
    const len = s.length
    return s.slice(0, len - 1) + s.charAt(len - 1).toUpperCase()
  })
}
console.log(ultimaMaiuscula(["banana", "uva", "pera"]))

// 50 - Strings com 4 caracteres
function comQuatroCaracteres(arr) {
  return arr.filter(s => s.length === 4)
}
console.log(comQuatroCaracteres(["maçã", "uva", "kiwi", "pêra", "caju"]))
