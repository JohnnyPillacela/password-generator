function submit() {
    
    var pass = genPass(81);
    document.getElementById('pass').innerHTML = pass;
    console.log(pass);

}

function genPass(lens) {
    var pass = '';
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ9";

    for (var i = 0; i < lens; i++) {
        var x = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(x);
    }
    return pass
}