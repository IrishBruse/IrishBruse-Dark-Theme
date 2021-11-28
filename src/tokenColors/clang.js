export default [
    // Namespaces
    {
        "scope": [
            "entity.name.function.preprocessor.cpp",
            "source.cpp keyword.control.directive",
            "string.quoted.other.lt-gt.include.c",
            "string.quoted.double.include.c",
        ],
        "settings": {
            "foreground": "<gray>",
        },
    },
    // Types
    {
        "scope": [
            "source.c storage.type",
        ],
        "settings": {
            "foreground": "<keyword>",
        },
    },
    // Float
    {
        "scope": [
            "keyword.other.unit.suffix.floating-point.c",
        ],
        "settings": {
            "foreground": "<number>",
        },
    },
    // Keywords
    {
        "scope": [
            "keyword.operator.sizeof.c",
            "source.c keyword.control.directive",
        ],
        "settings": {
            "foreground": "<keyword>",
        },
    },
    // Array
    {
        "scope": [
            "storage.modifier.array.bracket",
        ],
        "settings": {
            "foreground": "<text>",
        },
    },
]
