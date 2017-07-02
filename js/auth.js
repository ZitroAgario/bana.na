function initreg() {
    document.querySelector('.regbtn').onclick = function() {
        var lr = document.querySelector('#lr').value;
        var pr = document.querySelector('#pr').value;
        var emr = document.querySelector('#emr').value;
        reg(lr, pr, emr);
        setTimeout(function() {
            hnra(rf)
        }, 3000);
    }
    console.info('Registering initialised!')
}

function initauth() {
    initlog();
    initreg();
}

function initlog() {
    document.querySelector('.logbtn').onclick = function() {
        var ll = document.querySelector('#ll').value;
        var pl = document.querySelector('#pl').value;
        var eml = document.querySelector('#eml').value;
        log(ll, pl, eml);
        setTimeout(function() {
            hnra(lf)
        }, 3000);
    }
    console.info('Logining initialised!')
}

function reg(log, pass, email) {
    localStorage.clear();
    var ln = forge.md.sha512.create();
    var pw = forge.md.sha512.create();
    var em = forge.md.sha512.create();
    ln.update(log);
    localStorage.setItem('login', ln.digest().toHex());
    pw.update(pass);
    localStorage.setItem('pass', pw.digest().toHex());
    em.update(email);
    localStorage.setItem('email', em.digest().toHex());
    console.info('Registered!!')
}

function log(log, pass, email) {
    var ln = forge.md.sha512.create();
    var pw = forge.md.sha512.create();
    var em = forge.md.sha512.create();
    ln.update(log);
    pw.update(pass);
    em.update(email);
    var clog = ln.digest().toHex();
    var cpass = pw.digest().toHex();
    var cemail = em.digest().toHex();
    if (clog != localStorage.getItem('login')) {
        throwError();
    } else if (cpass != localStorage.getItem('pass')) {
        throwError()
    } else if (cemail != localStorage.getItem('email')) {
        throwError()
    } else {
        throwSuccess()
    }
}


function throwError() {
    console.error('Error!!')
    var econt = document.querySelector('#ec');
    remNAdd(econt, 'err');
    show(econt);
    econt.innerHTML = '<span class="ect">Error! Please verify specified data and try again.</span>';
}

function throwSuccess() {
    console.info('Success!!!')
    var econt = document.querySelector('#ec');
    remNAdd(econt, 'tick');
    show(econt);
    econt.innerHTML = '<span class="ect">Success!</span>';
}