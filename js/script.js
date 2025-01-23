// Elementi seç
const bag = document.getElementById('bag');
const bagtext = document.getElementById('bagtext');
// Hover olayları ekle
bag.addEventListener('mouseenter', () => {
    bag.querySelector('img').style.opacity = "0.4";
    bag.querySelector('img').style.transform = "scale(1.1)";
    bag.querySelector('img').style.transition = "500ms"; 
    bagtext.style.bottom = "10%";
    bagtext.style.animation = "bagtextanimnext alternate forwards 1s";
    bagtext.style.display="inline";
    
    bagtext.style.transition = "500ms";
    // Üzerine gelince şeffaflığı kaldır
});

bag.addEventListener('mouseleave', () => {
    bag.querySelector('img').style.opacity = "1"; 
    bag.querySelector('img').style.transform = "scale(1)";
    bag.querySelector('img').style.transition = "500ms"; 
    bagtext.style.bottom = "10%";
    bagtext.style.animation = "bagtextanimback alternate forwards 1s";
    bagtext.style.display="none";
    bagtext.style.transition = "500ms";
    // Ayrılınca geri eski haline dön
});



// Elementi seç
const bag2 = document.getElementById('bag-2');
const bagtext2 = document.getElementById('bagtext-2');
// Hover olayları ekle
bag2.addEventListener('mouseenter', () => {
    bag2.querySelector('img').style.opacity = "0.4";
    bag2.querySelector('img').style.transform = "scale(1.1)";
    bag2.querySelector('img').style.transition = "500ms"; 
    bagtext2.style.bottom = "10%";
    bagtext2.style.animation = "bagtextanimnext alternate forwards 1s";
    bagtext2.style.display="inline";
    
    bagtext2.style.transition = "500ms";
    // Üzerine gelince şeffaflığı kaldır
});

bag2.addEventListener('mouseleave', () => {
    bag2.querySelector('img').style.opacity = "1"; 
    bag2.querySelector('img').style.transform = "scale(1)";
    bag2.querySelector('img').style.transition = "500ms"; 
    bagtext2.style.bottom = "10%";
    bagtext2.style.animation = "bagtextanimback alternate forwards 1s";
    bagtext2.style.display="none";
    bagtext2.style.transition = "500ms";
    // Ayrılınca geri eski haline dön
});



const bag3 = document.getElementById('bag-3');
const bagtext3 = document.getElementById('bagtext-3');
// Hover olayları ekle
bag3.addEventListener('mouseenter', () => {
    bag3.querySelector('img').style.opacity = "0.4";
    bag3.querySelector('img').style.transform = "scale(1.1)";
    bag3.querySelector('img').style.transition = "500ms"; 
    bagtext3.style.bottom = "10%";
    bagtext3.style.animation = "bagtextanimnext alternate forwards 1s";
    bagtext3.style.display="inline";
    
    bagtext3.style.transition = "500ms";
    // Üzerine gelince şeffaflığı kaldır
});

bag3.addEventListener('mouseleave', () => {
    bag3.querySelector('img').style.opacity = "1"; 
    bag3.querySelector('img').style.transform = "scale(1)";
    bag3.querySelector('img').style.transition = "500ms"; 
    bagtext2.style.bottom = "10%";
    bagtext3.style.animation = "bagtextanimback alternate forwards 1s";
    bagtext3.style.display="none";
    bagtext3.style.transition = "500ms";
    
    // Ayrılınca geri eski haline dön
});


var secim = 0;
const nextbutton = document.getElementById('nextbtn');

nextbutton.addEventListener('click', function() {
if(secim==0){
    document.getElementById('kahverengiimg').style.animation="baggidis alternate forwards 1s";
    document.getElementById('siyahimg').style.animation="baggelis alternate forwards 1s";
    document.getElementById('siyahimg').opacity="1";
    document.getElementById('kahverengiimg').display="inline";
    document.getElementById('siyahimg').display="none";
    document.getElementById('beyazimg').display="none";
    secim++;
}
else if(secim==1){
    document.getElementById('siyahimg').style.animation="baggidis alternate forwards 1s";
    document.getElementById('beyazimg').style.animation="baggelis alternate forwards 1s";
    document.getElementById('beyazimg').opacity="1";
    document.getElementById('kahverengiimg').display="none";
    document.getElementById('siyahimg').display="inline";
    document.getElementById('beyazimg').display="none";
    secim++;
}
else if(secim==2){
    document.getElementById('kahverengiimg').display="none";
    document.getElementById('siyahimg').display="none";
    document.getElementById('beyazimg').display="inline";
}
});

const backutton = document.getElementById('backbtn');

backutton.addEventListener('click', function() {
    if(secim==0){
        document.getElementById('kahverengiimg').display="inline";
        document.getElementById('siyahimg').display="none";
        document.getElementById('beyazimg').display="none";
    }
    else if(secim==1){
        document.getElementById('siyahimg').style.animation="baggidis2 alternate forwards 1s";
        document.getElementById('kahverengiimg').style.animation="baggelis2 alternate forwards 1s";
        document.getElementById('kahverengiimg').opacity="1";
        document.getElementById('kahverengiimg').display="none";
        document.getElementById('siyahimg').display="inline";
        document.getElementById('beyazimg').display="none";
        secim--;
    }
    else if(secim==2){
        document.getElementById('beyazimg').style.animation="baggidis2 alternate forwards 1s";
        document.getElementById('siyahimg').style.animation="baggelis2 alternate forwards 1s";
        document.getElementById('siyahimg').opacity="1";
        document.getElementById('kahverengiimg').display="none";
        document.getElementById('siyahimg').display="none";
        document.getElementById('beyazimg').display="inline";
        secim--;
    }
});