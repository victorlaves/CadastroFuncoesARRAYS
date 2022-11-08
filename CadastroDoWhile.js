let nomes = [], senhas = []
let continuar = true

function CadastroNomeESenha(){
    nomes.push(prompt("Digite seu nome"))
    senhas.push(prompt("Digite sua senha"))
    return nome, senha
}

function Opcoes(){
    let opcao = prompt("Digite 1 para Cadastrar | 2 Para Login | 3 Para Excluir usuario | 4 Encerrar programa")
    switch(opcao) {	
    case 1:
        CadastroNomeESenha()
        reak;  
    case 2:
        Login()
        break;
    case 3:
        Excluir()
        break;
    case 4:
        continuar = false
        break;
    default:
    console.log("Opção invalida")
    }
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
        
