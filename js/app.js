let play1=document.querySelector('.img1')
let play2=document.querySelector('.img2')
let div1=document.querySelector('.div1')
let div2=document.querySelector('.div2')
let hashiv1=document.querySelector('.span1')
let hashiv2=document.querySelector('.span2')
let loading=document.getElementById('loading')
let audio1=document.getElementById('audio1')
const color1=['#E6E6FA','#D8BFD8','#DDA0DD','	#EE82EE','	#DA70D6','	#FF00FF','#BA55D3','#9370DB','	#8A2BE2','#9400D3','#9932CC','	#8B008B','	#800080','#4B0082']
let btnso=document.querySelector('.btnso')
let ii=document.querySelector('#ii')
let cucanak=document.querySelector('.cucanak')
const color2 = ['#FA8072','#FFA07A','#E9967A','#F08080','#DC143C','#B22222','#FF6347','	#FF4500','#DB7093','#800000'];
let prj1=document.getElementById('prj1')
let prj2=document.getElementById('prj2')
let win1=document.getElementById('win1')
let win2=document.getElementById('win2')
let end=document.getElementById('end')
let over=document.getElementById('over')
const container=document.querySelector('.container')
let press=document.getElementById('hh1')

const h1=['#E0FFFF','#AFEEEE','	#5F9EA0','#7FFFD4','#87CEEB','	#1E90FF','	#4169E1','	#0000FF','	#E6E6FA','	#000080',]

let zang=['icon/qar.png','icon/tuxt.png','icon/mkrat.png'];
// zang1=Math.floor(Math.random(zang)*zang.length)
// zang2=Math.floor(Math.random(zang)*zang.length)
// play1.setAttribute('src', zang[zang1])
// play2.setAttribute('src', zang[zang2])

setInterval(function(){
    press.style.color=h1[Math.floor(Math.random()*10)]
},200)


let i=j=0;
xaxal=()=>{
    cucanak.style.display='flex'
zang1=Math.floor(Math.random(zang)*zang.length)
zang2=Math.floor(Math.random(zang)*zang.length)
play1.setAttribute('src', zang[zang1])
play2.setAttribute('src', zang[zang2])



if(zang1==zang2){
    cucanak.innerText='Equality'
}
else if(zang1==0 && zang2==2){
    cucanak.innerText='Player 1'
    hashiv1.innerText= ++i
}else if(zang1==1 && zang2==0){
    cucanak.innerText='Player 1'
    hashiv1.innerText= ++i
}else if(zang1==2 && zang2==1){
    cucanak.innerText='Player 1'
    hashiv1.innerText= ++i
}
else{
    cucanak.innerText='Player 2'
    hashiv2.innerText= ++j
}
if(i==10){
    audio1.pause()
    prj2.play()
    win1.style.display='flex'
    setTimeout(function(){
        location.reload()
    },5000)

}else if(j==10){
    audio1.pause()
    prj1.play()
    win2.style.display='flex'
    setTimeout(function(){
        location.reload()
    },5000)
}

}
// console.log(i)

kangnel=()=>{
    end.style.display='flex'
    audio1.pause()
    over.play()
    setTimeout(function(){
        location.reload()
    },5000)
}



document.addEventListener('keypress', function(e){
    if(e){
       loading.style.display='none'
       audio1.play()
    }
    
})



function onka1() {
    audio1.play()
    loading.style.display='none'
}


    



// setInterval(function () {
// let r=Math.floor(Math.random()*255)
// let g=Math.floor(Math.random()*255)
// let b=Math.floor(Math.random()*255)

//     loading.style.background=`linear-gradient(rgb(${r},0,0),rgb(${r},${g},${b}))`
// },200)

setInterval(function () {
    hashiv1.style.color=color1[Math.floor(Math.random()*13)]
    hashiv2.style.color=color1[Math.floor(Math.random()*13)]
    cucanak.style.color=color2[Math.floor(Math.random()*10)]
}, 300);

ii.setAttribute('class','bi bi-volume-up-fill')
ii.style.color="lime"
btnso.append(ii)

function playPause() { 
    if (audio1.paused) {
        audio1.play();
        ii.setAttribute('class','bi bi-volume-up-fill')
        ii.style.color="lime"
        btnso.append(ii)
        }
    else  {
        audio1.pause(); 
        ii.style.color="red"
        ii.setAttribute('class','bi bi-volume-mute-fill')
        btnso.append(ii)
        }
}
console.log(ii)
