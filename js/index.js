console.log("yoo this is working!");

$("#work_scroll").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#work_after").offset().top
    }, 600);
});

$("#contact_scroll").click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#contact_after").offset().top
    }, 600);
});
