$('#brands-carousel').owlCarousel({
    loop:true,
    margin:100,
    dots: false,
    autoplay:true,
    responsive:{
        0:{
            items:1,
            margin: 30
        },
        400:{
            items:2,
            margin: 100
        },
        600:{
            items:3,
            margin: 100
        },
        800:{
            items:4,
            margin: 150
        },
        1200:{
            items:5,
            margin: 150
        }
    }
})