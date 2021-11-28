export default [
    // Namespaces
    {
        "scope": [
            "entity.name.package",
        ],
        "settings": {
            "foreground": "<gray>",
        },
    },
    // Function Keyword
    {
        "scope": [
            "keyword.function.go",
        ],
        "settings": {
            "foreground": "<modifier>",
        },
    },
    // Func Calls
    {
        "scope": [
            "source.go support.function",
            "source.go entity.name.function",
        ],
        "settings": {
            "foreground": "<method>",
        },
    },
    // Keywords
    {
        "scope": [
            "constant.language.go",
            "source.go keyword",
            "source.go storage.type",
            "keyword.operator.address.go",
        ],
        "settings": {
            "foreground": "<keyword>",
        },
    },
    // Defs
    {
        "scope": [
            "source.go entity.name.type",
        ],
        "settings": {
            "foreground": "<definition>",
        },
    },
    // Locals
    {
        "scope": [
            "variable.other.assignment.go",
        ],
        "settings": {
            "foreground": "<local>",
        },
    },
    // Strings
    {
        "scope": [
            "source.go string.quoted.double",
            "source.go string.quoted.single",
        ],
        "settings": {
            "foreground": "<string>",
        },
    },
    // Escape
    {
        "scope": [
            "constant.character.escape.go",
            "constant.other.placeholder.go",
        ],
        "settings": {
            "foreground": "<escape>",
        },
    },
]
