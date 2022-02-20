
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



