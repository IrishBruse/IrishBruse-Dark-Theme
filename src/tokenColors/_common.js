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
            "foreground": "<definition>",
        },
    },
    // Generics Type & control flow keywords
    {
        "scope": [
            "storage.type.generic",
            "entity.name.type.type-parameter",
        ],
        "settings": {
            "foreground": "<definition>"
        },
    },
    // Definitions class/struct etc
    {
        "scope": [
            "storage.modifier",
        ],
        "settings": {
            "foreground": "<accessor>",
        },
    },
    // Local Fields
    {
        "scope": [
            "variable.other.object.field",
        ],
        "settings": {
            "foreground": "<local>"
        },
    },
    // Control flow
    {
        "scope": [
            "keyword.control",
        ],
        "settings": {
            "foreground": "<controlflow>"
        },
    },
    // Method/Function definition name
    {
        "scope": [
            "entity.name.function",
        ],
        "settings": {
            "foreground": "<method>"
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
            "foreground": "<keyword>"
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
            "foreground": "<escape>",
        },
    },
    //Constant numbers
    {
        "scope": [
            "constant.numeric.decimal",
            "keyword.other.unit",
        ],
        "settings": {
            "foreground": "<number>",
        },
    },
    {
        "scope": [
            "variable.other.constant.property",
        ],
        "settings": {
            "fontStyle": "bold",
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
            "foreground": "<darkgray>",
        },
    },
    {
        "scope": [
            "comment.line.double-slash",
            "comment.block.documentation",
        ],
        "settings": {
            "foreground": "<gray>",
        },
    },
    // Punctuation
    {
        "scope": [
            "keyword.operator",
            "entity.name.function.member.overload.cs",
        ],
        "settings": {
            "foreground": "<gray>",
        },
    },
    // Errors
    {
        "scope": [
            "invalid.unimplemented",
            "invalid.illegal",
            "invalid.deprecated",
            "invalid.broken",
            "token.error-token"
        ],
        "settings": {
            "foreground": "<error>",
            "fontStyle": "italic strokethrough",
        },
    },
]
