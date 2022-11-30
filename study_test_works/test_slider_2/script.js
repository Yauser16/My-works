
const img = document.querySelectorAll('div img');
const slider = document.querySelector('#slider');
console.log(img);

for (let i = 0; i < img.length; i ++) {
    if (img[i].style.display == '') {        
        img[i].style.display = 'none';
    }    
    }
/* img[3].style.display = 'none'; */
let i = 0;
img[i].style.display = 'block';

let timer = setTimeout(function changeSlider() {       
     if (i < img.length) {
        img[i].style.display = 'block';
        if (i > 0 && img[i - 1].style.display == 'block') { 
            img[i - 1].style.display = 'none';
        }
       i ++;
    } else { 
        img[img.length - 1].style.display = 'none';       
        img[0].style.display = 'block';   
               i = 0;
               i ++;
                console.log('OK');
    }
    console.log(i);     
    timer = setTimeout(changeSlider, 2000);
    }, 2000);
    

        
   