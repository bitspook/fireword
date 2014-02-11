var data = require("sdk/self").data;
var widgets = require("sdk/widget");
var panels = require("sdk/panel");

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
