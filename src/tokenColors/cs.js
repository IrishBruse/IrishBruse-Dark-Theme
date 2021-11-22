export default [
    // String interpolation
    {
        "scope": [
            "punctuation.definition.interpolation.begin.cs",
            "punctuation.definition.interpolation.end.cs",
            "punctuation.separator",
            "meta.preprocessor.cs",
        ],
        "settings": {
            "foreground": "#505050"
        },
    },
    {
        "scope": [
            "string.quoted.double.cs comment.block.documentation.cs",
        ],
        "settings": {
            "foreground": "#9cdcfe"
        },
    },
    // Namespaces
    {
        "scope": [
            "entity.name.type.namespace.cs",
        ],
        "settings": {
            "foreground": "#505050",
        },
    },
    // Strings
    // {
    //     "scope": [
    //         "string.quoted.double.cs",
    //         "string.quoted.single.cs",
    //     ],
    //     "settings": {
    //         "foreground": "#ce9178",
    //     },
    // },
]
