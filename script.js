const b = document.querySelector('button.button--no');
b.addEventListener('onclick', onclick);

b.onclick = function(){
    const i=Math.floor(Math.random() * 500)+1;
    const j=Math.floor(Math.random() * 500)+1;

    b.style.left=i+"px"
    b.style.top=j+"px"
}

const b2 = document.querySelector('button.button--yes');
b2.addEventListener('onclick', onclick);

b2.onclick = function(){
    window.open('https://soul711.github.io/READY'); 
    document.querySelector('p').innerHTML=text;
} 