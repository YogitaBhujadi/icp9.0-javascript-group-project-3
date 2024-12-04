


function openModel() {
    const overlayElement = document.getElementById('overlay');
    overlayElement.style.display = 'flex';
}

function closeModel() {
    const overlayElement = document.getElementById('overlay');
    overlayElement.style.display = 'none';
}



function openModal() {
    const eventFormElement = document.getElementById('eventForm');
    eventFormElement.style.display = 'flex';
}

function closeModal() {
    const eventFormElement = document.getElementById('eventForm');
    eventFormElement.style.display = 'none';
}



function openForm(formId) {
    
    const forms = document.querySelectorAll('.reservation-form');
    forms.forEach(function(form) {
        form.style.display = 'none';
    });
    
    const selectedForm = document.getElementById(formId);
    selectedForm.style.display = 'block';
}


function handleSubmit(formId) {

    const name = document.getElementById(formId + '-name').value;
    const email = document.getElementById(formId + '-email').value;
    const phone = document.getElementById(formId + '-phone').value;
    const date = document.getElementById(formId + '-date').value;
    const time = document.getElementById(formId + '-time').value;
    const guests = document.getElementById(formId + '-guests').value;

    alert(`🎉 Your reservation has been confirmed! We can't wait to see you soon. 😊\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}`);

    document.getElementById(formId).reset();

    return false;
}

function alertMsg() {
    const overlayElement = document.getElementById('overlay1');
    overlayElement.style.display = 'none';
    alert("🎉 Your reservation has been confirmed!")
}