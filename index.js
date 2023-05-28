const headerButton = document.getElementById('headerButton')

headerButton.addEventListener('click', () => {
    window.scroll({
        top: 700,
        left: 0,
        behavior: "smooth",
    });

})