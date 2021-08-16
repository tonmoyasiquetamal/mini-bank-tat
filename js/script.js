// User Own Mail-Id
document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // User Own Password
    const passowrdFilled = document.getElementById('user-password');
    const userPassword = passowrdFilled.value;
    // Check email & password
    if (userEmail == 'abc@yahoo.com' && userPassword == 'abcd') {
        window.location.href = 'banking.html'
    }
})
