//import "./styles.css";

// Part 1
let headEl = document.querySelector("head")
let css_link = document.createElement("link")

css_link.setAttribute("rel", "stylesheet")
css_link.setAttribute("href", "src/styles.css")
headEl.appendChild(css_link)

let mainEl = document.querySelector("main")
mainEl.style.backgroundColor = "var(--main-bg)"

let h1El = document.createElement("h1")
h1El.innerHTML = "DOM Manipulation"
h1El = mainEl.appendChild(h1El)

mainEl.classList.add("flex-ctr")


// Part 2
const topMenuEl = document.getElementById("top-menu")
topMenuEl.style.height = "100%"

topMenuEl.style.backgroundColor = "var(--top-menu-bg)"
//topMenuEl.style.display = "flex"
//topMenuEl.style.justifyContent = "space-around"
topMenuEl.classList.add("flex-around")


var menuLinks = [
  { text: 'about', href: '/about' },
   {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
]},
 {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];;

for (let link of menuLinks) {
    let a = document.createElement("a")
    a.setAttribute("href", link.href)
    a.text = link.text
    topMenuEl.appendChild(a)

}

//part 3

 let subMenuEl = document.getElementById("sub-menu");
   subMenuEl.style.height = "100%";
   subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
   subMenuEl.classList.add("flex-around");
   subMenuEl.style.position = "absolute";
   subMenuEl.style.style.top = "0";
   
   //console.log()


   //part 4
   //adding top menu interaction
   function isubMenu (links){
    subMenuEl.replaceChildren([]);
    links.forEach((link) => {
     
     let topMenuLinks = document.querySelectorAll("a")
     NElement.href = link.href;
     NElement.textContent = link.text;
     topMenuEl.appendChild(NElement);
    })
   }
    


    //attaching clickevent listener to topMenEl
      topMenuEl.addEventListener('click', (e) => {
        e.target.preventDefault() ;
        Array.from(e.target.parentElement.children).forEach((child) =>{
          if(child.classList.contains("active")){
              e.target.classList.remove("active");
          };
        })
        
          if (e.target.nodeName !== "a")
            return;
        
        else {
             e.target.classList.add("active");
             let topMenuLinks = e.target.innerText.toLowerCase();
             let targetLink;

             menuLinks.forEach((link) => {
              if (topMenuLinks === link.text){
                if(link.hasOwnProperty('subLinks')){
                  targetLink =link;
                  subMenuEl.style.top = "100%";
                  return;
                }
                else{
                  subMenuEl.style.top ="0";
                  return;
                }
              }
             })
           }
   //part 5
         subMenuEl.addEventElistener('click', (e) => {
          e.preventDefault();
            if(e.target.nodeName !== "a")
              return;
          
            subMenuEl.style.top = "0";
            Array.from(topMenuEl.children).foreEach((child) =>{
              if(child.classList.contains("active")){
                child.classList.remove("active");
              }
            })
            mainEl.innerHTML = `<h1>${e.target.textContent.toLocaleUpperCase()}</h1>`;
         })

 
      
        })
