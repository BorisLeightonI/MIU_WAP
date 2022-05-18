

$('#8ball').submit(()=>{
    $('#text').val('');
    // $('p').text(answers[Math.round(Math.random()*20)])
    $.get({
        url: '/test'
    }).done((data)=>{
        console.log(data);
        $('p').text(data.title);
    }).fail((e)=>{
        console.error(e);
    });
    return false;
});