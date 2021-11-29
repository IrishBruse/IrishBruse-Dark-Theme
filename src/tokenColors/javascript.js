export default [
    // String interpolation
    {
        "scope": [
            "meta.template.expression.js",
        ],
        "settings": {
            "foreground": "<text>",
        },
    },
    // Documentation
    {
        "scope": [
            "punctuation.definition.template-expression.begin.js",
            "punctuation.definition.template-expression.end.js",
            "source.js comment.block.documentation",
            "storage.type.class.jsdoc",
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
