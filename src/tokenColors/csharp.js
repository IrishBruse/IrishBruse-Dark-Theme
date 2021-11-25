export default [
    // String interpolation
    {
        "scope": [
            "punctuation.definition.interpolation.begin.cs",
            "punctuation.definition.interpolation.end.cs",
            "meta.preprocessor.cs",
            "meta.tag.cs punctuation.definition.string.begin.cs",
            "meta.tag.cs punctuation.definition.string.end.cs",
            "meta.interpolation.cs punctuation.parenthesis.open.cs",
            "meta.interpolation.cs punctuation.parenthesis.close.cs",
        ],
        "settings": {
            "foreground": "<gray>"
        },
    },
    {
        "scope": [
            "string.quoted.double.cs comment.block.documentation.cs",
            "source.cs entity.name.variable.local.cs",
        ],
        "settings": {
            "foreground": "<local>"
        },
    },
    // String interopoltion variables
    {
        "scope": [
            "invalid.illegal.constant.numeric.cs",
        ],
        "settings": {
            "foreground": "<number>"
        },
    },
    // String interopoltion variables
    {
        "scope": [
            "meta.interpolation.cs",
            "meta.tag.cs string.quoted.double.cs",
        ],
        "settings": {
            "foreground": "<local>"
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
]
