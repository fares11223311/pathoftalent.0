
let btn = document.getElementById('btn')

onscroll = function(){


    if(scrollY >= 300){

        btn.style.display = 'block'
    }
    else{

        btn.style.display = 'none'
    }


    btn.onclick = function(){

        scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }

   
}


let fero = document.getElementById('fero')

fero.onclick = function(){

    scrollTo ({
        top : 1000,
        behavior: 'smooth'
    })
}
