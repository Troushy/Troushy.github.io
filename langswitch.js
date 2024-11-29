var select = document.getElementById("language");
select.addEventListener('change', function (e) {
    // alert(e.target.value + '.html');
    window.location.href = e.target.value + '.html';
})