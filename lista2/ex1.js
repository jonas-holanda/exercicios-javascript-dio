/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de
 combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível
 nos dê o valor gasto em reais para realizar este percurso. */

// Gasto médio é quantos quilometros o carro consegue fazer por litro EX: 1l / 10km = 0,1l por km  

 class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor (marca,cor,gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    valorPercurso (quilometros, precoCombustivel) {
        const valorGasto = quilometros * this.gastoMedioKm * precoCombustivel;
        return "O valor gasto na viagem é de: R$"+valorGasto.toFixed(2);
    }
 }

 const carro1 = new Carro("Chevrolet","Azul",1/12);
 console.log(carro1.valorPercurso(70,5));

 const carro2 = new Carro("Citroen","Vermelho",1/10);
 console.log(carro2.valorPercurso(70,5));