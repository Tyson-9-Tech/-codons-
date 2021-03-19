//Selection and Variables declaratinos

/* Menu Show Hide */
const closeMenu = _('.close');
const openMenu = _('.open');

const menuList = _('.menuList');


//Events
closeMenu.addEventListener('click', ()=>{

    openMenu.classList.remove("close");
    openMenu.classList.add("open");

    closeMenu.classList.remove("open");
    closeMenu.classList.add("close");

    menuList.style.display = "none";
});

openMenu.addEventListener('click', ()=>{
    
    closeMenu.classList.remove("close");
    closeMenu.classList.add("open");
    
    openMenu.classList.remove("open");
    openMenu.classList.add("close");
    
    menuList.style.display = "flex";
});


//Functions

/*Make Selectors*/
function _(element) { return document.querySelector(element); }
