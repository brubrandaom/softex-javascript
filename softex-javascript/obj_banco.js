class Banco {
    constructor(conta, saldo, tipo, agencia) {
        this.conta = conta;
        this.saldo = saldo;
        this.tipo = tipo;
        this.agencia = agencia;
    };
    buscarSaldo() {
        return this.saldo;
    };
    deposito(valorDeposito) {
        this.saldo += valorDeposito;
    };
    saque(valorSaque) {
        this.saldo -= valorSaque;
    };
    numeroDaConta() {
        return this.conta;
    };

}

var Conta = new Banco(12345, 2000, 'Conta corrente', 123);
console.log(Conta.buscarSaldo());
Conta.deposito(500);
console.log(Conta.buscarSaldo());
Conta.saque(1000);
console.log(Conta.buscarSaldo());



