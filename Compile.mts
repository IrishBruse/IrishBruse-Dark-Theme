import { parse } from "comment-json";
import * as fs from "fs";

console.clear();

let output = {
    name: "IrishBruse's Dark Theme",
    type: "dark",
    semanticHighlighting: true,
    colors: {},
    tokenColors: [],
    semanticTokenColors: {},
    $schema: "vscode://schemas/color-theme",
};

output.colors = combine("./src/editor/");
// output.colors = combine("./src/textmate/");
// output.colors = combine("./src/semantic/");

var outputText = JSON.stringify(output, null, 4);
fs.writeFileSync("./themes/dark-theme.json", outputText);
console.log("Done export!");

function combine(inputDir) {
    let res = {};
    fs.readdirSync(inputDir).map((file) => {
        let raw = fs.readFileSync(inputDir + file);
        let json: Map<string, string> = parse(
            raw.toString(),
            null,
            true
        ) as any;
        ``;
        Object.entries(json).forEach(
            ([key, value]) => (res[key] = replaceVariables(value))
        );
    });

    console.log("Done " + inputDir);
    return res;
}

function convertToVscode(tokenColors) {
    let tokens = [];

    let sort = {};

    for (const token of Object.entries(tokenColors)) {
        const key: string = token[0];
        const value: string = token[1] as string;

        let newToken = {
            scope: [key],
            settings: {},
        };

        if (
            value === "$bold" ||
            value === "$italic" ||
            value === "$underline" ||
            value === "$strikethrough"
        ) {
            newToken.settings.fontStyle = value.replace("$", "");
        } else {
            newToken.settings.foreground = value;
        }

        if (sort[value] === undefined) {
            sort[value] = [];
        }

        sort[value].push(newToken);

        tokens.push(newToken);
    }

    return tokens;
}

function replaceVariables(text: string): string | null {
    if (text === null) return null;
    // Main
    else if (text == "$Main") return "#191d1f";
    else if (text == "$Panel") return "#1e2224";
    else if (text == "$Activity") return "#23272a";
    else if (text == "$Input") return "#32383d";
    else if (text == "$Border") return "#32383d";
    // Scroll
    else if (text == "$Scrollbar") return "#32383d99";
    else if (text == "$ScrollbarHover") return "#32383dcc";
    // Accent
    else if (text == "$Accent") return "#86c332";
    else if (text == "$AccentDark") return "#557d1c";
    // Text
    else if (text == "$LineNumber") return "#828282";
    else if (text == "$Text") return "#d4d4d4";
    else if (text == "$TextLight") return "#dfdfdf";
    else if (text == "$TextDark") return "#c9c9c9";
    else if (text == "$TextPlaceholder") return "#d4d4d480";
    // Misc
    else if (text == "$Transparent") return "#00000000";
    else if (text == "$Error") return "#FF00FF";
    else if (text == "$Seperator") return "#86c33288";
    else if (text == "$Shadow") return "#00000088";
    else if (text == "$Selection") return "#557d1c77";
    // Button
    else if (text == "$Button") return "#557d1c";
    else if (text == "$ButtonHover") return "#32383d";
    //
    //
    //
    //
    // else if (text == "$white") return "#ffffff";
    // else if (text == "$green") return "#86c332";
    // else if (text == "$red") return "#C3323E";
    // else if (text == "$blue") return "#32C3B8";
    // else if (text == "$inline-code") return "#C3323E";
    // else if (text == "$border") return "#414141";
    // else if (text == "$shadow") return "#00000088";
    // else if (text == "$test") return "#ff00ff";
    // // textmate
    // else if (text == "$number") return "#b5cea8";
    // else if (text == "$keyword") return "#569cd6";
    // else if (text == "$control") return "#8a76cc";
    // else if (text == "$comment") return "#606060";
    // else if (text == "$meta") return "#707070";
    // else if (text == "$string") return "#ce9178";
    // else if (text == "$function") return "#dcdcaa";
    // else if (text == "$operator") return "#c94e67";
    // else if (text == "$property") return "#9cdcfe";
    // else if (text == "$escape") return "#d7ba7d";
    // // Class
    // else if (text == "$object") return "#4ec9b0";
    // else if (text == "$struct") return "#82c97a";
    // else if (text == "$enum") return "#cbd67e";
    // else if (text == "$interface") return "#82c97a";
    // else if (text == "$info") return "#82aaff";
    // else if (text == "$warning") return "#ffcb6b";
    // else if (text == "$error") return "#ff5370";
    else {
        return "#ff0000";
    }
}
