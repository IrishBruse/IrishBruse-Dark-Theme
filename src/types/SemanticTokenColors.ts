// https://github.com/wraith13/vscode-schemas/tree/master

import { ThemeNames } from "../Compile";

export interface SemanticTokens {
    /**
     * Style to use for symbols that are abstract.
     */
    "*.abstract"?: Style | ThemeNames;
    /**
     * Style to use for symbols that are async.
     */
    "*.async"?: Style | ThemeNames;
    /**
     * Style for all symbol declarations.
     */
    "*.declaration"?: Style | ThemeNames;
    /**
     * Style to use for symbols that are deprecated.
     */
    "*.deprecated"?: Style | ThemeNames;
    /**
     * Style to use for references in documentation.
     */
    "*.documentation"?: Style | ThemeNames;
    /**
     * Style to use for write accesses.
     */
    "*.modification"?: Style | ThemeNames;
    /**
     * Style to use for symbols that are read-only.
     */
    "*.readonly"?: Style | ThemeNames;
    /**
     * Style to use for symbols that are static.
     */
    "*.static"?: Style | ThemeNames;
    /**
     * Style for classes.
     */
    class?: Style | ThemeNames;
    /**
     * Style for comments.
     */
    comment?: Style | ThemeNames;
    /**
     * Style for decorators & annotations.
     */
    decorator?: Style | ThemeNames;
    /**
     * Style for enums.
     */
    enum?: Style | ThemeNames;
    /**
     * Style for enum members.
     */
    enumMember?: Style | ThemeNames;
    /**
     * Style for events.
     */
    event?: Style | ThemeNames;
    /**
     * Style for functions
     */
    function?: Style | ThemeNames;
    /**
     * Style for interfaces.
     */
    interface?: Style | ThemeNames;
    /**
     * Style for keywords.
     */
    keyword?: Style | ThemeNames;
    /**
     * Style for labels.
     */
    label?: Style | ThemeNames;
    /**
     * Style for macros.
     */
    macro?: Style | ThemeNames;
    /**
     * Style for member functions
     */
    member?: Style | ThemeNames;
    /**
     * Style for method (member functions)
     */
    method?: Style | ThemeNames;
    /**
     * Style for namespaces.
     */
    namespace?: Style | ThemeNames;
    /**
     * Style for numbers.
     */
    number?: Style | ThemeNames;
    /**
     * Style for operators.
     */
    operator?: Style | ThemeNames;
    /**
     * Style for parameters.
     */
    parameter?: Style | ThemeNames;
    /**
     * Style for properties.
     */
    property?: Style | ThemeNames;
    /**
     * Style for expressions.
     */
    regexp?: Style | ThemeNames;
    /**
     * Style for strings.
     */
    string?: Style | ThemeNames;
    /**
     * Style for structs.
     */
    struct?: Style | ThemeNames;
    /**
     * Style for types.
     */
    type?: Style | ThemeNames;
    /**
     * Style for type parameters.
     */
    typeParameter?: Style | ThemeNames;
    /**
     * Style for variables.
     */
    variable?: Style | ThemeNames;
    "variable.readonly.defaultLibrary"?: Style | ThemeNames;

    [id: string]: Style | ThemeNames;
}

/**
 * Colors and styles for the token.
 */
export interface Style {
    background?: ThemeNames;
    /**
     * Sets or unsets the font style to bold. Note, the presence of 'fontStyle' overrides this
     * setting.
     */
    bold?: boolean;
    /**
     * Sets the all font styles of the rule: 'italic', 'bold', 'underline' or 'strikethrough' or
     * a combination. All styles that are not listed are unset. The empty string unsets all
     * styles.
     */
    fontStyle?: "italic" | "bold" | "underline" | "strikethrough";
    /**
     * Foreground color for the token.
     */
    foreground?: ThemeNames;
    /**
     * Sets or unsets the font style to italic. Note, the presence of 'fontStyle' overrides this
     * setting.
     */
    italic?: boolean;
    /**
     * Sets or unsets the font style to strikethrough. Note, the presence of 'fontStyle'
     * overrides this setting.
     */
    strikethrough?: boolean;
    /**
     * Sets or unsets the font style to underline. Note, the presence of 'fontStyle' overrides
     * this setting.
     */
    underline?: boolean;
}
