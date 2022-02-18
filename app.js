
// LOAD MORE BUTTON //

const loadmore = document.querySelector('.loadMore');
    let currentItems = 8;
    loadmore.addEventListener('click', (event) => {
        const elementList = [...document.querySelectorAll('.products .products-image')];
        debugger
        for (let i = currentItems; i < currentItems + 4;) {
            if (elementList[i]) {
                elementList[i].style.display = 'block';
            }
        }
        currentItems += 8;

        // Load more button will be hidden after list fully loaded
        if (currentItems >= elementList.length) {
            event.target.style.display = 'none';
        }
    })

//
