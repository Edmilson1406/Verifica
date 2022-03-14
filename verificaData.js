var dataAtual = new Date() 

var dataUser = new Date("2012-05-15")

var verificaIdade = verificaIdade(dataUser)

console.log(verificao)



function verificaIdade(dataUser) {
    var dataAtual = new Date() 
if ((dataAtual.getFullYear() - dataUser.getFullYear() == 18)) {
    if ((dataUser.getMonth()+1) <= (dataAtual.getMonth()+1)){
        if (dataUser.getDate() <= dataAtual.getDate()) {
            return "Maior de Idade"
        }
        else {
            return "Menor de Idade"
        }
    }
    else {
        return "Menor de Idade"
    }
}
else if((dataAtual.getFullYear() - dataUser.getFullYear() > 18)){
    return "Maior de Idade"
}

else {
    return "Menor de Idade"
}}

