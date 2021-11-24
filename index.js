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

var theme = {
    "name": "IrishBruse's Dark Theme",
    "type": "dark",
    "colors": ui_colors,
    "tokenColors": tokenColorsTokens,
    "semanticHighlighting": false,
    // "semanticTokenColors": semanticTokenColorsTokens,
};

var text = JSON.stringify(theme);

// Syntax
text = text.replaceAll("<text>", "#d4d4d4");
text = text.replaceAll("<definition>", "#4ec9b0");
text = text.replaceAll("<accessor>", "#c94e67");
text = text.replaceAll("<local>", "#9cdcfe");
text = text.replaceAll("<controlflow>", "#8a76cc");
text = text.replaceAll("<method>", "#dcdcaa");
text = text.replaceAll("<keyword>", "#569cd6");
text = text.replaceAll("<string>", "#ce9178");
text = text.replaceAll("<escape>", "#d7ba7d");
text = text.replaceAll("<number>", "#b5cea8");
text = text.replaceAll("<error>", "<red>");

// General Colors
text = text.replaceAll("<darkgray>", "#505050");
text = text.replaceAll("<gray>", "#707070");
text = text.replaceAll("<red>", "#d16969");
text = text.replaceAll("<green>", "#608b4e");



const out_file = './themes/dark-theme.json';

writeJsonFile(out_file, JSON.parse(text));
