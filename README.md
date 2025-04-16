## Praticar JS puro: (100 questões)

![image](https://github.com/user-attachments/assets/84518ba0-1237-45ee-ab49-64f08b47e7c4)


1 - Crie um script que tenha três variáveis:
```js
var nome;
let sobreNome;
const cpf;
```
nome e cpf devem estar em um escopo global. sobreNome deve estar dentro de uma função. A execução do programa deve imprimir o nome completo na ordem correta (com quebra de linha): Nome Sobrenome CPF. Outra linha com uma mensagem concatenando os valores.

2 - Crie um script que simule um sistema de registro de produtos. O script deve ter três variáveis:
```js
var produto;
let categoria;
const codigoProduto;
```
As variáveis produto e codigoProduto devem estar em um escopo global. A variável categoria deve estar dentro de uma função. A execução do programa deve imprimir os detalhes do produto na ordem correta (com quebra de linha): Produto Categoria Código do Produto.

3 - Crie um script que simule o registro de informações de um aluno. O script deve ter três variáveis:
```js
var nomeAluno;
let curso;
const matricula;
```
As variáveis nomeAluno e matricula devem estar em um escopo global. A variável curso deve estar dentro de uma função. A função deve retornar uma string que concatene todas as informações do aluno em uma única linha utilizando template literals `${var}`.

4 - Faça um script que contenha uma função objetivoDoCurso(tecnologia). A função deve retornar a string: “Meu objetivo é aprender [parametro tecnologia]”. Fora da função, defina uma const tecnologia que possua o valor “React”. Chame a execução da função para que a mesma retorne: “Meu objetivo é aprender React”. Faça um exemplo com function e outro com arrow function.

5 - Crie um script que contenha duas funções, uma usando a sintaxe tradicional e outra usando arrow function. Ambas as funções devem receber um parâmetro carreira e retornar uma string concatenada usando template literals `${var}`. Retorno: "Meu objetivo de carreira é me tornar um [parametro carreira]".

6 - Crie um script que contenha um objeto literal chamado pessoa. O objeto deve armazenar informações sobre uma pessoa, incluindo:
- nome: O nome da pessoa.
- cpf: O CPF da pessoa.
- cidade: A cidade onde a pessoa mora.
Declare e inicialize o objeto pessoa com valores para nome, cpf e cidade. Imprima cada uma das propriedades do objeto pessoa usando console.log.

7 - Crie um script que combine o uso de objetos literais, arrays e cálculos simples para armazenar e manipular informações pessoais e acadêmicas de uma pessoa. O script deve realizar as seguintes tarefas:
- nome: O nome do aluno.
- cpf: O CPF do aluno.
- cidade: A cidade onde o aluno mora.
- notas: Um array com 4 notas do aluno.
Imprima o nome, CPF e cidade do aluno. Imprima cada uma das notas do array notas. Calcule a média das notas do aluno e imprima. Selecione uma das notas aleatoriamente, convertê-la de uma escala de 0-10 para uma escala de 0-100 (nota convertida = nota × 10). Utilize a sintaxe notas[Math.floor(Math.random() * notas.length)] para selecionar uma nota aleatória do array. Utilize template literals para a concatenação de strings.

8 - Faça um script que contenha um array chamado notas, esse array armazena 3 notas de um aluno. O programa deve imprimir:
- A primeira nota do aluno é: …
- A segunda nota do aluno é: …
- A terceira nota do aluno é: …
- A média do aluno é: …
- O aluno está: APROVADO ou REPROVADO (APROVADO quando a média for maior ou igual a 7).

9 - Escreva um programa que imprima os números de 1 a 100. Mas, para múltiplos de 3, imprima "Fizz" em vez do número e, para múltiplos de 5, imprima "Buzz". Para números que são múltiplos de ambos 3 e 5, imprima "FizzBuzz".

10 - Refaça o exercício anterior utilizando `.map()`. Para criar um array com números de 1 a 100:
```js
const numeros = Array.from({ length: 100 }, (_, index) => index + 1);
```

11 - Suponha que temos a seguinte página HTML. Crie um script em JS (no arquivo script.js) que tenha uma função “mudaTexto()”, ela deve ser responsável por mudar o texto do elemento `<h1>` para “Novo Título” quando o botão for clicado. Dica: para selecionar o elemento você pode utilizar `document.getElementById(“id-do-elemento”)`. Com esse elemento selecionado, você pode mudar o texto: `variavelQueSelecionouOElemento.innerText = “Novo Título”`.

12 - Crie um script que declare uma variável let altura e atribua a ela um valor numérico. Em seguida, declare uma função que calcule a altura ao quadrado e imprima o resultado.

13 - Crie um script que declare uma variável var largura e atribua a ela um valor numérico. Declare uma função que calcule a largura ao cubo e imprima o resultado.

14 - Crie um script que declare uma variável const base e atribua a ela um valor numérico. Declare uma função que calcule a área de um triângulo usando a base e uma altura fornecida como parâmetro e imprima o resultado.

15 - Crie um script que declare um array de nomes de frutas e utilize um loop `for` para imprimir cada fruta em uma linha separada.

16 - Crie um script que declare um array de números e utilize um loop `while` para calcular a soma de todos os números do array. Imprima o resultado.

17 - Crie um script que declare um objeto chamado livro com as propriedades `titulo`, `autor` e `anoPublicacao`. Inicialize o objeto com valores e imprima todas as propriedades usando `console.log`.

18 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o maior número do array. Utilize a função `Math.max()` para encontrar o maior número.

19 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne o menor número do array. Utilize a função `Math.min()` para encontrar o menor número.

20 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne a média dos números do array.

21 - Crie um script que declare um array de números e utilize a função `filter()` para criar um novo array contendo apenas os números pares. Imprima o novo array.

22 - Crie um script que declare um array de números e utilize a função `map()` para criar um novo array onde cada número seja multiplicado por 2. Imprima o novo array.

23 - Crie um script que declare um array de números e utilize a função `reduce()` para calcular a soma de todos os números do array. Imprima o resultado.

24 - Crie um script que declare um array de strings e utilize a função `join()` para concatenar todas as strings em uma única string, separadas por vírgulas. Imprima o resultado.

25 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras maiúsculas. Utilize a função `toUpperCase()` para converter as strings.

26 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras minúsculas. Utilize a função `toLowerCase()` para converter as strings.

27 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado ao quadrado.

28 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 3.

29 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "A".

30 - Crie um script que declare um objeto chamado `carro` com as propriedades `modelo`, `ano` e `cor`. Inicialize o objeto com valores e imprima todas as propriedades usando `console.log`.

31 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades `nome`, `idade` e `notas` (um array de números). Utilize um loop `for` para imprimir o nome de cada aluno.

32 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades `nome`, `idade` e `notas` (um array de números). Utilize a função `map()` para criar um novo array contendo apenas os nomes dos alunos. Imprima o novo array.

33 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades `nome`, `idade` e `notas` (um array de números). Utilize a função `filter()` para criar um novo array contendo apenas os alunos com idade maior ou igual a 18 anos. Imprima o novo array.

34 - Crie um script que declare um array de objetos, onde cada objeto representa um aluno e possui as propriedades `nome`, `idade` e `notas` (um array de números). Utilize a função `reduce()` para calcular a média das idades dos alunos.

 Imprima o resultado.

35 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja decrementado em 1.

36 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 5.

37 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja invertida. Utilize a função `reverse()` para inverter as strings.

38 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que terminam com a letra "a".

39 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja convertido para uma string com duas casas decimais. Utilize a função `toFixed()` para formatar os números.

40 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são maiores que 10.

41 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira letra em maiúscula. Utilize a função `toUpperCase()` para converter a primeira letra.

42 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm mais de 5 caracteres.

43 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 3.

44 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 2.

45 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras maiúsculas e invertida.

46 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "e".

47 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 10.

48 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são ímpares.

49 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a última letra em maiúscula. Utilize a função `toUpperCase()` para converter a última letra.

50 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 4 caracteres.

51 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja incrementado em 5.

52 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são menores que 50.

53 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as vogais removidas. Utilize a função `replace()` para remover as vogais.

54 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "B".

55 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja dividido por 2.

56 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 4.

57 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string esteja em letras minúsculas e invertida.

58 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "o".

59 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado ao cubo.

60 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 7.

61 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira e a última letra em maiúscula. Utilize a função `toUpperCase()` para converter as letras.

62 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 6 caracteres.

63 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja decrementado em 2.

64 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são maiores que 20.

65 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as consoantes removidas. Utilize a função `replace()` para remover as consoantes.

66 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "C".

67 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 5.

68 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são ímpares e maiores que 15.

69 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira e a última letra em minúscula. Utilize a função `toLowerCase()` para converter as letras.

70 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm mais de 7 caracteres.

71 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja incrementado em 3.

72 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são menores que 30.

73 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as vogais duplicadas. Utilize a função `replace()` para duplicar as vogais.

74 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "i".

75 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado à quarta potência.

76 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 6.

77 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha todas as letras em maiúscula e invertida.

78 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "u".

79 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 7.

80 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 8.

81 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira letra em maiúscula e a última letra em minúscula. Utilize a função `toUpperCase()` e `toLowerCase()` para converter as letras.

82 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 8 caracteres.

83 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja decrementado em 4.

84 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são maiores que 25.

85 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array

 onde cada string tenha as consoantes duplicadas. Utilize a função `replace()` para duplicar as consoantes.

86 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que começam com a letra "D".

87 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 4.

88 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são ímpares e menores que 20.

89 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha a primeira letra em minúscula e a última letra em maiúscula. Utilize a função `toLowerCase()` e `toUpperCase()` para converter as letras.

90 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que têm exatamente 9 caracteres.

91 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja incrementado em 6.

92 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são menores que 35.

93 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha as vogais triplicadas. Utilize a função `replace()` para triplicar as vogais.

94 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "y".

95 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja elevado à quinta potência.

96 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são múltiplos de 9.

97 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array onde cada string tenha todas as letras em maiúscula e invertida.

98 - Crie um script que declare uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que contêm a letra "z".

99 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array onde cada número seja multiplicado por 8.

100 - Crie um script que declare uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números que são divisíveis por 10.

## Manipulação da DOM (HTML + JS) (50 questões)

50 exercícios com maior complexidade, envolvendo condicionais, loops, funções e manipulação de DOM, baseados nos assuntos trabalhados anteriormente:

1. Crie uma página que calcule a média de quatro notas inseridas pelo usuário. Exiba se o aluno foi aprovado (média >= 7) ou reprovado (média < 7).

2. Crie uma página que verifique se um número é primo. O usuário deve inserir um número e a página deve exibir se ele é primo ou não.

3. Crie uma página que gere um número aleatório entre 1 e 100 e permita que o usuário tente adivinhar. Informe se a tentativa é maior, menor ou igual ao número gerado.

4. Crie uma página que calcule a soma dos números de 1 a N, onde N é um valor inserido pelo usuário.

5. Crie uma página que exiba a tabuada de um número inserido pelo usuário, utilizando loops.

6. Crie uma página que receba uma lista de nomes e exiba o nome mais longo e o mais curto.

7. Crie uma página que calcule o fatorial de um número inserido pelo usuário.

8. Crie uma página que simule o lançamento de dois dados e exiba o resultado da soma. Adicione um botão para lançar novamente.

9. Crie uma página que receba um texto e conte o número de vogais e consoantes.

10. Crie uma página que converta um valor de decimal para binário.

11. Crie uma página que calcule a sequência de Fibonacci até um número N inserido pelo usuário.

12. Crie uma página que verifique se uma palavra é um palíndromo.

13. Crie uma página que ordene uma lista de números inseridos pelo usuário.

14. Crie uma página que encontre o maior e o menor número em uma lista de números inseridos pelo usuário.

15. Crie uma página que verifique se um número é perfeito (igual à soma de seus divisores próprios).

16. Crie uma página que exiba os números pares e ímpares de 1 a N, onde N é inserido pelo usuário.

17. Crie uma página que simule uma calculadora com operações básicas e avançadas (potenciação e raiz quadrada).

18. Crie uma página que receba uma lista de produtos e preços, calcule o total e aplique um desconto baseado em uma condição (por exemplo, desconto de 10% se o total for maior que 100).

19. Crie uma página que calcule o tempo necessário para um investimento dobrar de valor com base em uma taxa de juros anual inserida pelo usuário.

20. Crie uma página que simule um jogo de adivinhar números com múltiplas tentativas e dê dicas para o usuário.

21. Crie uma página que receba a data de nascimento do usuário e calcule sua idade exata.

22. Crie uma página que receba uma lista de nomes e os exiba em ordem alfabética.

23. Crie uma página que simule um sistema de login. Verifique se o nome de usuário e a senha estão corretos.

24. Crie uma página que receba um array de números e calcule a média, mediana e moda.

25. Crie uma página que gere uma senha aleatória com base em um comprimento inserido pelo usuário.

26. Crie uma página que receba uma frase e conte o número de palavras.

27. Crie uma página que converta um valor de binário para decimal.

28. Crie uma página que receba um valor de temperatura em Celsius e converta para Kelvin e Fahrenheit.

29. Crie uma página que receba uma lista de números e exiba apenas os números primos.

30. Crie uma página que simule um sistema de votação. O usuário pode votar em diferentes opções e o resultado é exibido ao final.

31. Crie uma página que receba um número e exiba sua representação em números romanos.

32. Crie uma página que exiba a série de números primos até um valor N inserido pelo usuário.

33. Crie uma página que calcule o MDC (Máximo Divisor Comum) de dois números inseridos pelo usuário.

34. Crie uma página que receba um texto e substitua todas as ocorrências de uma palavra por outra.

35. Crie uma página que simule um sistema de caixa eletrônico. O usuário insere um valor e a página exibe a quantidade de notas de cada valor necessário para totalizar o valor inserido.

36. Crie uma página que verifique se um CPF inserido é válido.

37. Crie uma página que receba uma lista de nomes e permita que o usuário busque por um nome específico, exibindo se ele está na lista ou não.

38. Crie uma página que receba um valor em reais e converta para dólares, euros e libras com base em taxas de câmbio fixas.

39. Crie uma página que receba um número e exiba sua decomposição em fatores primos.

40. Crie uma página que simule um cronômetro com funções de iniciar, parar e resetar.

41. Crie uma página que receba uma lista de preços e calcule o preço médio, o maior e o menor preço.

42. Crie uma página que receba uma lista de temperaturas e exiba a maior, a menor e a média das temperaturas.

43. Crie uma página que calcule a velocidade média de um percurso com base no tempo e na distância inseridos pelo usuário.

44. Crie uma página que receba um número e exiba todos os seus divisores.

45. Crie uma página que receba um array de números e exiba os números em ordem decrescente.

46. Crie uma página que simule um formulário de contato com validação de campos obrigatórios.

47. Crie uma página que receba uma lista de notas e exiba a maior, a menor e a média das notas.

48. Crie uma página que receba um texto e conte a frequência de cada letra.

49. Crie uma página que receba um número e exiba seu valor absoluto.

50. Crie uma página que receba uma data e exiba o dia da semana correspondente.
