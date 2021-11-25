export default [
    // Namespace
    {
        "scope": [
            "meta.import.js string.quoted.double.js",
            "meta.import.js string.quoted.single.js",
        ],
        "settings": {
            "foreground": "<gray>",
        },
    },
    // String interpolation
    {
        "scope": [
            "string.template.js",
        ],
        "settings": {
            "foreground": "<string>"
        },
    },
    {
        "scope": [
            "meta.template.expression.js",
        ],
        "settings": {
            "foreground": "<gray>",
        },
    },
    {
        "scope": [
            "meta.embedded.line.js",
        ],
        "settings": {
            "foreground": "<local>",
        },
    },
    // Documentation
    {
        "scope": [
            "comment.block.documentation.js",
        ],
        "settings": {
            "foreground": "<gray>",
        },
    },
    // Function Keyword
    {
        "scope": [
            "storage.type.function.js",
        ],
        "settings": {
            "foreground": "<accessor>",
        },
    },
    // Keyword
    {
        "scope": [
            "source.js storage.type",
            "keyword.operator.new.js",
        ],
        "settings": {
            "foreground": "<keyword>",
        },
    },
]
