const rightButton = document.querySelector('.scroll-right-key');
const leftButton = document.querySelector('.scroll-left-key');
const courseItems = document.querySelector('.scroll-items');
const fourthItem = document.querySelector('.fourth-item');
const openNav = document.querySelector(".school-programs-icon-container");
const navBar = document.querySelector("nav");
const closeButton = document.querySelector(".close-button");
const body = document.querySelector('body');
const openSearchBox = document.querySelector('.search-icon');
const searchBox = document.querySelector('.search-query');
const scrollKeys = document.querySelector('.scroll-keys');
const searchDivision = document.querySelector('.search-division');




rightButton.onclick = ()=>{
  scrollRight()
}

leftButton.onclick = ()=>{
  scrollLeft()
}

let navOpen = false;

openNav.onclick = ()=>{
  if(navOpen === false){
    navBar.setAttribute('close', '');
    navOpen = true;
  }
  else{
    closeNavBar()

  } 
}

closeButton.onclick = ()=>{
  closeNavBar()
}

let checkToggle = false;
openSearchBox.onclick = ()=>{
  toggleSearchQuery()
}







// functions

function scrollRight(){
 courseItems.scrollBy(420, 0)
}

function scrollLeft(){
  courseItems.scrollBy(-420, 0)
}


function closeNavBar(){
  navBar.removeAttribute('close');
  navOpen = false
}


function toggleSearchQuery(){
  if (checkToggle === false){
    searchDivision.style.transform = 'scale(1)';
    // searchDivision.style.marginBlock = '20px';
    searchDivision.style.marginTop = '70px';
    scrollKeys.style.top =  '240px';
    checkToggle = true;
  }
  else{
    searchDivision.style.transform = 'scale(0)';
    searchDivision.style.marginBlock = '0px';
    scrollKeys.style.top =  '200px';
    checkToggle = false;
  }
}
