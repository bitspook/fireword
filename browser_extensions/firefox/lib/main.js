var data = require("sdk/self").data;
var widgets = require("sdk/widget");
var panels = require("sdk/panel");
var clipboard = require("sdk/clipboard");

var gen_panel = panels.Panel({
    width: 300,
    height: 300,
    contentURL: data.url("generator_panel.html")
});

widgets.Widget({
    label: "Fireword Generator",
    id: "fireword-in-panel-generator",
    contentURL: data.url("logo.png"),
    panel: gen_panel
});


gen_panel.on("show", function() {
    gen_panel.port.emit("show");
});
gen_panel.on("hide", function() {
    gen_panel.port.emit("hide");
});

gen_panel.port.on("copy_generated_password", function(generated_password){
    clipboard.set(generated_password);
    gen_panel.hide();
});
