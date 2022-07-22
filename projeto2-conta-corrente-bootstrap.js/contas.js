class Cliente {
    
    constructor(nome, cpf, email, telefone,conta) {
      this.nome = nome;
      this.cpf = cpf;
      this.email = email;
      this.telefone = telefone;
      this.conta = conta;
    }
  
    exibirDadosCliente() {
      return (`CLIENTE: ${this.nome},
      CPF:${this.cpf},
      E-MAIL:${this.email},
      FONE:${this.telefone}
      CONTA:${this.conta}`);
    }

  }
  
  class ContaCorrente extends Cliente {
    constructor(nome, cpf, email, telefone, conta, saldo) {
      super(nome, cpf, email, telefone, conta);
      this.saldo = saldo;
    }
  
    depositar(valorDepositar) {
      this.saldo += valorDepositar;
      console.log(`Seu novo saldo é de R$${this.saldo}.`);
    }
  
    sacar(valorSacar) {
      if (this.saldo < valorSacar) {
        alert(`Seu saldo é R$${this.saldo}, saldo insuficiente!`);
      } else {
        this.saldo -= valorSacar;
        console.log(`Você sacou R$${valorSacar}, seu saldo é R$${this.saldo}.`);
      }
    }

    imprimirDadosCliente(){
        return `${super.exibirDadosCliente()}
        SALDO ${this.saldo}`;
    }
  
    imprimirSaldo(){
      return `Saldo : ${this.saldo}`;
    }
  }
  
  