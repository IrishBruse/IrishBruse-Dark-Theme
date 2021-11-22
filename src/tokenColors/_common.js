export default [
    // Definitions class/struct etc
    {
        "scope": [
            "storage.type.modifier",
            "entity.name.type.class",
            "entity.name.type.struct",
            "entity.name.type.alias",
        ],
        "settings": {
            "foreground": "#4ec9b0",
        },
    },
    // Generics Type & control flow keywords
    {
        "scope": [
            "storage.type.generic",
            "entity.name.type.type-parameter",
            "storage.type",
        ],
        "settings": {
            "foreground": "#4ec9b0"
        },
    },
    // Definitions class/struct etc
    {
        "scope": [
            "storage.modifier",
        ],
        "settings": {
            "foreground": "#c94e67",
        },
    },
    // Local Fields
    {
        "scope": [
            "variable.other.object.field",
            "entity.name.variable.local",
        ],
        "settings": {
            "foreground": "#9cdcfe"
        },
    },
    // Control flow
    {
        "scope": [
            "keyword.control",
        ],
        "settings": {
            "foreground": "#8a76cc"
        },
    },
    // Method/Function definition name
    {
        "scope": [
            "entity.name.function",
        ],
        "settings": {
            "foreground": "#dcdcaa"
        },
    },
    // primatives and (null,new,this)
    {
        "scope": [
            "keyword.other",
            "constant.language",
            "keyword.type",
        ],
        "settings": {
            "foreground": "#569cd6"
        },
    },
    // Escape
    {
        "scope": [
            "meta.selector",
            "constant.character",
            "constant.other.symbol",
            "constant.character.escape",
        ],
        "settings": {
            "foreground": "#d7ba7d",
        },
    },
    //Constant numbers
    {
        "scope": [
            "constant.numeric.decimal",
            "keyword.other.unit",
        ],
        "settings": {
            "foreground": "#b5cea8",
        },
    },
    // Comments
    {
        "scope": [
            "punctuation.terminator.statement",
            "punctuation.definition.comment",
            "keyword.operator.assignment",
            "comment.block",
        ],
        "settings": {
            "foreground": "#505050",
        },
    },
    {
        "scope": [
            "comment.line.double-slash",
            "comment.block.documentation",
        ],
        "settings": {
            "foreground": "#707070",
        },
    },
    // Punctuation
    {
        "scope": [
            "keyword.operator",
            "punctuation.squarebracket",
            "punctuation.definition.typeparameters",
        ],
        "settings": {
            "foreground": "#707070",
        },
    },
    // Errors
    {
        "scope": [
            "token.error-token"
        ],
        "settings": {
            "foreground": "#ff00ff",
        },
    },
]
