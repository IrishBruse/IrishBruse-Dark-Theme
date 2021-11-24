export default [
    // Namespaces
    {
        "scope": [
            "storage.modifier.import.java",
        ],
        "settings": {
            "foreground": "<darkgray>",
        },
    },
    // String interopoltion variables
    {
        "scope": [
            "keyword.other.documentation.javadoc.java",
        ],
        "settings": {
            "foreground": "<local>"
        },
    },
    // Definition
    {
        "scope": [
            "storage.type.java",
            "storage.type.object.array.java",
            "entity.name.type.enum.java",
        ],
        "settings": {
            "foreground": "<definition>",
        },
    },
    // String interpolation
    {
        "scope": [
            "punctuation.definition.string.begin.java",
            "punctuation.definition.string.end.java",
            "punctuation.definition.interpolation.begin.java",
            "punctuation.definition.interpolation.end.java",
            "string.quoted.double.java",
        ],
        "settings": {
            "foreground": "<string>"
        },
    },
    {
        "scope": [
            "string.quoted.double.java comment.block.documentation.java",
            "variable.other.definition.java",
        ],
        "settings": {
            "foreground": "<local>"
        },
    },
    // Keywords
    {
        "scope": [
            "storage.type.primitive.java",
            "keyword.control.new.java",
            "variable.language.java",
            "storage.type.primitive.array.java",
            "storage.type.annotation.java", "punctuation.definition.annotation.java",
        ],
        "settings": {
            "foreground": "<keyword>",
        },
    },
    // Ternery
    {
        "scope": [
            "keyword.control.ternary.java",
            "comment.block.javadoc.java",
            "comment.block.java",
        ],
        "settings": {
            "foreground": "<gray>",
        },
    },
]
