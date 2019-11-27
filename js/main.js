// initialize and add the map
function initMap() {
    // my location
    const loc = { lat: 45.5017, lng: -73.5673 };
    // centered map on location
    const map = new google.maps.Map(document.querySelector('.map')
        , {
            zoom: 14,
            center: loc
        })
    // the marker, positionned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
}

// sticky navbar background
window.addEventListener('scroll', () =>
    document.querySelector('#navbar').style.opacity = (window.scrollY > 150) ? 0.9 : 1);

// smooth scrolling
$('#navbar a, .btn').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});
