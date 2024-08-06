// console.log(document.getElementsByTagName('h2'))
// document.getElementsByClassName('cssImage')[0].innerHTML="Hello"
// document.getElementById('selectId')
// document.querySelector('.cssImage')
// document.querySelectorAll('.cssImage')
// document.querySelectorAll('#selectId')
// document.querySelector('[alt="html-css-javascript"] ')
console.log("i am working")
const setImage=document.querySelectorAll('img')

const imagesUrl=[
    'https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/381739/pexels-photo-381739.jpeg?auto=compress&cs=tinysrgb&w=600',
]

setImage.forEach((image,i)=>{
    image.src=imagesUrl[i]
})

const ImageArray=[...document.images]
console.log(ImageArray)