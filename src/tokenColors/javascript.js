export default [
    // String interpolation
    {
        "scope": [
            "storage.type.js",
            "storage.type.class.js",
            "keyword.control.import.js",
            "keyword.operator.new.js",
            "variable.language.this",
            "keyword.control.from.js",
            "support.type.primitive.js"
        ],
        "settings": {
            "foreground": "<keyword>"
        },
    },
    {
        "scope": [
            "storage.type.function.js",
            "support.type.object.module.js",
        ],
        "settings": {
            "foreground": "<accessor>",
        },
    },
    {
        "scope": [
            "storage.type.function.arrow.js",
            "meta.brace.square.js",
            "punctuation.definition.block.js",
            "meta.import.js string.quoted.single.js",
            "meta.import.js string.quoted.double.js",
            "meta.brace.angle.js",
            "punctuation.separator.comma.js",
        ],
        "settings": {
            "foreground": "<darkgray>",
        },
    },
    {
        "scope": [
            "meta.definition.variable.js",
            "meta.object-literal.key.js string.quoted.double.js",
        ],
        "settings": {
            "foreground": "<local>",
        },
    },
    {
        "scope": [
            "entity.other.inherited-class.js",
            "entity.name.type.js",
        ],
        "settings": {
            "foreground": "<definition>",
        },
    },
    // Strings
    {
        "scope": [
            "meta.array.literal.js string.quoted.double.js",
            "meta.array.literal.js string.quoted.single.js",
            "meta.block.js string.quoted.double.js",
            "meta.block.js string.quoted.single.js",
        ],
        "settings": {
            "foreground": "<string>",
        },
    },
]
