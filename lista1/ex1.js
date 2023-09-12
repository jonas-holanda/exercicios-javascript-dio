/* 1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre
 da faculdade calcule e imprima a sua média
  e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

// toFixed(2)  arredonda e formata em duas casas decimais

const n1 = 1;
const n2 = 2;
const n3 = 3;

const media = (n1 + n2 + n3) / 3;
console.log(media);

if (media < 5) {
    console.log('Reprovado');
} else if (media >= 5 && media <=7) {
    console.log('Recuperação');
} else {
    console.log('Aprovado');
}