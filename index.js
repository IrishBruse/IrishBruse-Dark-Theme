import writeJsonFile from "write-json-file";
import langs from "./languages.js";
import ui_colors from "./src/editor.js";

let tokens = [];

console.log(ui_colors);

langs.forEach(element => {
    tokens.push(JSON.stringify(element));
});

const theme = {
    "name": "IrishBruse's Dark Theme",
    "type": "dark",
    "colors": ui_colors,
    "tokenColors": tokens,
};

const out_file = './themes/dark-theme.json';

writeJsonFile(out_file, theme);

console.log(theme);
