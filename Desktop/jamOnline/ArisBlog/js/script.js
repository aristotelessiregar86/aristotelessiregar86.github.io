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

// Get Submit 
let submit = document.querySelector('.EWF__subscribe');
console.log(submit);



function submitForm(e) {
    e.preventDefault();


// Get Input Values
let name = document.getElementById('nama').value;
let email = document.getElementById('email').value;
let telp = document.getElementById('telp').value;
let kategori = document.getElementById('ktgri').value;
let pesan = document.getElementById('pesan').value;

saveContactInfo(name, email, telp, kategori, pesan);
sendEmai(name, email, telp, kategori, pesan)
}

function saveContactInfo(name, email, telp, kategori, pesan) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        nama: name,
        email: email,
        telp: telp,
        kategori: kategori,
        pesan: pesan
    });

    retrieveInfo()
}










// get button
const fb = document.querySelector('.fbBtn');
const ig = document.querySelector('.igBtn');

// Masukkan Ke Dalam DOM
// fb.addEventListener('click', () => {
//     const facebook = `<div class="ss">
//     <a href="https://www.facebook.com/aristoteles.siregar" class="btn btn-primary">Facebook</a>
//     </div>`
//     document.body.innerHTML = facebook;
// })


// Send Email
function sendEmail(name, email, telp, kategori, pesan) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "aristotelessiregar86@gmail.com",
        Password: "ofgoocqwiweagphg",
        To : 'aristotelessiregar86@gmail.com',
        From : "aristotelessiregar86@gmail.com",
        Subject : `${name} Sent You A Message`,
        Body : `Nama : ${name} <br/> Email : ${email} <br/> Telephone: ${telp} <br/> Kategori: ${kategori} Pesan: ${pesan}`
    }).then((message) => alert('Mail Sent Successfully'));
}

