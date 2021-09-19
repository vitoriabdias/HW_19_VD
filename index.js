<><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script><script>
    $(function() {$('a[href*=\\#]:not([href=\\#])').on('click', function () {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    })};
    &rbrace;);
</script></>