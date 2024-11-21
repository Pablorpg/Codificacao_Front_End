
function pegaDados(){
    const nome = document.querySelector("#nome")
    const sobrenome = document.querySelector("#sobrenome")
    const idade = document.querySelector("#idade")
    const resultado = document.querySelector(".resultado")
    const erro = document.querySelector(".erro")

    const nomeValor = nome.value
    const sobrenomeValor = sobrenome.value
    const idadeValor = idade.value

    if(nomeValor ===""){
        erro.textContent = "O campo não pode está vazio"
        nome.style.borderColor = "red"
        return
    }

    if(idadeValor === "" && idadeValor <0){
        erro.textContent = "Erro"
        nome.style.borderColor = "red"
        return
    }

    resultado.innerHTML = `<p>Nome: ${nomeValor}</p>
                             <p>Sobrenome: ${sobrenomeValor}</p>
                                <p>Idade: ${idadeValor}</p>
                            `
}