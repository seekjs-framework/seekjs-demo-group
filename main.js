/**
 * Created by likaituan on 15/8/9.
 */

seekjs.config({
    ns:{
        "util.": "/utils/",
        "css.": {
            path: "/css/",
            type: ".css"
        }
    }
});

require("css.tag");
require("css.class");

var app = require("sys.app");

app.viewEx = require("util.view");
app.pipeEx = require("util.pipe");

app.config({
    js: `/js/`,
    css: `/css/`,
    templates: `/templates/`
});

app.init("home");
