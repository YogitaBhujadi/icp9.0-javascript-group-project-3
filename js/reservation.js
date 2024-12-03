function openForm(formId) {
    const forms = document.querySelectorAll('.reservation-form');
    forms.forEach((form) => {
        form.style.display = 'none'; 
    });
    document.getElementById(formId).style.display = 'block'; 
}

function handleSubmit(formId) {
    alert("Reservation is successful! 🎉");
    return false; 
}

