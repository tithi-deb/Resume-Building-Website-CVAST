// change navbar styles on scroll
window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 100)
})



//show/hide answers
const faqs=document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click',() =>{
        faq.classList.toggle('open')

        //change icon
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className ==='uil uil-plus-circle'){
            icon.className ="uil uil-minus-circle"
        }else{
            icon.className="uil uil-plus-circle";
        }

    })
})

//show/hide nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click',() =>{
    menu.style.display ="flex";
closeBtn.style.display="inline-block";
menuBtn.style.display="none";

})


//close nav menu
const closeNav =() => {
    menu.style.display="none";
    closeBtn.style.display="none";
    menuBtn.style.display="inline-block";
}
closeBtn.addEventListener('click',closeNav);

//signup
function saveDetails() {
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm = document.getElementById("confirm").value;

    alert("Name : " + name + "\n Email : " + email);

}