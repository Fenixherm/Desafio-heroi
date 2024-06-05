let heroi = "Ximbinha"
let xp = 0

//Lutando 100x na dungeon
for(let i = 0; i < 100; i++){
    xp = dungeon(xp)
}

rankAtual()


function rankAtual(){
    const mensagem1 = "O herói de nome "
    const mensagem2 = " está no nível de "

    if(xp <= 1000)
        console.log(mensagem1 + heroi + mensagem2 + " Ferro")
    
    else if(xp > 1000 && xp <= 2000)
        console.log(mensagem1 + heroi + mensagem2 + " Bronze")
    
    else if(xp > 2000 && xp <= 5000)
        console.log(mensagem1 + heroi + mensagem2 + " Prata")
    
    else if(xp > 5000 && xp <= 6000)
        console.log(mensagem1 + heroi + mensagem2 + " Ouro")
    
    else if(xp > 6000 && xp <= 7000)
        console.log(mensagem1 + heroi + mensagem2 + " Platina")
    
    else if(xp > 7000 && xp <= 8000)
        console.log(mensagem1 + heroi + mensagem2 + " Diamante")
    
    else if(xp > 8000 && xp <= 9000)
        console.log(mensagem1 + heroi + mensagem2 + " Ascendente")
    
    else if(xp > 9000 && xp <= 10000)
        console.log(mensagem1 + heroi + mensagem2 + " Imortal")
    
    else if(xp > 10000)
        console.logmensagem1 + (heroi + mensagem2 + " Radiante")
    
}

//Batalha na Dungeon pra ganhar xp
function dungeon(xp){
    let monstros = [
        ["Slime", 5],
        ["Lobo", 25],
        ["Cachorro infernal", 80],
        ["Minotauro", 100]
    ]
    
    let monstroRandom = Math.floor(Math.random() * 4)

    //console.log("Seja bem-vindo a Dungeon")
    //console.log("Você matou um " + monstros[monstroRandom][0])

    return xp + monstros[monstroRandom][1];
}