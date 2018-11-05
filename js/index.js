document.querySelector('.login-form input[type=submit]').addEventListener('click', submitForm);

function submitForm (e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest ();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.login-form').innerHTML = '<h3>Welcome!</h3>';
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            document.querySelector('.login-form').innerHTML += 'Error!';
        }
    }
    xhr.open('POST', 'login.php', true);
    const form = document.querySelector('.login-form');
    const data = new FormData(form);
    xhr.send(data);
}