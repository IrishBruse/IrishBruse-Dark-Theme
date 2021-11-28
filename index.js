import writeJsonFile from "write-json-file";
import semanticTokenColors from "./semanticTokenColors.js";
import ui_colors from "./src/editor.js";
import tokenColors from "./tokenColors.js";

let tokenColorsTokens = [];
let semanticTokenColorsTokens = {};

tokenColors.forEach(mod => {
    mod.forEach(rule => {
        tokenColorsTokens.push(rule);
    });
});

semanticTokenColors.forEach(mod => {
    mod.forEach(rule => {
        semanticTokenColorsTokens = Object.assign({}, semanticTokenColorsTokens, rule);
    });
});

var theme = {
    "name": "IrishBruse's Dark Theme",
    "type": 'dark',
    "colors": ui_colors,
    "tokenColors": tokenColorsTokens,
    "semanticHighlighting": true,
    "semanticTokenColors": semanticTokenColorsTokens,
};

var text = JSON.stringify(theme);

// Syntax
text = text.replaceAll("<text>", "#d4d4d4");

text = text.replaceAll("<definition>", "#4EC9B0");// class
text = text.replaceAll("<enum>", "#cbd67e");
text = text.replaceAll("<struct>", "#82c97a");

text = text.replaceAll("<modifier>", "#c94e67");
text = text.replaceAll("<operator>", "#909090");
text = text.replaceAll("<keyword>", "#569cd6");
text = text.replaceAll("<control>", "#8a76cc");
text = text.replaceAll("<string>", "#ce9178");
text = text.replaceAll("<escape>", "#d7ba7d");
text = text.replaceAll("<number>", "#b5cea8");
text = text.replaceAll("<method>", "#dcdcaa");
text = text.replaceAll("<local>", "#9cdcfe");

text = text.replaceAll("<error>", "<red>");

// General Colors
text = text.replaceAll("<gray>", "#606060");
text = text.replaceAll("<red>", "#d16969");
text = text.replaceAll("<green>", "#608b4e");

const out_file = './themes/dark-theme.json';

writeJsonFile(out_file, JSON.parse(text));
