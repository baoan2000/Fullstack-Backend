// const btnchange =document.getElementsByClassName('btn-background');
// const contentout = document.querySelector('#content');
// const btnchangearray = Array.from(btnchange);
// btnchangearray.forEach((item)=>{
//     item.onclick =(e)=>{
//         contentout.style.color = e.target.getAttribute('data-value');
//     }
// })

const element = document.getElementById('content');
const elementobject = window.getComputedStyle(element,null);
let elementfontsize=parseFloat(elementobject.fontSize);
const button = document.querySelectorAll('.btn-font-size');
button.forEach((item)=>{
    item.onclick =()=>{
        const textbutton = item.innerHTML;
        if(textbutton==='-') {
            elementfontsize-=1; 
            element.style.fontSize=`${elementfontsize}px`;        
        }
        else {   elementfontsize+=1;
            element.style.fontSize=`${elementfontsize}px`;
    }
}
})