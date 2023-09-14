// 4) Faça um programa que preencha uma lista com todos os números pares
//  contidos no intervalo de 10 a 50;

let pares = [];

for (let i=10; i<=50; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    }
}

console.log(`Os números pares entre 10 e 50 são: ${pares}`);