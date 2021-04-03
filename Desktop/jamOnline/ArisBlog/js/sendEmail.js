    window.onload = function() { 
  var el = document.getElementById('g-recaptcha-response'); 
  if (el) { 
    el.setAttribute('required', 'required'); 
  } 
}
    
    
    var form = document.getElementById("contact-form");
    
    async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
        }).then(response => {
        status.classList.add('success');
        status.innerHTML = "Tanggapan Anda Berhasil Dikirim :)";
        form.reset();
        }).catch(error => {
        status.classList.add('error');
        status.innerHTML = "Tanggapan Anda Gagal Dikirim :("
        });
    }
    form.addEventListener("submit", handleSubmit)