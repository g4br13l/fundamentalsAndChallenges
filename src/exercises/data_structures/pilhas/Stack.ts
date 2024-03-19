/*
    Pilha é uma coleção ordenada de itens que segue o princípio LIFO (Last In First Out).
    Imagine uma pilha de livros sobre a mesa.
* */

function Stack() {

    var items = [];

    this.push = (el) => { // adiciona um novo item a pilha.
        items.push(el);
    }

    this.pop = () => { // remove o item do topo da pilha
        return items.pop();
    }

    this.peek = () => { // retorna o elemento do topo da pilha
        return items[items.length - 1];
    }

    this.isEmpty = () => { // informa se a pilha está vazia
        return items.length === 0;
    }

    this.clear = () => { // Limpa a pilha toda
        items = [];
    }

    this.size = () => { // informa o tamanho da pilha
        return items.length;
    }

    this.print = () => { // imprime a pilha no console
        console.log(items.toString());
    }


}


let pilha = new Stack();

pilha.push(10);
pilha.push(20);
pilha.push(30);
pilha.print();
console.log(pilha.print);






