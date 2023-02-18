var tetAmLich = new Date(2023, 0, 22, 0, 0, 0).getTime();

function newYear() {
    var ngayHienTai = new Date().getTime();
    tconlai = tetAmLich - ngayHienTai;
    var giay = 1000;
    var phut = giay * 60;
    var gio = phut * 60;
    var ngay = gio * 24;
    var d = Math.floor(tconlai / (ngay));
    var h = Math.floor((tconlai % (ngay)) / (gio));
    var m = Math.floor((tconlai % (gio)) / (phut));
    var s = Math.floor((tconlai % (phut)) / (giay));
    document.getElementById("day").innerText = d;
    document.getElementById("hour").innerText = h;
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;
}

setInterval(function() {
    newYear()
}, 1000)