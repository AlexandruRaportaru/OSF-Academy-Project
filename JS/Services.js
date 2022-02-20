// COLOR SELECTOR //

const colors = document.querySelectorAll('.color');

colors.forEach((color) => {
    color.addEventListener('click', (event) => {
        const filterBackground = document.querySelector('.filters');
        const currentColor = event.currentTarget.attributes.color.value;
        filterBackground.style.backgroundColor = currentColor;
        document.querySelector('.colors .active').classList.remove("active");
        event.target.classList.add('active');
        
    })
})

// LOAD MORE BUTTON //

const loadmore = document.querySelector('.loadMore');
    let currentItems = 16;
    loadmore.addEventListener('click', (event) => {
        const elementList = [...document.querySelectorAll('.products .products-image')];
        for (let i = currentItems; i < currentItems + 4; i++) {
            if (elementList[i]) {
                elementList[i].style.display = 'flex';
            }
        }
        currentItems += 4;
        debugger
        // Load more button will be hidden after list fully loaded
        if (currentItems >= elementList.length) {
            event.currentTarget.style.display = 'none';
        }
    })