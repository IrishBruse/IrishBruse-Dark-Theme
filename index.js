import writeJsonFile from "write-json-file";
import semanticTokenColors from "./semanticTokenColors.js";
import ui_colors from "./src/editor.js";
import tokenColors from "./tokenColors.js";

let tokenColorsTokens = [];
let semanticTokenColorsTokens = {};

tokenColors.forEach(mod => {
    let keys = Object.keys(mod);

    for (let i = 0; i < keys.length; i++) {
        var rule = {
            scope: [],
            settings: {}
        }

        var scopeValues = mod[keys[i]];
        rule.scope = scopeValues;

        if (keys[i] == "bold" || keys[i] == "italic" || keys[i] == "underline" || keys[i] == "strikethrough") {
            rule.settings.fontStyle = keys[i];
        }
        else {
            rule.settings.foreground = keys[i];
        }

        tokenColorsTokens.push(rule);
    }
});

semanticTokenColors.forEach(mod => {
    mod.forEach(rule => {
        semanticTokenColorsTokens = Object.assign({}, semanticTokenColorsTokens, rule);
    });
});

var theme = {
    name: "IrishBruse's Dark Theme",
    type: "dark",
    colors: ui_colors,
    tokenColors: tokenColorsTokens,
    semanticHighlighting: true,
    semanticTokenColors: semanticTokenColorsTokens,
};

var text = JSON.stringify(theme);

// Syntax
text = text.replaceAll("<control>", "#8a76cc");
text = text.replaceAll("<definition>", "#4EC9B0");// class
text = text.replaceAll("<enum>", "#cbd67e");
text = text.replaceAll("<escape>", "#d7ba7d");
text = text.replaceAll("<error>", "<red>");
text = text.replaceAll("<gray>", "#606060");
text = text.replaceAll("<green>", "#608b4e");
text = text.replaceAll("<keyword>", "#569cd6");
text = text.replaceAll("<local>", "#9cdcfe");
text = text.replaceAll("<method>", "#dcdcaa");
text = text.replaceAll("<modifier>", "#c94e67");
text = text.replaceAll("<number>", "#b5cea8");
text = text.replaceAll("<operator>", "#909090");
text = text.replaceAll("<red>", "#d16969");
text = text.replaceAll("<struct>", "#82c97a");
text = text.replaceAll("<string>", "#ce9178");
text = text.replaceAll("<text>", "#d4d4d4");
// General Colors

const out_file = './themes/dark-theme.json';

writeJsonFile(out_file, JSON.parse(text));
