// Selecting Side NavBar, MenuIcon

let sidenav = document.getElementById("sidenav");
let menuicon = document.getElementById("menuicon");
let closenav = document.getElementById("closenav");

menuicon.addEventListener("click", function () {
  sidenav.style.right = 0;
});

closenav.addEventListener("click", function () {
  sidenav.style.right = "-50%";
});

let search = document.getElementById("search");
let productContainer = document.getElementById("product-container");
let productList = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function () {
  let enteredValue = event.target.value.toUpperCase();

  for (i = 0; i < productList.length; i++) 
    {
        let productname = productList[i].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(enteredValue) < 0) 
        {
        productList[i].style.display = "none";
        } 

        else 
        {
        productList[i].style.display = "block";
        }
    }
});
