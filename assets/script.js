function menu(what) {
    if (what === 'burger' ){
        let phone = document.getElementById("phonemenu");
        phone.classList.remove("active");
        let burger = document.getElementById("menuburger");
        burger.classList.add("active");
    } else {
        let burger = document.getElementById("menuburger");
        burger.classList.remove("active");
        let phone = document.getElementById("phonemenu");
        phone.classList.add("active");
    }
  }