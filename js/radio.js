const save = document.getElementsByName('hero');
for (var i = 0; i < save.length; i++) {
save[i].onclick = function() {
    localStorage.setItem('Radio', this.value);
}
}
let Radio = localStorage.getItem('Radio');
if (Radio) {
let inp = document.querySelector('input[name="hero"][value="' + Radio + '"]');
if (inp) {
    inp.checked = true;
}}