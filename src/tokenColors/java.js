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
            "keyword.control.new.java",
            "meta.class.identifier.java",
            "variable.language.this.java",
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
            "source.java storage.modifier",
        ],
        "settings": {
            "foreground": "<keyword>",
        },
    },
]
