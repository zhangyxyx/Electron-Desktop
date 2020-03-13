$(function(){
    $(".tab p").click(function(){
        var mark=$(this).attr('data-mark')
        $(".tab p").removeClass('active')
        $(this).addClass('active')
        $(".con div").hide();
        $("."+mark).show()
    })
})