let productImg = document.querySelector('#productImg');
let btn = document.querySelectorAll('.btn');
btn[0].classList.add('active');

btn[0].addEventListener('click', function(){
    productImg.src = "./Images/image1.png";
    btn.forEach(button => {
        button.classList.remove('active');
    })
    this.classList.add('active');
})
btn[1].addEventListener('click', function(){
    productImg.src = "./Images/image2.png";
    btn.forEach(button => {
        button.classList.remove('active');
    })
    this.classList.add('active');
})
btn[2].addEventListener('click', function(){
    productImg.src = "./Images/image3.png";
    btn.forEach(button => {
        button.classList.remove('active');
    })
    this.classList.add('active');
})