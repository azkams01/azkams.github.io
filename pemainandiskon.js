function getPilihanComputer(){
    const comp = Math.random()

    if( comp < 0.34 ) return 'kertas'
    if( comp >= 0.34 && comp < 0.67 ) return 'gunting'
    return 'batu'
}
function gethasil(comp, player){
    if( player == comp ) return 'SERI!'
    if( player == 'kertas' ) return ( comp == 'gunting' ) ? 'KALAH!' : 'MENANG!'
    if( player == 'gunting' ) return ( comp == 'kertas' ) ? 'MENANG!' : 'KALAH!'
    if( player == 'batu' ) return ( comp == 'gunting' ) ? 'MENANG!' : 'KALAH!'
}

    function putar(){
        const imgComputer = document.querySelector('.img-komputer')
        const gambar = ['kertas', 'gunting', 'batu']
        let i = 0
        const waktumulai = new Date().getTime()
        setInterval(function(){
                if(new Date().getTime() - waktumulai > 1500){
                clearInterval
                return
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png')
        if (i == gambar.length)
            i = 0
        
        }, 100)
    }





   const kertas = document.querySelector('.kertas')
   kertas.addEventListener('click', function(){
       const pilihankomputer = getPilihanComputer()
       const pilihanplayer = kertas.className
       const hasil = gethasil(pilihankomputer, pilihanplayer)

        putar()

        setTimeout(function() {
            const imgComputer = document.querySelector('.img-komputer')
            imgComputer.setAttribute('src', 'img/' + pilihankomputer + '.png')
         
            const info = document.querySelector('.info b ')
            info.innerHTML = hasil 
            
        }, 1500);

        setTimeout(function() {
            if(hasil == 'MENANG!'){
                alert('Selamat Anda Mendapatkan Diskon')
            }
            else if (hasil == 'KALAH!'){
                alert('Yahh Sayang Anda Kurang Beruntung')
            }
            else {
                alert('Hufttt Hasil Anda Sama Dengan Musuh')
            }
        }, 2500);

    

 


})

const gunting = document.querySelector('.gunting')
   gunting.addEventListener('click', function(){
       const pilihankomputer = getPilihanComputer()
       const pilihanplayer = gunting.className
       const hasil = gethasil(pilihankomputer, pilihanplayer)
       putar()
    
       setTimeout(function() {
        const imgComputer = document.querySelector('.img-komputer')
        imgComputer.setAttribute('src', 'img/' + pilihankomputer + '.png')
     
        const info = document.querySelector('.info b')
        info.innerHTML = hasil 
        
    }, 1500);

    setTimeout(function() {
        if(hasil == 'MENANG!'){
            alert('Selamat Anda Mendapatkan Diskon')
        }
        else if (hasil == 'KALAH!'){
            alert('Yahh Sayang Anda Kurang Beruntung')
        }
        else {
            alert('Hufttt Hasil Anda Sama Dengan Musuh')
        }
    }, 2500);

   

})

const batu = document.querySelector('.batu')
  batu.addEventListener('click', function(){
       const pilihankomputer = getPilihanComputer()
       const pilihanplayer = batu.className
       const hasil = gethasil(pilihankomputer, pilihanplayer)
        putar()
    
        setTimeout(function() {
            const imgComputer = document.querySelector('.img-komputer')
            imgComputer.setAttribute('src', 'img/' + pilihankomputer + '.png')
         
            const info = document.querySelector('.info b')
            info.innerHTML = hasil 
        }, 1500);

        setTimeout(function() {
            if(hasil == 'MENANG!'){
                alert('Selamat Anda Mendapatkan Diskon')
            }
            else if (hasil == 'KALAH!'){
                alert('Yahh Sayang Anda Kurang Beruntung')
            }
            else {
                alert('Hufttt Hasil Anda Sama Dengan Musuh')
            }
        }, 2500);


})
