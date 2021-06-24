const form = document.getElementById('validate-form');

form.addEventListener('submit', validateFields);

function validateFields(e) {
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(!name && name === '') {
        alert('First Name cannot be empty');

        return
    }

    e.preventDefault();
}
