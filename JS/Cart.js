// FOOTER CURRENT YEAR //

let currentYear = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;


// QUANTITY BUTTON //

function up(max, numberId) {
    document.getElementById(numberId).value = parseInt(document.getElementById(numberId).value) + 1;
    if (document.getElementById(numberId).value >= parseInt(max)) {
        document.getElementById(numberId).value = max;
    }
    updateQuantity(document.getElementById(numberId));
}
function down(min, numberId) {
    document.getElementById(numberId).value = parseInt(document.getElementById(numberId).value) - 1;
    if (document.getElementById(numberId).value <= parseInt(min)) {
        document.getElementById(numberId).value = min;
    }
    updateQuantity(document.getElementById(numberId));
}

function onlyNumberKey(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

// CART //

/* Set rates + misc */
var fadeTime = 100;


/* Assign actions */
$('.input-number').change( function() {
  updateQuantity(this);
});

$('.form-check-input').change( function() {
    recalculateCart();
  });

$('.delete-btn').click( function() {
  removeItem(this);
});


/* Recalculate cart */
function recalculateCart()
{
  var subtotal = 0;
  
  /* Sum up row totals */
  
  $('.cart-product').each(function () {
    subtotal += parseFloat($(this).children().children('.product-final-price').text().substring(1));
    console.log('subtotal', subtotal);
  });
  
  /* Calculate totals */
  const checkedTax = document.querySelector('.shipping input:checked').attributes.value.value;
  var total = subtotal + parseFloat(checkedTax);

  
  
  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('.cart-subtotal-price').html(`$${subtotal.toFixed(0)}`);
    $('.total-order-price').html(`$${total.toFixed(0)}`);
    $('.totals-value').fadeIn(fadeTime);
  });
}


/* Update quantity */
function updateQuantity(quantityInput)
{
   
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent().parent();
  var price = parseFloat(productRow.children().children('.product-price').text().substring(1));
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;
  
  /* Update line price display and recalc cart totals */
  productRow.children('.cart-quantity').children('.product-final-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(`$${linePrice.toFixed(0)}`);
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}


/* Remove item from cart */
function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}