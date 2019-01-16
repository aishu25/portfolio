$('#navproj').click(function(){
    $('html, body').animate({
        scrollTop: $('#projects').offset().top
    }, 500)
})


$('#navskill').click(function(){
    $('html, body').animate({
        scrollTop: $('#skills').offset().top
    }, 500)
})

$('#navcont').click(function(){
    $('html, body').animate({
        scrollTop: $('#contact').offset().top
    }, 500)
})
