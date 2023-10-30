import * as fs from "fs";

console.clear();

try {
    fs.mkdirSync("../themes");
} catch (error) {}

const darkThemeGreen = {
    _name: "dark-theme-green",
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
    TextDarker: "#828282",
    TextDark: "#9b9b9b",
    Text: "#d4d4d4",
    TextPlaceholder: "#d4d4d480",
    // Indent
    IndentActive: "#86c332",
    IndentInactive: "#32383d",
    // Status
    Error: "#ff5370",
    Info: "#82aaff",
    Warning: "#ffcb6b",
    //
    Seperator: "#86c33288",
    Shadow: "#00000088",
    Selection: "#557d1c77",
    Highlight: "#557d1c33",
    // Debug
    DebugInline: "#163b4f",
    DebugCurrentLine: "#464e19",
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
    // Syntax Highlighting
    Number: "#b5cea8",
    Keyword: "#569cd6",
    Control: "#8a76cc",
    Comment: "#606060",
    Meta: "#707070",
    String: "#ce9178",
    Function: "#dcdcaa",
    Operator: "#c94e67",
    Local: "#9cdcfe",
    Escape: "#d7ba7d",
    //
    Object: "#4ec9b0",
    Struct: "#82c97a",
    Enum: "#cbd67e",
    Interface: "#82c97a",
    //
    Transparent: "#00000000",
    "?": "#FF00FF",
    Test: "#FFFF00",
};

let lightThemeGreen: Theme = {
    _name: "light-theme-green",

    Main: "#ffffff",
    Panel: "#f3f3f3",
    Activity: "#e2e2e2",
    Input: "#e2e2e2",

    Border: "#d4d4d4",
    Scrollbar: "#32383d99",
    ScrollbarHover: "#32383dcc",
    // Accent
    Accent: "#86c332",
    AccentDark: "#8fe714",
    // Text
    TextDarker: "#1e2224",
    TextDark: "#1e2224",
    Text: "#191d1f",
    TextPlaceholder: "#1e222480",
    // Indent Guide
    IndentActive: "#8fe714",
    IndentInactive: "#32383d",
    //
    Error: "#ff5370",
    Info: "#82aaff",
    Warning: "#ffcb6b",
    //
    Seperator: "#8fe71488",
    Shadow: "#00000088",
    Selection: "#557d1c77",
    Highlight: "#557d1c33",
    // Button
    Button: "#557d1c",
    ButtonHover: "#32383d",
    // Debug
    DebugInline: "#145e8677",
    DebugCurrentLine: "#464e19",
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
    // Syntax Highlighting
    Number: "#b5cea8",
    Keyword: "#569cd6",
    Control: "#8a76cc",
    Comment: "#606060",
    Meta: "#707070",
    String: "#ce9178",
    Function: "#dcdcaa",
    Operator: "#c94e67",
    Local: "#9cdcfe",
    Escape: "#d7ba7d",
    //
    Object: "#4ec9b0",
    Struct: "#82c97a",
    Enum: "#cbd67e",
    Interface: "#82c97a",
    //
    Transparent: "#00000000",
    "?": "#FF00FF",
    Test: "#FFFF00",
};

type HEX = `#${string}`;
type Theme = typeof darkThemeGreen;
type ThemeKeys = keyof Omit<typeof darkThemeGreen, "_name">;
export type ThemeNames = ThemeKeys | null | HEX;

const palletes: Record<string, Theme> = {
    "dark-theme-green": darkThemeGreen,
    "light-theme-green": lightThemeGreen,
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
    return pal;
}

function replaceVariables(text: string | null, palette: Theme): string | null {
    if (text === null) return null;
    else if (text.startsWith("#")) return text;
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
