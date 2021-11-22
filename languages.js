import { readdirSync } from "fs";

let exports = [];
readdirSync("./src/partials/").forEach(function (file) {
    console.log("- " + file);
    var name = file.replace(".js", "");
    exports.push(import("./src/partials/" + file));
});

export default exports;
