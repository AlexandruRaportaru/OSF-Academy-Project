const countCart = localStorage.getItem('count-cart') || 0 ;
$('.total-count').html(countCart);


// FOOTER CURRENT YEAR //

let currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;


// LOAD MORE BUTTON // 

const loadmore = document.querySelector('.loadMore');
    let currentItems = 8;
    loadmore.addEventListener('click', (event) => {
        const elementList = [...document.querySelectorAll('.products .photos')];
        debugger;
        for (let i = currentItems; i < currentItems + 4; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'flex';
            }
        }
        currentItems += 8;
        // Load more button will be hidden after list fully loaded
        if (currentItems >= elementList.length) {
            event.currentTarget.style.display = 'none';
        }
    })

// COOKIES POPUP //


$('.cookie-disclaimer').hide();


  var cookie = localStorage.getItem('cookie');
  console.log(cookie)
  $('.accept-cookie').click(function () {
    localStorage.setItem('cookie', true);
    $('.cookie-disclaimer').hide();
  });

  $('.cookie-close').click(function () {
    $('.cookie-disclaimer').hide();
  });


  if (cookie === null) {
    var delay=10000;
  setTimeout(function(){
      $('.cookie-disclaimer').show();
  },delay);
  } 

// PASSWORD VIEW IN MODAL //

const togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#password");

    togglePassword.addEventListener("click", function () {
        const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
        
        this.classList.toggle("bi-eye");
    });

    // prevent form submit
    const form = document.querySelector("form");
    form.addEventListener('submit', function (e) {
    });


// CART //

$('.add-to-cart').click(function(event) {
  var count = $('.total-count').text();
  $('.total-count').html(++count);
});



// HOVER PRODUCT //

$( ".products-wrapper" ).hover(
  function() { 
    $( this ).append( $( `<div class="products-background">
    <button class="add-to-cart"><i class="fa-solid fa-plus"></i></button>
    <button class="add-to-favourites"><i class="fa-regular fa-heart"></i></button>
    </div>` ) );

    $('.add-to-cart').click(function(event) {
      var count = $('.total-count').text();
      $('.total-count').html(++count);
    });

    $('.add-to-favourites').click(function(event) {
      var count = $('.total-favourites').text();
      $('.total-favourites').html(++count);
    });
  }, function() {
    $( this ).find( ".products-background" ).last().remove();
  }
);


