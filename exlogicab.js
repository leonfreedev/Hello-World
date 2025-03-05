let idade = 2;

const recomendacoes =  {
    carros: "Recomendamos o filme Carros",
    frozen: "Recomendamos o filme Frozen",
    shrek: "Recomendamos o filme Shrek",
    reiLeao: "Recomendamos o filme Rei Leão"
};
switch (true) {
    case (idade < 5):
        console.log(recomendacoes.carros);
        break;
    case (idade >= 5 && idade < 10):
        console.log(recomendacoes.frozen);
        break;
    case (idade >= 10 && idade < 15):
        console.log(recomendacoes.shrek);
        break;
    case (idade >= 15):
        console.log(recomendacoes.reiLeao);
        break;
    default:
        console.log("Nenhuma recomendação disponível para essa idade.");
}

//

let x = 10;
let y = 50;
let z = 30;     

if (x>y && x>z){
    console.log ("o numero maior é", x)
}
else if (y>x && y>z){
    console.log ("o numero maior é", y)
}
else if (z>x && z>y){
     console.log ("o numero maior é", z)
}

//

let maiorNumero = Math.max(x, y, z);
console.log("O número maior é", maiorNumero);

let lado1 = 20
let lado2 = 30
let boloret = lado1*lado2
let raio = 15
let bolocircular = 3.1415**raio

if (boloret>bolocircular){
    console.log("Compre o bolo retangular")
}
else if (boloret<bolocircular){
    console.log("compre o bolo circular")
}
else{
    console.log("compre qualquer um")
}   

let anos = 16
    if (anos<5){
        console.log ("recomendamos o filme carros");
    }
    else if (anos>= 5 && anos<10){
        console.log ("recomendamos o filme Frozem");
    }
    else if (anos>=10 && anos<15){
        console.log ("recomendamos o filme Shrek");
    }
    else if (anos>15){
        console.log ("recomendamos o filme do Rei Leão")
    }

//

  let farol = 2

    switch (true){
        case ( farol === 1):
         console.log (!"pare");
            break;
        case (farol === 2):
         console.log ("atenção");
            break;
        case (farol === 3):
         console.log ("ande");
            break;
         default:
     }
