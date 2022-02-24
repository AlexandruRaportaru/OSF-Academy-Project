
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

// READ MORE BUTTON //

function myFunction() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.style.display = "none";
      moreText.style.display = "inline";
    }
} 