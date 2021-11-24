export default [
    {
        "scope": [
            "meta.preprocessor.include.c",
            "meta.preprocessor.include.c string.quoted.other.lt-gt.include.c",
            "meta.preprocessor.include.c string.quoted.other.lt-gt.include.c",
            "storage.modifier.array.bracket.square.c"
        ],
        "settings": {
            "foreground": "<darkgray>",
        },
    },
    {
        "scope": [
            "invalid.illegal.placeholder.c",
        ],
        "settings": {
            "foreground": "<text>",
        },
    },
    {
        "scope": [
            "keyword.control.directive.include.c",
        ],
        "settings": {
            "foreground": "<keyword>",
        },
    },
    {
        "scope": [
            "keyword.operator.c",
            "storage.type.built-in.primitive.c",
            "storage.type.struct.c",
        ],
        "settings": {
            "foreground": "<keyword>",
        },
    },
    {
        "scope": [
            "variable.parameter.probably.c",
            "variable.other.member.c"
        ],
        "settings": {
            "foreground": "<local>",
        },
    },
    // Strings
    {
        "scope": [
            "string.quoted.double.c",
            "string.quoted.single.c",
            "string.template.c",
        ],
        "settings": {
            "foreground": "<string>",
        },
    },
]
