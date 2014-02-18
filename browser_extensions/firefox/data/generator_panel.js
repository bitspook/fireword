var password_length_field = document.getElementById("password_length");
var display_p = document.getElementById("password_length_display");
var gen_btn = document.getElementById("gen_btn");
var copy_btn = document.getElementById("copy_btn");
var raw_password_field = document.getElementById("raw_password");
var out = document.getElementById("hashoutput");
var generator_form = document.forms.generator_form;

var get_generated_password = function () {
    var raw_password = document.getElementById("raw_password").value.trim();
    var password_length = document.getElementById("password_length").value;
    if(raw_password === ''){
        out.value = '';
        return false;
    }
    var generated_password = new Fireword(raw_password).fireword.substr(0,password_length);
    return generated_password;
};

var reset_panel = function(){
    var out = document.getElementById("hashoutput");
    out.value = "";
    raw_password_field.value = '';
    password_length_field.value = 16;
    display_p.innerHTML = password_length_field.value;
};

password_length_field.addEventListener("input", function(){
    display_p.innerHTML = password_length_field.value;
    out.value = get_generated_password();
});

generator_form.onsubmit = function(){
    get_generated_password();
    return false;
};

addon.port.on("hide", function() {
    reset_panel();
});

reset_panel();
raw_password_field.focus();
gen_btn.onclick = function(){out.value= get_generated_password()? get_generated_password(): "Enter seed password";};
copy_btn.onclick = function(){addon.port.emit("copy_generated_password", get_generated_password());};
