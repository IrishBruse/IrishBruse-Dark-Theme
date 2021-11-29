export default [
    // Namespaces
    {
        "scope": [
            "entity.name.function.preprocessor.cpp",
            "source.c keyword.control.directive",
        ],
        "settings": {
            "foreground": "<gray>",
        },
    },
    // Types
    {
        "scope": [
            "keyword.operator.sizeof.c",
            "source.c keyword.control.directive",
            "keyword.other.typedef.c",
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
    {
        "scope": [
            "keyword.other.unit.hexadecimal.c",
        ],
        "settings": {
            "foreground": "<number>",
        },
    },
]
