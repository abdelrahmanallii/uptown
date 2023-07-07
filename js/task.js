$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$(window).scroll(function()
{
    let scroll_top = $(window).scrollTop()
    if (scroll_top > 200)
    {
        $("header").addClass("header_2")
    }
    else
    {
        $("header").removeClass("header_2")
    }
}
)