// const preco = promptNumber(("Quanto custa?"))
// const quantidade = promptNumber(("Quantos são?"))
// const subtotal = preco * quantidade
// const valorminimo = 10000
// const cidade = prompt("Qual a sua cidade?")
// const cidadeLoja = "Londrina"
// if (subtotal <= valorminimo) {
//     console.log("não tem desconto")
// }
// else if (subtotal >= valorminimo && preco > 0 & subtotal > 0 & quantidade > 0) {
//     console.log("tem desconto")
// }
// else {
//     console.log("total nao valido")
// }
// if (cidade == cidadeLoja) {
//     console.log("não tem frete")
// }
// else {
//     console.log("tem frete")
// }

console.log ("Escolha uma materia \n1 - Educação Física; \n2 - Geografia; \n3 - Português; \n4 - Química")

const materia = 1

switch (materia) {
    case 1:
        console.log("Top");
        break
    case 2:
        console.log("mais ou menos");
        break
    case 3:
        console.log("pessimo");
        break
    case 4:
        console.log("Goat");
        break;
    default:
        console.log("matéria indisponível")    
}

const idade = prompt("Qual sua idade")

if (idade>=60){
    console.log("Idoso")
}
else if (idade>=18){
    console.log ("Adulto")
}
else if (idade >=13){
    console.log ("Adolescente")
}
else if(idade>=0){
    console.log("Criança")
}
else{
    console.log("idade inválida")
}




const pontos = 1001
const anosDeCliente = 0

if (pontos <=99){ 
       console.log ("Bronze")
}
else if (pontos >99 && pontos <=499){
    console.log ("Prata")
}
else if (pontos >499 && pontos <=999){
    console.log ("Ouro")
}
else if (pontos > 999 && anosDeCliente >=1){
    console.log ("Diamante")
}
else {
    console.log("Ouro")
}

