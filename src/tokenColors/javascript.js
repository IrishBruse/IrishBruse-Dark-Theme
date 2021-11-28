export default [
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
            "meta.object-literal.key.js string.quoted.double.js",
        ],
        "settings": {
            "foreground": "<local>",
        },
    },
    {
        "scope": [
            "string.quoted.double.js",
            "string.quoted.single.js",
        ],
        "settings": {
            "foreground": "<string>",
        },
    },
    // Documentation
    {
        "scope": [
            "source.js comment.block.documentation",
        ],
        "settings": {
            "foreground": "<gray>",
        },
    },
    // Function Keyword
    {
        "scope": [
            "source.js storage.type.function",
        ],
        "settings": {
            "foreground": "<modifier>",
        },
    },
    // Keyword
    {
        "scope": [
            "source.js storage.type",
            "source.js keyword.operator.new",
            "source.js constant.language.boolean",
        ],
        "settings": {
            "foreground": "<keyword>",
        },
    },
    {
        "scope": [
            "source.js keyword.control",
        ],
        "settings": {
            "foreground": "<control>",
        },
    },
    // Operators
    {
        "scope": [
            "source.js keyword.operator",
            "source.js punctuation.accessor"
        ],
        "settings": {
            "foreground": "<operator>",
        },
    },
    // Method call
    {
        "scope": [
            "source.js entity.name.function",
        ],
        "settings": {
            "foreground": "<method>",
        },
    },
]
