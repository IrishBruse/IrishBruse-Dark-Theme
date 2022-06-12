import * as fs from "fs";

let output = {
    name: "IrishBruse's Dark Theme",
    type: "dark",
    semanticHighlighting: true,
    colors: {},
    tokenColors: [],
    semanticTokenColors: {},
}

const editor = "./src/editor/";
output.colors = combine(editor);
console.log("Done " + editor);

const textmate = "./src/textmate/";
output.tokenColors = convertToVscode(combine(textmate));
console.log("Done " + textmate);

const semantic = "./src/semantic/";
output.semanticTokenColors = combine(semantic);
console.log("Done " + semantic);

var outputText = JSON.stringify(output, null, 4);
outputText = replaceVariables(outputText)
fs.writeFileSync("./themes/dark-theme.json", outputText);
console.log("Done export!");

function combine(inputDir) {
    let editorFiles = fs.readdirSync(inputDir).map(file => {
        let raw = fs.readFileSync(inputDir + file);
        let json = JSON.parse(raw.toString());
        return json;
    })

    return Object.assign({}, ...editorFiles);
}

function convertToVscode(tokenColors) {
    let tokens = []

    let sort = {}

    for (const token of Object.entries(tokenColors)) {
        const key = token[0];
        const value = token[1];

        let newToken = {
            scope: [
                key,
            ],
            settings: {
            },
        };

        if (value === "$bold" || value === "$italic" || value === "$underline" || value === "$strikethrough") {
            newToken.settings.fontStyle = value.replace("$", "");
        } else {
            newToken.settings.foreground = value;
        }

        if (sort[value] === undefined) {
            sort[value] = [];
        }

        sort[value].push(newToken);

        tokens.push(newToken)
    }

    return tokens;
}

function replaceVariables(text) {
    text = text.replaceAll("$editor-dark", "#191d1f");
    text = text.replaceAll("$editor-normal", "#1e2224");
    text = text.replaceAll("$editor-light", "#23272a");
    text = text.replaceAll("$editor-input", "#32383d");
    text = text.replaceAll("$accent-light", "#86c332");
    text = text.replaceAll("$accent-dark", "#557d1c");

    text = text.replaceAll("$selection", "#557d1c77");

    text = text.replaceAll("$foreground-disabled", "#c9c9c9");
    text = text.replaceAll("$foreground", "#d4d4d4");
    text = text.replaceAll("$foreground-hover", "#7c7c7c");

    text = text.replaceAll("$white", "#ffffff");
    text = text.replaceAll("$green", "#86c332");
    text = text.replaceAll("$red", "#C3323E");
    text = text.replaceAll("$blue", "#32C3B8");

    text = text.replaceAll("$inline-code", "#C3323E");

    text = text.replaceAll("$null", "#00000000");
    text = text.replaceAll("$border", "#414141");
    text = text.replaceAll("$shadow", "#00000088");

    text = text.replaceAll("$test", "#ff00ff");

    // textmate
    text = text.replaceAll("$number", "#b5cea8");
    text = text.replaceAll("$keyword", "#569cd6");
    text = text.replaceAll("$control", "#8a76cc");
    text = text.replaceAll("$comment", "#606060");
    text = text.replaceAll("$meta", "#707070");
    text = text.replaceAll("$string", "#ce9178");
    text = text.replaceAll("$function", "#dcdcaa");
    text = text.replaceAll("$operator", "#c94e67");
    text = text.replaceAll("$property", "#9cdcfe");
    text = text.replaceAll("$escape", "#d7ba7d");

    text = text.replaceAll("$object", "#4ec9b0");//class
    text = text.replaceAll("$struct", "#82c97a");
    text = text.replaceAll("$enum", "#cbd67e");
    text = text.replaceAll("$interface", "#82c97a");

    return text;
}
