// Event pada saat link di klik
$('.page-scroll').on('click', function (e) {

    // Ambil Isi Href 
    var tujuan = $(this).attr('href');
    // Tangkap Elemen Yg Bersangkutan
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html , body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');


    e.preventDefault();


});


// Untuk Menyimpan Parallax
// about
$(window).on('load', function() {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
})

// Jumbotron
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    
    $('.jumbotron img').css ({
        'transform' : 'translate(0px, '+ wScroll/5 +'%)'
    });

    $('.jumbotron h1').css ({
        'transform' : 'translate(0px, '+ wScroll/3 +'%)'
    });

    $('.jumbotron p').css ({
        'transform' : 'translate(0px, '+ wScroll/1.3 +'%)'
    });

    // Portfolio
    if (wScroll > $('.portfolio').offset().top - 250){
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
              $('.portfolio .thumbnail').eq(i).addClass('Muncul');   
            }, 300 * (i+1));
        });
       
    };
});