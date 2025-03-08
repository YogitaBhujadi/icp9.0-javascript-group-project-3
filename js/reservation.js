function openForm(formId) {
    const forms = document.querySelectorAll('.reservation-form');
    forms.forEach((form) => {
        form.style.display = 'none'; 
    });
    document.getElementById(formId).style.display = 'block';
}


function handleSubmit(formId) {
    let reservationData = {};

    if (formId === 'menuForm') {
        reservationData = {
            name: document.getElementById('menu-name').value,
            email: document.getElementById('menu-email').value,
            phone: document.getElementById('menu-phone').value,
            date: document.getElementById('menu-date').value,
            time: document.getElementById('menu-time').value,
            guests: document.getElementById('menu-guests').value,
            request: document.getElementById('menu-request').value,
        };
    } else if (formId === 'orderForm') {
        reservationData = {
            name: document.getElementById('pickup-name').value,
            email: document.getElementById('pickup-email').value,
            phone: document.getElementById('pickup-phone').value,
            items: document.getElementById('pickup-items').value,
            date: document.getElementById('pickup-date').value,
            time: document.getElementById('pickup-time').value,
        };
    } else if (formId === 'eventForm') {
        reservationData = {
            name: document.getElementById('event-name').value,
            email: document.getElementById('event-email').value,
            phone: document.getElementById('event-phone').value,
            date: document.getElementById('event-date').value,
            details: document.getElementById('event-details').value,
            guests: document.getElementById('event-guests').value,
        };
    }

    const storedReservations = JSON.parse(localStorage.getItem('reservations')) || {}

    storedReservations[formId] = reservationData;

    localStorage.setItem('reservations', JSON.stringify(storedReservations));

    alert("Reservation is successful! 🎉");

    return false;
}

function displayReservations() {
    const storedReservations = JSON.parse(localStorage.getItem('reservations')) || {};
    console.log('Stored Reservations:', storedReservations);
    alert(JSON.stringify(storedReservations, null, 2)); 
}