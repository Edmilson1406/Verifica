var dataAtual = new Date() 

var dataUser = new Date("2003-03-12")

hoje = new Date();
//console.log(dataUser.getMonth())

console.log(dataAtual)
console.log(dataUser)
if ((dataAtual.getFullYear() - dataUser.getFullYear() == 18)) {
    if ((dataUser.getMonth()+1) <= (dataAtual.getMonth()+1)){
        if (dataUser.getDate() <= dataAtual.getDate()) {
            console.log("Maior de Idade1")
        }
        else {
            console.log("Menor de Idade1")
        }
    }
    else {
        console.log("Menor de Idade1")
    }
}
else if((dataAtual.getFullYear() - dataUser.getFullYear() > 18)){
    console.log("Maior de Idade")
}

else {
    console.log("Menor de Idade")
}

