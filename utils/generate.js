import * as fs from "fs";

let output = {
    name: "IrishBruse's Dark Theme",
    type: "dark",
    semanticHighlighting: true,
    colors: {},
    tokenColors: [],
    semanticTokenColors: {},
}

let editorFiles = fs.readdirSync("./src/editor/").map(file => {
    let raw = fs.readFileSync("./src/editor/" + file);
    let json = JSON.parse(raw.toString());
    return json;
})

output.colors = Object.assign({}, ...editorFiles);

var outputText = JSON.stringify(output, null, 4);



// Syntax

// Editor Colors
outputText = outputText.replaceAll("$editor-dark", "#191d1f");
outputText = outputText.replaceAll("$editor-normal", "#1e2224");
outputText = outputText.replaceAll("$editor-light", "#23272a");
outputText = outputText.replaceAll("$editor-input", "#32383d");
outputText = outputText.replaceAll("$accent-light", "#86c332");
outputText = outputText.replaceAll("$accent-dark", "#557d1c");

outputText = outputText.replaceAll("$selection", "#86c33288");

outputText = outputText.replaceAll("$foreground-disabled", "#c9c9c9");
outputText = outputText.replaceAll("$foreground", "#d4d4d4");
outputText = outputText.replaceAll("$foreground-hover", "#7c7c7c");

outputText = outputText.replaceAll("$white", "#ffffff");

outputText = outputText.replaceAll("$green", "#86c332");
outputText = outputText.replaceAll("$red", "#C3323E");
outputText = outputText.replaceAll("$blue", "#32C3B8");

outputText = outputText.replaceAll("$inline-code", "#C3323E");

// Misc
outputText = outputText.replaceAll("$null", "#00000000");
outputText = outputText.replaceAll("$border", "#414141");
outputText = outputText.replaceAll("$shadow", "#00000088");

outputText = outputText.replaceAll("$test", "#ff00ff");

fs.writeFileSync("./themes/dark-theme.json", outputText);

console.log("Done!");
