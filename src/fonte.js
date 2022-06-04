console.log("Funcionaou");

$(document).ready(function(){
    let fonte = 14
    $('#aumentar').click(function(){
        if(fonte<25){
            fonte++
            $('body').css({'font-size': fonte+'px'})
            console.log(fonte);
        }
    }) 
    $('#diminuir').click(function(){
        if(fonte>14){
            fonte--
            $('body').css({'font-size': fonte+'px'})
            console.log(fonte);
        }
    })
})