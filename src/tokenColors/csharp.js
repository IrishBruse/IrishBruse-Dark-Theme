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
            "foreground": "<darkgray>"
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
    // Namespaces
    {
        "scope": [
            "entity.name.type.namespace.cs",
            "punctuation.squarebracket.open.cs",
            "punctuation.squarebracket.close.cs",
            "entity.name.tag.localname.cs",
            "entity.other.attribute-name.localname.cs"
        ],
        "settings": {
            "foreground": "<darkgray>",
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
    // String interopoltion variables
    {
        "scope": [
            "invalid.illegal.constant.numeric.cs",
        ],
        "settings": {
            "foreground": "<number>"
        },
    },
    // Strings
    {
        "scope": [
            "string.quoted.double.cs",
            "string.quoted.single.cs",
            "string.template.cs",
        ],
        "settings": {
            "foreground": "<string>",
        },
    },
    {
        "scope": [
            "storage.type.cs",
        ],
        "settings": {
            "foreground": "<definition>",
        },
    },
]
