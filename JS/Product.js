// FOOTER CURRENT YEAR //

let currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;


// IMAGES SLIDER //

const images = document.querySelectorAll('.cardigan-small img');
images.forEach((image) => {
    image.addEventListener('click', (event) => {
        const currentImage = event.currentTarget.attributes.image.value;
        const bigImage = document.querySelector(`.cardigan-big .${currentImage}`);
        document.querySelector('.cardigan-big .active').classList.remove("active");
        bigImage.classList.add('active');
        document.querySelector('.cardigan-small .active').classList.remove("active");
        event.currentTarget.classList.add('active');
    })
})

// QUANTITY BUTTON //

function up(max) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
    if (document.getElementById("myNumber").value >= parseInt(max)) {
        document.getElementById("myNumber").value = max;
    }
}
function down(min) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
    if (document.getElementById("myNumber").value <= parseInt(min)) {
        document.getElementById("myNumber").value = min;
    }
}


function onlyNumberKey(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

// MODAL-IMAGE //

function zoom() {
    var modal = document.getElementById('myModal');
    var img = document.querySelector('.image.active').attributes.src.value;
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img;
    debugger;
    modalImg.alt = "";
    captionText.innerHTML = "";
}

var modal = document.getElementById('myModal');
modal.onclick = function() {
    img01.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       img01.className = "modal-custom";
     }, 400);
    
 }    


// READ MORE BUTTON //

function myFunction() {
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");
  
    if (moreText.style.display === "none") {
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      btnText.style.display = "none";
      moreText.style.display = "inline";
    }
} 


// CART //

$('.add-to-cart').click(function(event) {
  const count = $('.input-number').val();
  $('.total-count').html(count);
  localStorage.setItem('count-cart', count);
});
