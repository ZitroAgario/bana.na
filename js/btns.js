function hmoc() {
    var cbtns = document.querySelectorAll(".cnlbtn");
    for (var j = 0; j < cbtns.length; j++) {
        cbtns[j].onclick = function() {
            var modals = document.querySelectorAll(".modal");
            for (var i = 0; i < modals.length; i++) {
                hnra(modals[i]);
            }
        }
    }
}
$(function() {
    var modals = document.querySelectorAll(".modal");
    for (var i = 0; i < modals.length; i++) {
        hnra(modals[i]);
    }
});
$(function() {
    document.querySelector("#logbtn").onclick = function() {
        snsa(lf);
        addClass(lf, 'fade');
    }
    document.querySelector("#regbtn").onclick = function() {
        snsa(rf);
        addClass(rf, 'fade');
    }
});
$(function() {
    window.onclick = function(event) {
        var amodal = document.querySelector(".active");
        if (event.target == amodal) {
            hnra(amodal);
        }
    }
});