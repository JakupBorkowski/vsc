const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('a').forEach(link => {
    if(link.href.includes(`${activePage}`)){
        console.log(`${activePage}`);
        link.classList.add('active');
    }
})