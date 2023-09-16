/* SHOPPING PAGE */
/* BOOTSTRAP MOBILE NAV */
$('.navbar-toggler').click(function () {
    setTimeout(() => {
        $('nav').toggleClass('nav-bg-color-mob');
    }, 200);
});

/* MOBILE NAV */
$(function () {
    $('.mob-link').click(function () {
        // $(this).addClass('active').parent().siblings().child().removeClass('active');
        $('line.left').css('left', '0');
        $(this).addClass('active').parent().siblings().children().removeClass('active');
        $('line.left').css('left', '-6px');
    })
});

/* GLIDE JS */
new Glide('.glide', {
    type: 'carousel',
    autoplay: 3500,
    gap: 20,
    focusAt: 'center',
    perView: 5,
    breakpoints: {
        1200: {
            perView: 4
        },
        991: {
            perView: 3
        },
        767: {
            perView: 2
        },
        600: {
            perView: 1
        }
    }
}).mount();

new Glide('.second-glide', {
    type: 'carousel',
    autoplay: 3500,
    gap: 20,
    focusAt: 'center',
    perView: 5,
    breakpoints: {
        1200: {
            perView: 4
        },
        991: {
            perView: 3
        },
        767: {
            perView: 2
        },
        600: {
            perView: 1
        }
    }
}).mount();

new Glide('.third-glide', {
    type: 'carousel',
    autoplay: 3500,
    gap: 20,
    focusAt: 'center',
    perView: 5,
    breakpoints: {
        1200: {
            perView: 4
        },
        991: {
            perView: 3
        },
        767: {
            perView: 2
        },
        600: {
            perView: 1
        }
    }
}).mount();


/* TOGGLE WHATSAPP BUTTON */
// bx bxl-whatsapp
$('.btn-box').click(function () {
    $('.whatsapp-box').toggleClass('active');
    $(this).toggleClass('bx-chevrons-right');
    $(this).toggleClass('bxl-whatsapp');
})

/* COUNTER UP JS */
$('.num-counter').counterUp({
    delay: 10,
    time: 1000
});

/* SCROLL TO TOP */
$(window).scroll(function () {
    //Show and Hide Scroll To Top Button
    if ($(window).scrollTop() >= 900) {
        $('.scroll-to-top').css('right', '20px');
    } else {
        $('.scroll-to-top').css('right', '-60px');
    }

});

$('.scroll-to-top, .to-top-footer').click(function (event) {
    event.preventDefault()
    $('html, body').animate(
        { scrollTop: "0" }, { easing: "swing", duration: 1000 }
    )
});