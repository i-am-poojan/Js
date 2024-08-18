// Three way you can apply style thru js

// First Way
// document.addEventListener('DOMContentLoaded', () => {
//     const allLinks = document.querySelectorAll('a');
//     allLinks.forEach(item => {
//         item.style.color = "green";
//         item.style.textDecorationLine="none";
//         item.style.fontWeight='800'
//     });
// });

// Second Way
// document.addEventListener('DOMContentLoaded',()=>{
//     const allLinks=document.querySelectorAll('a');
//     allLinks.forEach(item=>{
//         item.style.cssText=`
//         color:green;
//         font-size:18px;
//         text-decoration-line:none;
//         font-family:cursive;
//         `
//     })
// })

// Third Way
document.addEventListener('DOMContentLoaded',()=>{
    const allLinks=document.querySelectorAll('a');
    allLinks.forEach(item=>{

        // item.className="allLinks"
        // item.className="allLinks wavyLinks"

        // item.setAttribute('class','allLinks wavyLinks') 

        item.classList.add('allLinks');
        item.classList.add('wavyLinks');
        
        // you can also remove as well as toggle.
        // remove can be help for remove classList  whenever toggle is check if class is exist than remove and not exist than add class
    })
})
