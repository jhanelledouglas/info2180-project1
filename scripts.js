var start = function() {
    var message = document.getElementsByClassName("message")[0];
    let msg = '';
    document.getElementsByClassName("btn")[1].addEventListener('click', function(event) {
        var e = document.getElementById("email").value;
        event.preventDefault();
        if (e === '') {
            msg = 'Please enter a valid email address';
        } else {
            msg = ("Thank you, your email address " + e + ' has been added to our mailing list.')
        }
        message.innerHTML = msg;
        return false;
    });
}

window.onload = start;