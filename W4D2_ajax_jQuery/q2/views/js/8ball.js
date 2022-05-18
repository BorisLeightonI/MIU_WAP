const answers = [ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
"Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
"Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
"My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ];
console.log(answers.length);

$('#8ball').submit(()=>{
    $('#text').val('');
    // $('p').text(answers[Math.round(Math.random()*20)])
    $.get({
        url: '/test'
    }).done((data)=>{
        console.log(data);
    }).fail((e)=>{
        console.error(e);
    });
    return false;
});