console.log('jiiiiii')
const whiteBoxdiv=document.querySelectorAll('.whiteBox');
console.log(whiteBoxdiv)




const imageBoxdiv=document.querySelector('.imageBox');
imageBoxdiv.addEventListener('dragstart',(e)=>{
   console.log("drag start")
   console.log(e.target)
   e.target.className +='  hold';
    setTimeout(()=>{
   e.target.className='hide';
    },0)
})

imageBoxdiv.addEventListener('dragend',(e)=>{
    console.log("drag end")
    e.target.className='imageBox';
})

for(whitebox of whiteBoxdiv){
    whitebox.addEventListener('dragover',(e)=>{
        e.preventDefault();
        console.log("dreagover")
    })
    whitebox.addEventListener('dragenter',(e)=>{
    console.log('drag enter')
    e.target.className+= '   dashed';
    })
    whitebox.addEventListener('dragleave',(e)=>{
        console.log('drag leave')
        e.target.className= '  whiteBox';
    })
    whitebox.addEventListener('drop',(e)=>{
        console.log('drop ')
        e.target.append(imageBoxdiv)
    })
}