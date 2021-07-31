$(document).ready(function() {

    // ==========================================Header Navbar=====================
    //    Sticky Navbar
    $(window).scroll(function() {
        var sticky = $('#header-navbar'),
            scroll = $(window).scrollTop();
        if (scroll >= 200) sticky.addClass('sticky');
        else sticky.removeClass('sticky');
    });
    // main navbar for hover dropdown
    $('#main_navbar').bootnavbar();

    // ==========================================Home Page==========================================
    //Course Quick Preview Slider
    $('.quick-preview-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 250,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    // Events & Webinars Slider
    $('.event-webinars-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 250,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            576: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });
    // Books Slider
    $('.books-slider').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 250,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    // Community Slider
    $('.community-slider').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 250,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });
    // Counter Up
    $('.counter').counterUp({
        delay: 20,
        time: 500
    });
    // ==========================================Course & Book & Event Details Page==========================================
    // Card image hide on scroll
    $(window).scroll(function() {
        var sticky = $('.card-image'),
            scroll = $(window).scrollTop();
        if (scroll >= 150) sticky.addClass('hidden');
        else sticky.removeClass('hidden');
    });
});

// Course content
var coll = document.getElementsByClassName("section-title");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// ==========================================Header Top=====================
document.querySelector('.close-top').addEventListener('click', function() {
    document.querySelector('#header-top').style.display = 'none';
})