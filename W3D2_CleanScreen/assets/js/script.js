
$(function(){
    
    
    $("form button").click(function(e){
        e.preventDefault();
        if($('.circle').length > 0) {
            $('.circle').remove();
        }

        let radio = parseInt($("#width").val());
        let gR = $("#Growth_Rate").val();
        console.log(radio,gR);

        if(radio==undefined||gR==undefined) return console.warn('please, input valid values');

        for (let i = 0; i < $("#Number_Circles").val(); i++) {
            let top = Math.random()*(window.innerHeight - radio - 50);
            let left = Math.random()*(window.innerWidth - radio - 30);
            console.log('top:',top,'left:',left)

            $('body').append(
                $(`<div class='circle'></div>`)
                .css('top',top+'px')
                .css('left',left+'px')
                .css('width', radio+'px')
                .css('height', radio+'px')
                );        
        }
        
        let i = 0;
        let growing = setInterval(function(){
            // console.log(radio,i,(radio+i)+'px');
            $(".circle")
                .css('width', (radio+i)+'px')
                .css('height', (radio+i)+'px')
                .mouseenter(clearTimer);
            i++;
        }, gR); 

        function clearTimer() {
            clearInterval(growing);
        }
    
    });

});

