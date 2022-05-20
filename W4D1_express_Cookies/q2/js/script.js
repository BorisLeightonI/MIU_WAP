$(function(){
    const addedSuccess = ()=>{
        $('#name').val('');
        $('#age').val('');
        $('p').text('Added succesfully');
        setTimeout(()=>{
            $('p').text('');
        },2000);
    };
    const addedFail = () =>{
        $('p').text('Something failed');
        setTimeout(()=>{
            $('p').text('');
        },2000);
    };
    $('form').submit(()=>{
        // e.preventdefault();
        let data = {
            name: $('#name').val(),
            age: $('#age').val(),
        };
        $.post({
            url:'/output', 
            data//JSON.stringify(data),
            // contentType:"application/json; charset=utf-8"
        })
        .done(addedSuccess)
        .fail(addedFail);

        return false;
    });
});