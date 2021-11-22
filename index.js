import writeJsonFile from "write-json-file";
import semanticTokenColors from "./semanticTokenColors.js";
import ui_colors from "./src/editor.js";
import tokenColors from "./tokenColors.js";

let tokenColorsTokens = [];
let semanticTokenColorsTokens = {};

tokenColors.forEach(module => {
    module.forEach(rule => {
        tokenColorsTokens.push(rule);
    });
});

semanticTokenColors.forEach(module => {
    module.forEach(rule => {
        semanticTokenColorsTokens = Object.assign({}, semanticTokenColorsTokens, rule);
    });
});

const theme = {
    "name": "IrishBruse's Dark Theme",
    "type": "dark",
    "colors": ui_colors,
    "semanticHighlighting": true,
    "tokenColors": tokenColorsTokens,
    "semanticTokenColors": semanticTokenColorsTokens,
};

const out_file = './themes/dark-theme.json';

writeJsonFile(out_file, theme);

// console.log(theme);
