$(function(){

    //Entrada 

    var botoes = $(" .botao");
    var titulo = $(" h1");
    var subtitulo = $(" #subtitulos"); 
    var icones = $("svg")
    var Fundo = $(" body")
    

    // PROCESSAMENTO
    titulo.click( ()=>{
         botoes.css("background-color","black");
         botoes.css( "color", "white")

    });
   
   titulo.dblclick( ()=>{
        Fundo.html ("<h1> Alterado pelo js </h1>")


});

    subtitulo.click ( ()=>{

        icones.css ("fill", "white")
        alert(esse site pode ter vírus)
      
    })



    //SAIDA

})