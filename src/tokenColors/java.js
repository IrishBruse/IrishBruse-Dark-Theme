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
            "source.java keyword.control",
            "meta.class.identifier.java",
            "source.java variable.language",
            "source.java keyword.other",
            "source.java storage.modifier",
            "source.java constant.language",
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
    // Strings
    {
        "scope": [
            "string.quoted.double.java",
            "string.quoted.single.java",
        ],
        "settings": {
            "foreground": "<string>",
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
            "source.java constant.numeric",
        ],
        "settings": {
            "foreground": "<number>",
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
