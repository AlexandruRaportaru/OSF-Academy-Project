
// LOAD MORE BUTTON //

const loadmore = document.querySelector('.loadMore');
    let currentItems = 8;
    loadmore.addEventListener('click', (event) => {
        const elementList = [...document.querySelectorAll('.products .products-image')];
        for (let i = currentItems; i < currentItems + 4; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'flex';
            }
        }
        currentItems += 8;
        debugger
        // Load more button will be hidden after list fully loaded
        if (currentItems >= elementList.length) {
            event.currentTarget.style.display = 'none';
        }
    })


// COOKIES POPUP //

$(document).ready(function() { 
    var cookie = false;
    var cookieContent = $('.cookie-disclaimer');

    checkCookie();

    if (cookie === true) {
      cookieContent.hide();
    }

    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toGMTString();
      document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
      }
      return "";
    }

    function checkCookie() {
      var check = getCookie("acookie");
      if (check !== "") {
        return cookie = true;
      } else {
          return cookie = false; //setCookie("acookie", "accepted", 365);
      }
      
    }
    $('.accept-cookie').click(function () {
      setCookie("acookie", "accepted", 365);
      cookieContent.hide(500);
    });
});


// PASSWORD VIEW IN MODAL //

const togglePassword = document.querySelector("#togglePassword");
        const password = document.querySelector("#password");

        togglePassword.addEventListener("click", function () {
            // toggle the type attribute
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
            
            // toggle the icon
            this.classList.toggle("bi-eye");
        });

        // prevent form submit
        const form = document.querySelector("form");
        form.addEventListener('submit', function (e) {
            e.preventDefault();
        });