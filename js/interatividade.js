$(function(){

    //Entrada 

    var botoes = $(" .botao");
    var titulo = $(" h1");
    var subtitulo = $(" #subtitulos"); 
    var icones = $("svg")
    var Fundo = $(" body")
    var botao_modoescuro = $("#modoescuro")

    var modoEscuro = false


    // PROCESSAMENTO


    subtitulo.click ( ()=>{

        icones.css ("fill", "white")
      
      
    })

    botao_modoescuro.click ( ()=>{


        if ( modoEscuro== false ){

             botoes.css ("background-color", "black")
            botoes.css ("color", "white")
            
            modoEscuro = true

        }else{

              botoes.css ("background-color", "green")
            botoes.css ("color", "black")

            modoEscuro = false


        }

      

    })



    //SAIDA

})  