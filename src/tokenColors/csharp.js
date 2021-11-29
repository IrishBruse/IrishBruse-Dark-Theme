export default [
    // String interpolation
    {
        "scope": [
            "punctuation.definition.interpolation.begin.cs",
            "punctuation.definition.interpolation.end.cs",
            "punctuation.terminator.statement.cs",
        ],
        "settings": {
            "foreground": "<gray>"
        },
    },
    // Keywords
    {
        "scope": [
            "keyword.type.cs",
            "source.cs keyword.other",
            "source.cs constant",
        ],
        "settings": {
            "foreground": "<keyword>",
        },
    },
    // New
    {
        "scope": [
            "entity.name.function.cs",
        ],
        "settings": {
            "foreground": "<method>",
        },
    },
]
