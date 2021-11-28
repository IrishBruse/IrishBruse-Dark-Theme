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
    // Defs
    {
        "scope": [
            "storage.type.cs",
            "source.cs entity.name.type",
        ],
        "settings": {
            "foreground": "<definition>",
        },
    },
    // Keywords
    {
        "scope": [
            "keyword.type.cs",
            "source.cs keyword.other",
            "source.cs constant.language",
        ],
        "settings": {
            "foreground": "<keyword>",
        },
    },
    // Accessors
    {
        "scope": [
            "storage.modifier.cs",
        ],
        "settings": {
            "foreground": "<modifier>",
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
