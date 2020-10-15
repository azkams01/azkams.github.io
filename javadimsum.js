const data = document.querySelector('.data') 
data.addEventListener('click', function(data){
  var x,y,z,e;
  x = prompt ('Masukan Nama ')
  y = prompt ('Masukan No Telepon')
  z = prompt ('Masukan Alamat Rumah Anda')
  e = confirm(' Nama Anda : '+ x +' \n No Aktif  : '+ y +'\n Alamat    : '+ z +'\n<br>APAKAH DATA ANDA SUDAH BENAR?')
  if (e == true){
    alert('TERIMA KASIH SILAHKAN BERBELANJA')
  }
  else{
    x = prompt ('Masukan Nama ')
    y = prompt ('Masukan No Telepon')
    z = prompt ('Masukan Alamat Rumah Anda')
    e = confirm(' Nama Anda : '+ x +' \n No Aktif  : '+ y +'\n Alamat    : '+ z +'\n<br>APAKAH DATA ANDA SUDAH BENAR?')
    if (e == true){
      alert('TERIMA KASIH SILAHKAN BERBELANJA')
    }
  }
  
})

const pesan = document.querySelector('.pesan')
pesan.addEventListener('click', function(){
  const konfirm = confirm('APAKAH ANDA SUDAH MENGISI DATA?')
  if (konfirm == true){
    alert('TERIMA KASIH TELAH BELANJA , PESANAN ANDA AKAN SEGERA DI PROSES')
  }
  else{
    var x,y,z,e;
  x = prompt ('Masukan Nama ')
  y = prompt ('Masukan No Telepon')
  z = prompt ('Masukan Alamat Rumah Anda')
  e = confirm(' Nama Anda : '+ x +' \n No Aktif  : '+ y +'\n Alamat    : '+ z +'\nAPAKAH DATA ANDA SUDAH BENAR?')
  if (e == true){
    alert('TERIMA KASIH TELAH BELANJA PESANAN ANDA AKAN SEGERA DI PROSES')
  }
  else{
    x = prompt ('Masukan Nama ')
    y = prompt ('Masukan No Telepon')
    z = prompt ('Masukan Alamat Rumah Anda')
    e = confirm(' Nama Anda : '+ x +' \n No Aktif  : '+ y +'\n Alamat    : '+ z +'\nAPAKAH DATA ANDA SUDAH BENAR?')
    if (e == true){
      alert('TERIMA KASIH TELAH BELANJA PESANAN ANDA AKAN SEGERA DI PROSES')
    }
  }
  }
  
})

   const tabel = document.querySelector('#tabel')
   tabel.addEventListener('click', function(){
     const r =  Math.round(Math.random()*255 +1)
     const g =  Math.round(Math.random()*255 +1)
     const b =  Math.round(Math.random()*255 +1)
     tabel.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'

   })

   const info = document.querySelector('.info')
   info.addEventListener('click', function(){
     alert('INFO!!!! \nSilahkan Klik Logo Kami Dibawah Untuk Bermain Dan Menangkan Permainan Untuk Mendapatkan Diskon')
   })

   const burger = document.querySelector('.burger')
   const nav = document.querySelector('nav ul')

   burger.addEventListener('click', function(){
     nav.classList.toggle('slide')
   })

   const footer = document.querySelector('.foot')
   footer.addEventListener('click', function(){
    alert('Kami Sarankan Untuk Buka Halaman Ini Di PC Atau Komputer Anda')
   })






   
 

