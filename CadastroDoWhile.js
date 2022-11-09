let nomes = [], senhas = []
let continuar = true
let usuarioV

function CadastroNomeESenha(){
    nomes.push(prompt("Digite seu nome"))
    senhas.push(prompt("Digite sua senha"))
    console.log(nomes, senhas)
}

function Opcoes(){
    let opcao = prompt("Digite 1 para Cadastrar | 2 Para Login | 3 Para Excluir usuario | 4 Encerrar programa")
  do{
    switch(opcao) {	
    case "1":
        CadastroNomeESenha()
        Opcoes()
        break;  
    case "2":
        let nome = prompt("Digite o nome")
        let senha = prompt("Digite senha")
        if(Login(nome,senha))
        console.log("Login feito com Sucesso")
        else
        console.log("Nome ou senha incorretos")
        Opcoes()
        break;
    case "3":
        let nomeExcluido = prompt("Digite O Nome para excluir")
        Excluir(nomeExcluido)
        Opcoes()
        break;
    case "4":
        continuar = false
        break;
    default:
    console.log("Opção invalida")
    break;
    }
} while(continuar == true)
}

function Login(nome,senha) {
    let loginV = nomes.includes(nome)
    let senhaV = senhas.includes(senha)
    if(loginV && senhaV){
        let nomeIndex = nomes.indexOf(nome)
        let senhaIndex = senhas.indexOf(senha)
        if(nomeIndex == senhaIndex)
        return true
        else 
        return false
    }
        else 
        return false
}

    function Excluir(nomeExcluido){
        usuarioV = nomes.indexOf(nomeExcluido)
        nomes.splice(usuarioV, 1)
        senhas.splice(usuarioV, 1)
    }

Opcoes()