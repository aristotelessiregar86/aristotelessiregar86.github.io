$(document).ready(function(){
        function clock() {
            var now = new Date();
            var secs = ('0' + now.getSeconds()).slice(-2);
            var mins = ('0' + now.getMinutes()).slice(-2);
            var hr = now.getHours();
            var Time = hr + ":" + mins + ":" + secs;
            document.getElementById("watch").innerHTML = Time;
            
            var tanggallengkap = new String();
            var namahari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
            namahari = namahari.split(" ");
            var namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
            namabulan = namabulan.split(" ");
            var tgl = new Date();
            var hari = tgl.getDay();
            var tanggal = tgl.getDate();
            var bulan = tgl.getMonth();
            var tahun = tgl.getFullYear();
            tanggallengkap = namahari[hari] + ", " +tanggal + " " + namabulan[bulan] + " " + tahun;
            document.querySelector('#time').innerHTML = tanggallengkap;

            // Peringatan Tahun Baru Dan Akan Di Aktifkan Pada Saat Malam Tahun Baru :) Have A Nice Day
            if (tanggal == 10) {
                //     document.querySelector('#selamat').innerHTML = `<div id="selamat1"><br><br><br><br><br><br><br><br><br>
                //     <h5 class="text-center">Selamat Tahun Baru</h5>
                //     <img class="gif" src="img/NewYear.gif" alt="">
                // </div>`
                
                document.querySelector('#selamat').innerHTML = `<div id="selamat1"><br><br><br><br><br><br><br><br><br>
                    <h5 class="text-center">Selamat Hari Persatuan Artis Film Indonesia(PARFI)</h5>
                    <img class="gif" src="img/SelamatPAFRI.gif" alt="">
                    </div>`
            } else if (tanggal == 11) {
                document.querySelector('#selamat').innerHTML = `<div id="selamat2"><br><br><br><br><br><br><br><br><br>
                    <h5 class="text-center">Selamat Hari Surat Perintah Sebelas Maret(SUPERSEMAR)</h5>
                    <img class="gif" src="img/SelamatSUPERSEMAR.gif" alt="">
                    </div>`
            }

            requestAnimationFrame(clock);
        }

        requestAnimationFrame(clock);
    });

    

 


