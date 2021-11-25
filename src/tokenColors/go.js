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
            "foreground": "<accessor>",
        },
    },
    // Func Calls
    {
        "scope": [
            "source.go support.function",
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
]
