
function soma(valor1, valor2){
    const soma = valor1 + valor2
    return alert(soma)
}

soma(5, 7)

// outra forma

let somaNumeros = 0

function soma(valor1, valor2){
    somaNumeros = valor1 + valor2
    return alert(somaNumeros)
}

soma(1, 10)

console.log(somaNumeros)

//atividade

function verificaidade(idade){
    if(idade >= 18){
        return alert("É maior de idade")
    }else{
        return alet("É menor de idade")
    }
}

verificaidade(17)
verificaidade(18)
verificaidade(19)