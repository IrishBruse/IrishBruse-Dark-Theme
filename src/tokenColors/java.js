export default [
    {
        "scope": [
            "punctuation.separator.java",
            "variable.language.wildcard.java",
            "keyword.other.documentation.javadoc.java",
            "punctuation.bracket.square.java",
            "punctuation.separator.period.java",
            "punctuation.separator.delimiter.java",
        ],
        "settings": {
            "foreground": "<gray>",
        },
    },
    {
        "scope": [
            "source.java storage.type.primitive",
            "source.java keyword.control",
            "meta.class.identifier.java",
            "source.java variable.language",
        ],
        "settings": {
            "foreground": "<keyword>",
        },
    },
    {
        "scope": [
            "meta.definition.variable.java",
            "source.java entity.name.type",
        ],
        "settings": {
            "foreground": "<definition>",
        },
    },
    {
        "scope": [
            "variable.other.definition.java",
            "meta.declaration.annotation.java",
            "storage.type.annotation.java",
        ],
        "settings": {
            "foreground": "<local>",
        },
    },
    {
        "scope": [
            "storage.modifier.extends",
            "storage.modifier.implements",
        ],
        "settings": {
            "foreground": "<modifier>",
        },
    },
    {
        "scope": [
            "constant.numeric.decimal.java",
        ],
        "settings": {
            "foreground": "<number>",
        },
    },
]
