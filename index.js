import writeJsonFile from "write-json-file";
import semanticTokenColors from "./semanticTokenColors.js";
import ui_colors from "./src/editor.js";
import tokenColors from "./tokenColors.js";

let tokenColorsTokens = [];
let semanticTokenColorsTokens = {};

tokenColors.forEach(mod => {
    var prefix = mod.prefix;
    var suffix = mod.suffix;
    delete mod.prefix;
    delete mod.suffix;
    let keys = Object.keys(mod);

    for (let i = 0; i < keys.length; i++) {
        var rule = {
            scope: [],
            settings: {}
        }

        var scopeValues = mod[keys[i]];
        for (let i = 0; i < scopeValues.length; i++) {
            // console.log(scopeValues[i]);
            scopeValues[i] = prefix + " " + scopeValues[i] + suffix;
        }
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
text = text.replaceAll("<addition>", "#608b4e");
text = text.replaceAll("<blue>", "#569cd6");
text = text.replaceAll("<enum>", "#cbd67e");
text = text.replaceAll("<error>", "#d16969");
text = text.replaceAll("<escape>", "#d7ba7d");
text = text.replaceAll("<gray>", "#606060");
text = text.replaceAll("<green>", "#4EC9B0");// class
text = text.replaceAll("<lightblue>", "#9cdcfe");
text = text.replaceAll("<number>", "#b5cea8");
text = text.replaceAll("<purple>", "#8a76cc");
text = text.replaceAll("<red>", "#c94e67");
text = text.replaceAll("<string>", "#ce9178");
text = text.replaceAll("<struct>", "#82c97a");
text = text.replaceAll("<white>", "#d4d4d4");
text = text.replaceAll("<yellow>", "#dcdcaa");
// General Colors



const out_file = './themes/dark-theme.json';

writeJsonFile(out_file, JSON.parse(text));
