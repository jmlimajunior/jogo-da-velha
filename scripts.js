function  temGanhador(){

    if ((tabuleiro[0][0] == tabuleiro[0][1]) && (tabuleiro[0][0] == tabuleiro[0][2]) && (tabuleiro[0][0] != 0)){
        if (jogando == 1){
            $("#placar").html("O vencedor foi o "+ jogador2);        
        } else {
            $("#placar").html("O vencedor foi o "+ jogador1);        
        }
        jogando = 3;
        $(".l1").css("color","red");
    }

    if ((tabuleiro[1][0] == tabuleiro[1][1]) && (tabuleiro[1][0] == tabuleiro[1][2]) && (tabuleiro[1][0] != 0)){
        if (jogando == 1){
            $("#placar").html("O vencedor foi o "+ jogador2);        
        } else {
            $("#placar").html("O vencedor foi o "+ jogador1);        
        }
        jogando = 3;
        $(".l2").css("color","red");
    }

    if ((tabuleiro[2][0] == tabuleiro[2][1]) && (tabuleiro[2][0] == tabuleiro[2][2]) && (tabuleiro[2][0] != 0)){
        if (jogando == 1){
            $("#placar").html("O vencedor foi o "+ jogador2);        
        } else {
            $("#placar").html("O vencedor foi o "+ jogador1);        
        }
        jogando = 3;
        $(".l3").css("color","red");
    }

    if ((tabuleiro[0][0] == tabuleiro[1][0]) && (tabuleiro[0][0] == tabuleiro[2][0]) && (tabuleiro[0][0] != 0)){
        if (jogando == 1){
            $("#placar").html("O vencedor foi o "+ jogador2);        
        } else {
            $("#placar").html("O vencedor foi o "+ jogador1);        
        }
        jogando = 3;
        $(".c1").css("color","red");
    }

    if ((tabuleiro[0][1] == tabuleiro[1][1]) && (tabuleiro[0][1] == tabuleiro[2][1]) && (tabuleiro[0][1] != 0)){
        if (jogando == 1){
            $("#placar").html("O vencedor foi o "+ jogador2);        
        } else {
            $("#placar").html("O vencedor foi o "+ jogador1);        
        }
        jogando = 3;
        $(".c2").css("color","red");
    }

    if ((tabuleiro[0][2] == tabuleiro[1][2]) && (tabuleiro[0][2] == tabuleiro[2][2]) && (tabuleiro[0][2] != 0)){
        if (jogando == 1){
            $("#placar").html("O vencedor foi o "+ jogador2);        
        } else {
            $("#placar").html("O vencedor foi o "+ jogador1);        
        }
        jogando = 3;
        $(".c3").css("color","red");
    }

    if ((tabuleiro[0][0] == tabuleiro[1][1]) && (tabuleiro[0][0] == tabuleiro[2][2]) && (tabuleiro[0][0] != 0)){
        if (jogando == 1){
            $("#placar").html("O vencedor foi o "+ jogador2);        
        } else {
            $("#placar").html("O vencedor foi o "+ jogador1);        
        }
        jogando = 3;
        $(".d1").css("color","red");
    }

    if ((tabuleiro[0][2] == tabuleiro[1][1]) && (tabuleiro[0][2] == tabuleiro[2][0]) && (tabuleiro[0][2] != 0)){
        if (jogando == 1){
            $("#placar").html("O vencedor foi o "+ jogador2);        
        } else {
            $("#placar").html("O vencedor foi o "+ jogador1);        
        }
        jogando = 3;
        $(".d2").css("color","red");
    }

    temCelulaVazia = 0;
    for (x = 0; x < 3;x++){
        console.log(x);
        for(y = 0; y < 3;y++){
            console.log(y);
            if (tabuleiro[x][y] == 0) { temCelulaVazia = 1; }
        }
    }
    if ((temCelulaVazia == 0) && (jogando != 3)){
        jogando = 3;
        $("#placar").html("Deu velha!!!!")
    }

}


function jogar(celula){

    if (jogando == 3){
        die();
    }


    let y = celula % 10;
    let x = (celula - y)/10;
    celula = "#cel" + String(x) + String(y);

    console.log(jogando);

    if (tabuleiro[x][y] == 0){
        tabuleiro[x][y] = jogando;
        if (jogando == 1){
            $(celula).html(jogador1);
            jogando = 2;
            $("#placar").html("É a vez do "+ jogador2);
        } else {
            $(celula).html(jogador2);
            jogando = 1;
            $("#placar").html("É a vez do "+ jogador1);
        }
    }  
    
    temGanhador();
}