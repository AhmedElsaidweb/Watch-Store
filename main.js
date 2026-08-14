let images = document.getElementById('image');



setInterval(function(){
 images.src = 'img/watch3.jpeg';
 
},'3000')



let main2 = document.getElementById('main2');
main2.style.display='none';

let btn = document.getElementsByClassName('get_watch')[0]; 
 let check =true;
btn.addEventListener('click',function(){
    if(check){
    main2.style.display='flex';
    btn.innerHTML='عرض الأقل';
    check=false;
    }
    else{
    main2.style.display='none';
    btn.innerHTML=' عرض جميع الساعات';
    check=true;
    }
})

  

let shop = document.getElementsByClassName('shop')[0];
let nav2 = document.getElementsByClassName('nav2')[0];
let divs =document.querySelectorAll('div');
let div_of_men = document.getElementsByClassName('man');
let men = document.getElementById('men');
let parent = document.getElementById('parent');
men.onclick = function(){

for(let i =0;i<divs.length;i++){
divs[i].style.display='none';

nav2.style.display='block'
parent.style.display='block'
shop.style.display='block'
}

//عرض divs محددة
for(let x =0;x<div_of_men.length;x++){
div_of_men[x].style.display='block'

}
}

//زرار الكل
let big = document.getElementById('big');

big.addEventListener('click',function(){
for(let i =0;i<divs.length;i++){
divs[i].style.display='block';
Myworks.style.display = 'none';

}
}) 

//زرار women
let div_of_woman = document.getElementsByClassName('woman')
let women = document.getElementById('women');

women.addEventListener('click',function(){
   for(let z =0;z<divs.length;z++){
divs[z].style.display='none';

nav2.style.display='block'
parent.style.display='block'
shop.style.display='block'


}

for(let c =0; c<div_of_woman.length; c++){
div_of_woman[c].style.display='block'

}
}
)

//زرار ماركات فاخرة

let prande = document.getElementById('prande');
let div_of_prande = document.getElementsByClassName('prandes');

prande.addEventListener('click',function(){
 for(let h =0;h<divs.length;h++){
divs[h].style.display='none';

nav2.style.display='block'
parent.style.display='block'
shop.style.display='block'


}

for(let g =0; g<div_of_prande.length;g++){
div_of_prande[g].style.display='block'

}

})

//زرار Services

let Services = document.getElementById('Services');
let Myworks = document.getElementById('Myworks');
console.log(Myworks)

Services.addEventListener('click', function(e){
    e.preventDefault();
    Myworks.style.display = 'block'
    parent.style.display='none'
} ) 

// زرار product
let Product = document.getElementById('Product');
console.log(Product)
Product.addEventListener('click',function(){
    for(let k =0;k<divs.length;k++){
divs[k].style.display='block';
Myworks.style.display = 'none';
}
})









let ul = document.querySelector('ul');
let nav = document.querySelector('nav');
console.log(nav)
let lines = document.getElementById('lines');
lines.addEventListener('click',function(){
    nav.style.display= 'flex'
      ul.style.display= 'flex'

})

let btnClose = document.getElementById('btnClose');

btnClose.addEventListener('click',function(){
    nav.style.display= 'none';
      ul.style.display= 'none';
})
