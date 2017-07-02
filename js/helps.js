//Helping functions (shortcuts)
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function hide(e) {
    e.setAttribute('hidden', '');
}

function hnra(e) {
    e.setAttribute('hidden', '');
    remClass(e, "active")
}

function show(e) {
    e.removeAttribute('hidden', '');
}

function snsa(e) {
    e.removeAttribute('hidden', '');
    addClass(e, "active")
}

function addClass(e, c) {
    e.classList.add(c)
}

function remClass(e, c) {
    e.classList.remove(c)
}

function chnClass(e, oc, nc) {
    remClass(e, oc);
    addClass(e, nc);
}

function remAllCls(e) {
    e.className = '';
}

function remNAdd(e, c) {
    remAllCls(e);
    addClass(e, c)
}