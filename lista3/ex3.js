// 3) Faça um programa que dado uma lista de nomes imprima os nomes
//  que começem com a letra "V".

const nomes = ['Maria', 'vitória', 'Ana', 'virginia', 'Vinicius', 'Pedro', 'Vitor'];

for (let i = 0; i < nomes.length; i++) {
    const nomeMaiusculo = nomes[i].toUpperCase();
    if (nomeMaiusculo.substring(0,1) === 'V') {
        console.log(nomes[i]);
    }
    
}