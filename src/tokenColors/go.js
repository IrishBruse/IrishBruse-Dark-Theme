export default [
    // Namespaces
    {
        "scope": [
            "entity.name.package.go",
        ],
        "settings": {
            "foreground": "<gray>",
        },
    },
    // Comma
    {
        "scope": [
            "punctuation.other.comma.go",
            "punctuation.definition.bracket.square.go",
        ],
        "settings": {
            "foreground": "<darkgray>",
        },
    },
    // Strings
    {
        "scope": [
            "string.quoted.rune.go",
        ],
        "settings": {
            "foreground": "<string>",
        },
    },
    // variable assignment
    {
        "scope": [
            "variable.other.assignment.go",
        ],
        "settings": {
            "foreground": "<local>",
        },
    },
    // Escape
    {
        "scope": [
            "constant.other.rune.go",
        ],
        "settings": {
            "foreground": "<escape>",
        },
    },
    // Functions
    {
        "scope": [
            "support.function.builtin.go",
            "support.function.go",
        ],
        "settings": {
            "foreground": "<method>"
        },
    },
    // Functions
    {
        "scope": [
            "keyword.function.go",
        ],
        "settings": {
            "foreground": "<accessor>"
        },
    },
    // Keywords
    {
        "scope": [
            "keyword.operator.address.go",
            "keyword.struct.go",
            "storage.type.boolean.go",
            "storage.type.string.go",
            "storage.type.numeric.go",
            "keyword.import.go",
            "keyword.package.go",
        ],
        "settings": {
            "foreground": "<keyword>",
        },
    },
    // Strings
    {
        "scope": [
            "string.quoted.double.go",
            "string.quoted.single.go",
            "string.template.go",
        ],
        "settings": {
            "foreground": "<string>",
        },
    },
    // Defs
    {
        "scope": [
            "entity.name.type.go",
        ],
        "settings": {
            "foreground": "<definition>",
        },
    },
];
