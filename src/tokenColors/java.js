export default [
    {
        "scope": [
            "punctuation.separator.java",
            "variable.language.wildcard.java",
            "keyword.other.documentation.javadoc.java",
            "punctuation.terminator.java",
        ],
        "settings": {
            "foreground": "<gray>",
        },
    },
    {
        "scope": [
            "source.java storage.type.primitive",
            "meta.class.identifier.java",
            "source.java variable.language",
            "source.java keyword.other",
            "source.java constant.language",
        ],
        "settings": {
            "foreground": "<keyword>",
        },
    },
    {
        "scope": [
            "meta.definition.variable.java",
            "storage.type.annotation.java",
            "punctuation.definition.annotation.java",
        ],
        "settings": {
            "foreground": "<definition>",
        },
    },
    {
        "scope": [
            "variable.other.definition.java",
            "meta.declaration.annotation.java",
        ],
        "settings": {
            "foreground": "<local>",
        },
    },
    {
        "scope": [
            "source.java keyword.operator",
        ],
        "settings": {
            "foreground": "<operator>",
        },
    },
    {
        "scope": [
            "source.java entity.name.function",
        ],
        "settings": {
            "foreground": "<method>",
        },
    },
]
