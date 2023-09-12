/* 3) Elabore um algoritmo que calcule o que deve ser pago por um produto,
 considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento
 escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1- À vista Débito, recebe 10% de desconto;
2- À vista no Dinheiro ou PIX, recebe 15% de desconto;
3- Em duas vezes, preço normal de etiqueta sem juros;
4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%; */


function valorComDesconto (valor, desconto) {
    const precoComDesconto = valor - (desconto / 100 * valor);
    return 'Preço do produto é: R$'+valor+'. Mas com '+desconto+'% de desconto fica por: R$'+precoComDesconto;
}

function valorComJuros (valor, juros) {
    const precoComJuros = valor - (juros / 100 * valor);
    return 'Preço do produto é: R$'+valor+'. Mas com '+juros+'% de juros fica por: R$'+precoComJuros;
}

function formaPagamento (valorProduto, pagamento) {
    if (pagamento === 1) {
        console.log(valorComDesconto(valorProduto, 10));
    } else if (pagamento === 2) {
        console.log(valorComDesconto(valorProduto, 15));
    } else if (pagamento === 3) {
        console.log('Preço do produto é: R$'+valorProduto);
    } else {
        console.log(valorComJuros(valorProduto, 10));
    }
}

(function () {
    const preco = 100;
    const formaDePagamento = 4;

    formaPagamento(preco, formaDePagamento);
})();





