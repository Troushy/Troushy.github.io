var select = document.getElementById("language");
select.addEventListener('change', function (e) {
    // alert(e.target.value + '.html');
    var yes = confirm("Are you sure?/Вы уверены?");
    if (yes)
        window.location.href = e.target.value + '.html';
    else {}
})