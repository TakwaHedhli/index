let total = document.getElementById("total");
console.log(total);


 let plusbt = document.getElementsByClassName("add");
 console.log(plusbt);

 for (let i=0;i<plusbt.length;i++){
    plusbt[i].addEventListener("click", function(){
        let price = document.getElementsByClassName('price')
        console.log(price)
        let qty = document.getElementsByClassName('add-cart')
            qty[i].innerHTML++;
            total.innerHTML = parseInt(total.innerHTML) + parseInt (price[i].innerHTML);
        
    });
}

 let minbt = document.getElementsByClassName("remove");
 console.log(minbt);
 

 for (let i=0;i<minbt.length;i++){
    minbt[i].addEventListener("click", function(){
        let price = document.getElementsByClassName('price')
        let qty = document.getElementsByClassName('add-cart')
          if(qty[i].innerHTML>0){
            qty[i].innerHTML--;
            total.innerHTML = parseInt(total.innerHTML) - parseInt (price[i].innerHTML);
          } 
        else{
            alert('votre panirer est vide')
        }
    });
}

let heartR = document.querySelectorAll('.heart');
console.log(heartR);
for (let heart of heartR){
    heart.addEventListener("click", function(){
        if ((heart.getAttribute('fill'))== ('grey'))
        {
        heart.setAttribute('fill' , 'red');
    }else{
        heart.setAttribute('fill' , 'grey')
    }
    });
}

let cartremove = document.getElementById('clear')
console.log(cartremove)
cartremove.addEventListener('click', function()
{
total.innerHTML = 0;
}
)
