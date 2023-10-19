import * as fs from "fs";
import editor from "./editor";

console.clear();

try {
    fs.mkdirSync("../themes");
} catch (error) { }

const baseTheme = {
    _name: "base-theme",
    Main: "#191d1f",
    Panel: "#1e2224",
    Activity: "#23272a",
    Input: "#32383d",
    Border: "#32383d",
    Scrollbar: "#32383d99",
    ScrollbarHover: "#32383dcc",
    // Accent
    Accent: "#86c332",
    AccentDark: "#557d1c",
    // Text
    TextDark: "#828282",
    Text: "#d4d4d4",
    TextPlaceholder: "#d4d4d480",
    // Indent
    IndentActive: "#86c332",
    IndentInactive: "#32383d",
    // Misc
    Transparent: "#00000000",
    "?": "#FF00FF",
    "Test": "#FFFF00",
    //
    Error: "#ff5370",
    Info: "#82aaff",
    Warning: "#ffcb6b",
    //
    Seperator: "#86c33288",
    Shadow: "#00000088",
    //
    Selection: "#557d1c77",
    Highlight: "#557d1c33",
    // Button
    Button: "#557d1c",
    ButtonHover: "#32383d",
    // Diff
    Inserted: "#91b85933",
    Removed: "#e5393544",
    // Ansi
    AnsiBrightBlack: "#4e4e4e",
    AnsiBrightBlue: "#82aaff",
    AnsiBrightCyan: "#89ddff",
    AnsiBrightGreen: "#c3e88d",
    AnsiBrightMagenta: "#b6a4ee",
    AnsiBrightRed: "#ff5370",
    AnsiBrightWhite: "#ffffff",
    AnsiBrightYellow: "#ffcb6b",
    AnsiBlack: "#000000",
    AnsiBlue: "#6182b8",
    AnsiCyan: "#39adb5",
    AnsiGreen: "#91b859",
    AnsiMagenta: "#8a76cc",
    AnsiRed: "#e53935",
    AnsiWhite: "#a0a0a0",
    AnsiYellow: "#ffb62c",
    // Error Lense
    ErrorLensError: "#e45454",
    ErrorLensInfo: "#00b7e4",
    ErrorLensHint: "##2faf64",
    ErrorLensWarning: "#ff942f",
};

type HEX = `#${string}`;
type Theme = typeof baseTheme;
type ThemeKeys = keyof Omit<typeof baseTheme, "_name">;
export type ThemeNames = ThemeKeys | null | HEX;

let darkTheme: Theme = structuredClone(baseTheme);
darkTheme._name = "dark-theme-green";

let lightTheme: Theme = structuredClone(baseTheme);
lightTheme._name = "light-theme-green";
lightTheme.Main = "#ffffff";
lightTheme.Panel = "#f3f3f3";
lightTheme.Activity = "#eeeeee";

const palletes: Record<string, Theme> = {
    "dark-theme-green": darkTheme,
    "light-theme-green": lightTheme,
};

try {
    for (const theme of ["dark-theme-green", "light-theme-green"]) {
        let output = {
            name: "IrishBruse's Color Theme",
            type: "dark",
            semanticHighlighting: true,
            colors: {},
            tokenColors: [],
            semanticTokenColors: {},
        };

        let pal: Theme = palletes[theme];
        output.colors = ProcessEditorColors(pal);
        // output.colors = combine("./src/textmate/");
        // output.colors = combine("./src/semantic/");

        var outputText = JSON.stringify(output, null, 4);
        fs.writeFileSync(`../themes/${pal._name}.json`, outputText);
        console.log("Done export " + pal._name);
    }
} catch (error) {
    console.error(error);
}

console.log();

function ProcessEditorColors(pal: Theme) {
    let res = {};
    Object.entries(editor).forEach(([key, value]) => {
        res[key] = replaceVariables(value, pal);
    });
    return res;
}

function replaceVariables(
    text: string | null,
    palette: Theme
): string | null {
    if (text === null) return "#ffff00";
    else if (!text.startsWith("#")) return palette[text];
    else return "#ff0000";
}

function convertToVscode(tokenColors) {
    let tokens = [];

    let sort = {};

    for (const token of Object.entries(tokenColors)) {
        const key: string = token[0];
        const value: string = token[1] as string;

        let newToken = {
            scope: [key],
            settings: {
                fontStyle: undefined,
                foreground: undefined,
            },
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
