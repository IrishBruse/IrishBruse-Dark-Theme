export default [
    // Namespaces
    {
        "scope": [
            "entity.name.function.preprocessor.cpp",
            "source.cpp keyword.control.directive",
            "source.c keyword.control.directive",
            "string.quoted.other.lt-gt.include.c",
            "string.quoted.double.include.c",
            "storage.modifier.array.bracket"
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
]
