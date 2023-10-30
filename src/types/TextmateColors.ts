// https://github.com/wraith13/vscode-schemas/tree/master

import { ThemeNames } from "../Compile";


export interface Textmate {
    /**
     * Description of the rule.
     */
    name?: string;
    /**
     * Scope selector against which this rule matches.
     */
    scope?: string[] | string;
    settings: Settings;
}

/**
 * Colors and styles for the token.
 */
export interface Settings {
    background?: string;
    /**
     * Font style of the rule: 'italic', 'bold', 'underline', 'strikethrough' or a combination.
     * The empty string unsets inherited settings.
     */
    fontStyle?: string;
    /**
     * Foreground color for the token.
     */
    foreground?: string;
}
