$(function(){

    //Entrada 

    var botoes = $(" .botao");
    var titulo = $(" h1");
    var subtitulo = $(" #subtitulos"); 
    var icones = $("svg")
    var Fundo = $("body")
    var botao_modoescuro = $("#modoescuro")


    var modoEscuro = false;


    // PROCESSAMENTO



    botao_modoescuro.click ( ()=>{


        if ( modoEscuro== false ){

             botoes.css ("background-color", "black")
            botoes.css ("color", "white")
            icones.css("fill","red")


            Fundo.css("background-image","url( 'https://concursosnobrasil.com/wp-content/uploads/2025/05/noite-mais-longa.jpg ') ")
            
            modoEscuro = true

        }else{

              botoes.css ("background-color", "green")
            botoes.css ("color", "black")
             Fundo.css("background-image","url( '../recursos/img/fundoselva.jpg ' ) ")
              icones.css("fill","white")
            
             
            

            modoEscuro = false


        }

      

    })



    //SAIDA

})  