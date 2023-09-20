const buttom = document.querySelector('#btn');
buttom.addEventListener('click',async function(){
    const module = await import('./module.js');
    module.hello(); 
})

