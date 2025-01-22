
// All necessary Element select;
const nav = document.querySelector('nav');

const listItem = document.querySelectorAll('ul.main-menu > li');
const sidebarLinkIcon = document.querySelectorAll('.side-drop-toggle');
const sidebarLinkAnchor = document.querySelectorAll('ul.main-menu > li > a');

const mbSearchBox = document.querySelector('.mobile-search-box');
const searchBoxToggleBtn = document.querySelector('.srch-bx-tgle-btn');




// Menu link reset function
const menuReset = ()=>{
    sidebarLinkIcon.forEach(icon =>{
        icon.classList.add('fa-plus');
        icon.classList.remove('fa-minus');
    });
    listItem.forEach(li =>{
        li.classList.remove('open')
    })
    sidebarLinkAnchor.forEach(anchor => {
        anchor.classList.remove('red')
    })
}

// Sidebar toggle function;
const menuToggle = document.getElementById('menu-toggle');
menuToggle.addEventListener('click', ()=>{
    menuToggle.classList.toggle('fa-bars');
    menuToggle.classList.toggle('fa-x');
    nav.classList.toggle('show');
    menuReset();
})



document.addEventListener('click', (e)=>{
    if(!nav.contains(e.target) && nav.classList.contains('show') && !menuToggle.contains(e.target)){
        nav.classList.remove('show');
        menuToggle.classList.toggle('fa-bars');
        menuToggle.classList.toggle('fa-x');

        menuReset();
    }
    

})


// Sidebar Dropdown toggle function
listItem.forEach(li =>{
    li.addEventListener('click', ()=>{
        li.classList.toggle('open');

        const menuIcon = li.querySelector('.side-drop-toggle');
        menuIcon.classList.toggle('fa-plus');
        menuIcon.classList.toggle('fa-minus');

        const anchor = li.querySelector('li > a');
        anchor.classList.toggle('red');
    })
})




// Search bar appear function
searchBoxToggleBtn.addEventListener('click', ()=>{
    mbSearchBox.classList.toggle('mb-search-box-show');
    searchBoxToggleBtn.classList.toggle('red')
});


document.addEventListener('click', (e)=>{
   if(!searchBoxToggleBtn.contains(e.target) && !mbSearchBox.contains(e.target) && mbSearchBox.classList.contains('mb-search-box-show')){
    mbSearchBox.classList.remove('mb-search-box-show');
    searchBoxToggleBtn.classList.remove('red')
   }
});


// Image slider auto
const imgs = document.querySelectorAll('.image-slider ul img');
// console.log(imgs);

let init = 0;

const changeImage = ()=>{
    for(let i = 0; i < imgs.length; i++){
        imgs[i].style.display = 'none';
    }
    imgs[init].style.display = 'block'
}
changeImage();

const autoSlideImage = setInterval(()=>{
    if(init < imgs.length - 1){
        init++;
    }else{
        init = 0;
    }
    changeImage();
}, 4000)