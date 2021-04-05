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