var t = document.querySelector('title');

function animateTitle(str) {
    var arr = str.split('');
    for (var i = 0; i < arr.length; i++) {
        t.innerHTML += arr[i];
        sleep(250)
    }
}