const educationItems = document.querySelectorAll('.education-item-header, .experiences-item-header' );
console.log(educationItems)
educationItems.forEach(item => {
    item.addEventListener('click', (e) => {
        if (!e.target.classList.contains('fa-angle-down')) {
            return;
        }
        item.nextElementSibling.classList.toggle('is-hidden')
        e.target.classList.toggle('is-rotated')
    })
})