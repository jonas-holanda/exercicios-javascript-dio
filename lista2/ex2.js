/* 2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor
 do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura
 e peça ao José para dizer o valor
do seu IMC; */

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome,peso,altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculaImc () {
        return this.peso / Math.pow(this.altura,2);
    }
    
    classificaImc () {
        const imc = this.calculaImc();
        if (imc < 18.5) {
            console.log(this.nome +' seu IMC é de: '+imc.toFixed(2) +'. E você está Abaixo do peso.');
        } else if (imc >= 18.5 && imc < 25) {
            console.log(this.nome +' seu IMC é de: '+imc.toFixed(2) +'. E você está com o Peso normal.');
        } else if (imc >= 25 && imc <30) {
            console.log(this.nome +' seu IMC é de: '+imc.toFixed(2) +'. E você está Acima do peso.');
        } else if (imc >=30 && imc <= 40) {
            console.log(this.nome +' seu IMC é de: '+imc.toFixed(2) +'. E você está Obeso.');
        } else {
            console.log(this.nome +' seu IMC é de: '+imc.toFixed(2) +'. E você está com Obsesidade Grave.');
        }
    }
}

new Pessoa('José', 70, 1.75).classificaImc();
 

const p2 = new Pessoa('Carlos', 110, 1.71);
p2.classificaImc();