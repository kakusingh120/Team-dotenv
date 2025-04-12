function handleSearch(e) {
    if (e.key === 'Enter') submitSearch();
}
function submitSearch() {
    const query = document.getElementById('searchInput').value;
    console.log('Searching for:', query);
}




const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    smartphone: {
        smooth: true
    },
    tablet: {
        smooth: true
    }
});

Shery.imageMasker("#effect", {
    //Parameters are optional.
    mouseFollower: true,
    text: "Hot Wheels",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});


Shery.makeMagnet("#btn" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
    scale: 1.2,
});

Shery.textAnimate("#text" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 6,
    delay: 0.1,
    duration: 0.3,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    // multiplier: 0.1,
});