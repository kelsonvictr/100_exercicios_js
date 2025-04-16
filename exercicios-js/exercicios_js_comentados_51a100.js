
// 51 - Incrementar 5
function incrementar5(arr) {
  return arr.map(n => n + 5)
}
console.log(incrementar5([1, 2, 3]))

// 52 - Menores que 50
function menoresQue50(arr) {
  return arr.filter(n => n < 50)
}
console.log(menoresQue50([10, 60, 30, 80]))

// 53 - Remover vogais
function removerVogais(arr) {
  return arr.map(s => s.replace(/[aeiouAEIOU]/g, ''))
}
console.log(removerVogais(["banana", "uva", "maçã"]))

// 54 - Começam com B
function comecaComB(arr) {
  return arr.filter(s => s.startsWith("B"))
}
console.log(comecaComB(["Banana", "Uva", "Bolo", "Café"]))

// 55 - Divididos por 2
function dividirPor2(arr) {
  return arr.map(n => n / 2)
}
console.log(dividirPor2([10, 20, 30]))

// 56 - Múltiplos de 4
function multiplosDe4(arr) {
  return arr.filter(n => n % 4 === 0)
}
console.log(multiplosDe4([4, 8, 15, 16]))

// 57 - Minúsculas e invertidas
function minusculasInvertidas(arr) {
  return arr.map(s => s.toLowerCase().split('').reverse().join(''))
}
console.log(minusculasInvertidas(["Banana", "UVA"]))

// 58 - Contêm letra "o"
function contemLetraO(arr) {
  return arr.filter(s => s.includes("o"))
}
console.log(contemLetraO(["bola", "uva", "carro"]))

// 59 - Elevado ao cubo
function elevarAoCubo(arr) {
  return arr.map(n => n ** 3)
}
console.log(elevarAoCubo([2, 3, 4]))

// 60 - Múltiplos de 7
function multiplosDe7(arr) {
  return arr.filter(n => n % 7 === 0)
}
console.log(multiplosDe7([7, 14, 21, 30]))

// 61 - Primeira e última maiúscula
function primeiraUltimaMaiuscula(arr) {
  return arr.map(s => s.charAt(0).toUpperCase() + s.slice(1, -1) + s.slice(-1).toUpperCase())
}
console.log(primeiraUltimaMaiuscula(["banana", "uva"]))

// 62 - Strings com 6 caracteres
function comSeisCaracteres(arr) {
  return arr.filter(s => s.length === 6)
}
console.log(comSeisCaracteres(["banana", "uva", "abacate"]))

// 63 - Decrementar 2
function decrementar2(arr) {
  return arr.map(n => n - 2)
}
console.log(decrementar2([10, 20, 30]))

// 64 - Maiores que 20
function maioresQue20(arr) {
  return arr.filter(n => n > 20)
}
console.log(maioresQue20([15, 25, 30]))

// 65 - Remover consoantes
function removerConsoantes(arr) {
  return arr.map(s => s.replace(/[^aeiouAEIOU]/g, ''))
}
console.log(removerConsoantes(["banana", "uva", "maçã"]))

// 66 - Começam com C
function comecaComC(arr) {
  return arr.filter(s => s.startsWith("C"))
}
console.log(comecaComC(["Casa", "Bola", "Cadeira", "Mesa"]))

// 67 - Multiplicado por 5
function multiplicarPor5(arr) {
  return arr.map(n => n * 5)
}
console.log(multiplicarPor5([1, 2, 3]))

// 68 - Ímpares maiores que 15
function imparesMaioresQue15(arr) {
  return arr.filter(n => n % 2 !== 0 && n > 15)
}
console.log(imparesMaioresQue15([10, 17, 19, 22]))

// 69 - Primeira minúscula, última minúscula
function primeiraUltimaMinuscula(arr) {
  return arr.map(s => s.charAt(0).toLowerCase() + s.slice(1, -1) + s.slice(-1).toLowerCase())
}
console.log(primeiraUltimaMinuscula(["Banana", "UVA"]))

// 70 - Strings com mais de 7 caracteres
function maisDe7Caracteres(arr) {
  return arr.filter(s => s.length > 7)
}
console.log(maisDe7Caracteres(["banana", "abacaxi", "uva", "maracujá"]))

// 71 - Incrementar 3
function incrementar3(arr) {
  return arr.map(n => n + 3)
}
console.log(incrementar3([1, 2, 3]))

// 72 - Menores que 30
function menoresQue30(arr) {
  return arr.filter(n => n < 30)
}
console.log(menoresQue30([10, 40, 20, 35]))

// 73 - Duplicar vogais
function duplicarVogais(arr) {
  return arr.map(s => s.replace(/[aeiou]/gi, (v) => v + v))
}
console.log(duplicarVogais(["banana", "uva"]))

// 74 - Contêm letra "i"
function contemLetraI(arr) {
  return arr.filter(s => s.includes("i"))
}
console.log(contemLetraI(["uva", "abacaxi", "limão"]))

// 75 - Elevado à quarta potência
function elevadoQuarta(arr) {
  return arr.map(n => n ** 4)
}
console.log(elevadoQuarta([2, 3]))

// 76 - Múltiplos de 6
function multiplosDe6(arr) {
  return arr.filter(n => n % 6 === 0)
}
console.log(multiplosDe6([6, 12, 18, 19]))

// 77 - Maiúscula e invertida
function maiusculaInvertida(arr) {
  return arr.map(s => s.toUpperCase().split('').reverse().join(''))
}
console.log(maiusculaInvertida(["banana", "uva"]))

// 78 - Contêm letra "u"
function contemLetraU(arr) {
  return arr.filter(s => s.includes("u"))
}
console.log(contemLetraU(["uva", "banana", "caju"]))

// 79 - Multiplicado por 7
function multiplicarPor7(arr) {
  return arr.map(n => n * 7)
}
console.log(multiplicarPor7([1, 2, 3]))

// 80 - Divisíveis por 8
function divisiveisPor8(arr) {
  return arr.filter(n => n % 8 === 0)
}
console.log(divisiveisPor8([8, 16, 24, 25]))

// 81 - Primeira maiúscula e última minúscula
function primeiraMaiusculaUltimaMinuscula(arr) {
  return arr.map(s => s.charAt(0).toUpperCase() + s.slice(1, -1) + s.slice(-1).toLowerCase())
}
console.log(primeiraMaiusculaUltimaMinuscula(["banana", "UVA"]))

// 82 - Strings com 8 caracteres
function comOitoCaracteres(arr) {
  return arr.filter(s => s.length === 8)
}
console.log(comOitoCaracteres(["abacate", "camarada", "melancia"]))

// 83 - Decrementar 4
function decrementar4(arr) {
  return arr.map(n => n - 4)
}
console.log(decrementar4([10, 15, 20]))

// 84 - Maiores que 25
function maioresQue25(arr) {
  return arr.filter(n => n > 25)
}
console.log(maioresQue25([20, 30, 40]))

// 85 - Duplicar consoantes
function duplicarConsoantes(arr) {
  return arr.map(s => s.replace(/[^aeiou\s\d\W_]/gi, c => c + c))
}
console.log(duplicarConsoantes(["banana", "uva"]))

// 86 - Começam com D
function comecaComD(arr) {
  return arr.filter(s => s.startsWith("D"))
}
console.log(comecaComD(["Dado", "Bola", "Dente"]))

// 87 - Multiplicar por 4
function multiplicarPor4(arr) {
  return arr.map(n => n * 4)
}
console.log(multiplicarPor4([1, 2, 3]))

// 88 - Ímpares menores que 20
function imparesMenoresQue20(arr) {
  return arr.filter(n => n % 2 !== 0 && n < 20)
}
console.log(imparesMenoresQue20([5, 10, 21, 19]))

// 89 - Primeira minúscula, última maiúscula
function primeiraMinusculaUltimaMaiuscula(arr) {
  return arr.map(s => s.charAt(0).toLowerCase() + s.slice(1, -1) + s.slice(-1).toUpperCase())
}
console.log(primeiraMinusculaUltimaMaiuscula(["Banana", "UVA"]))

// 90 - Strings com 9 caracteres
function comNoveCaracteres(arr) {
  return arr.filter(s => s.length === 9)
}
console.log(comNoveCaracteres(["abacate", "camaradas", "maracujá"]))

// 91 - Incrementar 6
function incrementar6(arr) {
  return arr.map(n => n + 6)
}
console.log(incrementar6([1, 2, 3]))

// 92 - Menores que 35
function menoresQue35(arr) {
  return arr.filter(n => n < 35)
}
console.log(menoresQue35([30, 40, 50]))

// 93 - Triplicar vogais
function triplicarVogais(arr) {
  return arr.map(s => s.replace(/[aeiou]/gi, v => v.repeat(3)))
}
console.log(triplicarVogais(["banana", "uva"]))

// 94 - Contêm letra "y"
function contemLetraY(arr) {
  return arr.filter(s => s.includes("y"))
}
console.log(contemLetraY(["yes", "you", "no"]))

// 95 - Elevado à quinta
function elevadoQuinta(arr) {
  return arr.map(n => n ** 5)
}
console.log(elevadoQuinta([2, 3]))

// 96 - Múltiplos de 9
function multiplosDe9(arr) {
  return arr.filter(n => n % 9 === 0)
}
console.log(multiplosDe9([9, 18, 27, 30]))

// 97 - Maiúsculas e invertidas
function todasMaiusculasInvertidas(arr) {
  return arr.map(s => s.toUpperCase().split('').reverse().join(''))
}
console.log(todasMaiusculasInvertidas(["banana", "uva"]))

// 98 - Contêm letra "z"
function contemLetraZ(arr) {
  return arr.filter(s => s.includes("z"))
}
console.log(contemLetraZ(["zero", "banana", "zebra"]))

// 99 - Multiplicado por 8
function multiplicarPor8(arr) {
  return arr.map(n => n * 8)
}
console.log(multiplicarPor8([1, 2, 3]))

// 100 - Divisíveis por 10
function divisiveisPor10(arr) {
  return arr.filter(n => n % 10 === 0)
}
console.log(divisiveisPor10([10, 15, 20, 33]))
