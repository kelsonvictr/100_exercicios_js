
// 1 - Escopo e impressão de nome completo
var nome = "João"
const cpf = "123.456.789-00"

function mostrarNomeCompleto() {
  let sobreNome = "Silva"
  console.log(`${nome} ${sobreNome}\n${cpf}`)
  console.log(`Nome completo: ${nome} ${sobreNome}, CPF: ${cpf}`)
}
mostrarNomeCompleto()

// 2 - Registro de produto com escopo
var produto = "Notebook"
const codigoProduto = "NT123"

function mostrarProduto() {
  let categoria = "Eletrônicos"
  console.log(`${produto}\n${categoria}\n${codigoProduto}`)
}
mostrarProduto()

// 3 - Registro de aluno com return e template literal
var nomeAluno = "Ana"
const matricula = "2023001"

function registrarAluno() {
  let curso = "Engenharia"
  return `Aluno: ${nomeAluno}, Curso: ${curso}, Matrícula: ${matricula}`
}
console.log(registrarAluno())

// 4 - objetivoDoCurso: function e arrow
const tecnologia = "React"

function objetivoDoCurso(tecnologia) {
  return `Meu objetivo é aprender ${tecnologia}`
}
const objetivoArrow = (tecnologia) => `Meu objetivo é aprender ${tecnologia}`
console.log(objetivoDoCurso(tecnologia))
console.log(objetivoArrow(tecnologia))

// 5 - objetivo de carreira
function carreiraTradicional(carreira) {
  return `Meu objetivo de carreira é me tornar um ${carreira}`
}
const carreiraArrow = (carreira) => `Meu objetivo de carreira é me tornar um ${carreira}`
console.log(carreiraTradicional("Desenvolvedor"))
console.log(carreiraArrow("Designer"))

// 6 - Objeto literal pessoa
const pessoa = {
  nome: "Lucas",
  cpf: "987.654.321-00",
  cidade: "Recife"
}
console.log(pessoa.nome)
console.log(pessoa.cpf)
console.log(pessoa.cidade)

// 7 - Objeto + array + cálculo
const aluno = {
  nome: "Carla",
  cpf: "111.222.333-44",
  cidade: "Salvador",
  notas: [8, 7.5, 9, 6]
}
console.log(`Nome: ${aluno.nome}, CPF: ${aluno.cpf}, Cidade: ${aluno.cidade}`)
aluno.notas.forEach((nota, i) => console.log(`Nota ${i + 1}: ${nota}`))
const media = aluno.notas.reduce((acc, n) => acc + n, 0) / aluno.notas.length
console.log(`Média: ${media.toFixed(2)}`)
const notaAleatoria = aluno.notas[Math.floor(Math.random() * aluno.notas.length)]
console.log(`Nota aleatória convertida para 100: ${notaAleatoria * 10}`)

// 8 - Média e situação
const notas = [7, 6, 8]
const mediaNotas = (notas[0] + notas[1] + notas[2]) / 3
console.log(`A primeira nota do aluno é: ${notas[0]}`)
console.log(`A segunda nota do aluno é: ${notas[1]}`)
console.log(`A terceira nota do aluno é: ${notas[2]}`)
console.log(`A média do aluno é: ${mediaNotas.toFixed(2)}`)
console.log(`O aluno está: ${mediaNotas >= 7 ? "APROVADO" : "REPROVADO"}`)

// 9 - FizzBuzz com for
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) console.log("FizzBuzz")
  else if (i % 3 === 0) console.log("Fizz")
  else if (i % 5 === 0) console.log("Buzz")
  else console.log(i)
}

// 10 - FizzBuzz com .map()
const numeros = Array.from({ length: 100 }, (_, i) => i + 1)
numeros.map(n => {
  if (n % 15 === 0) console.log("FizzBuzz")
  else if (n % 3 === 0) console.log("Fizz")
  else if (n % 5 === 0) console.log("Buzz")
  else console.log(n)
})

// 11 - Mudar texto com DOM (para uso em HTML)
// function mudaTexto() {
//   const titulo = document.getElementById("titulo")
//   titulo.innerText = "Novo Título"
// }

// 12 - Altura ao quadrado
let altura = 1.75
function calcularAlturaAoQuadrado() {
  console.log("Altura ao quadrado:", altura * altura)
}
calcularAlturaAoQuadrado()

// 13 - Largura ao cubo
var largura = 2
function larguraAoCubo() {
  console.log("Largura ao cubo:", Math.pow(largura, 3))
}
larguraAoCubo()

// 14 - Área de triângulo
const base = 10
function areaTriangulo(altura) {
  console.log("Área do triângulo:", (base * altura) / 2)
}
areaTriangulo(5)

// 15 - Loop de frutas
const frutas = ["Banana", "Maçã", "Uva"]
for (let fruta of frutas) {
  console.log(fruta)
}

// 16 - Soma com while
const numerosArray = [2, 4, 6, 8]
let i = 0
let soma = 0
while (i < numerosArray.length) {
  soma += numerosArray[i]
  i++
}
console.log("Soma dos números:", soma)

// 17 - Objeto livro
const livro = {
  titulo: "O Pequeno Príncipe",
  autor: "Antoine de Saint-Exupéry",
  anoPublicacao: 1943
}
console.log(livro.titulo, livro.autor, livro.anoPublicacao)