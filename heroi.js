let heroi = "Ximbinha"
let xp = 0


xp = dungeon(heroi, xp)


console.log(heroi + " seu Xp atual é: " + xp)

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
function dungeon(heroi, xp){
    let monstros = [
        ["Slime", 50],
        ["Lobo", 250],
        ["Cachorro infernal", 800],
        ["Minotauro", 1000]
    ]

    for(let i = 0; i < 10; i++){
        let monstroRandom = Math.floor(Math.random() * 4)

        xp = xp + monstros[monstroRandom][1]
        console.log(heroi + " você matou um " + monstros[monstroRandom][0] + 
        " e ganhou " + monstros[monstroRandom][1] + " de experiência")
    }
    

    return xp
}