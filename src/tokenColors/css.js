export default [
    {
        "scope": [
            "entity.other.keyframe-offset.percentage.css",
            "source.css keyword.other.unit",
        ],
        "settings": {
            "foreground": "<number>",
        },
    },
    {
        "scope": [
            "entity.name.tag.css",
            "entity.other.attribute-name.class.css",
            "entity.name.tag.wildcard.css",
            "entity.other.attribute-name.css",
        ],
        "settings": {
            "foreground": "<keyword>"
        },
    },
    // Strings
    {
        "scope": [
            "support.constant.property-value.css",
            "source.css support.constant.color",
            "constant.other.color.rgb-value.hex.css",
        ],
        "settings": {
            "foreground": "<string>",
        },
    },
    // Variable value
    {
        "scope": [
            "variable.css",
            "support.type.property-name.css",
            "support.type.vendored.property-name.css",
        ],
        "settings": {
            "foreground": "<local>",
        },
    },
    // keyframe definition
    {
        "scope": [
            "variable.parameter.keyframe-list.css",
            "support.function.misc.css",
        ],
        "settings": {
            "foreground": "<method>",
        },
    },
    // Scss
    {
        "scope": [
            "punctuation.section.property-list.end.bracket.curly.scss",
            "keyword.operator.combinator.css",
        ],
        "settings": {
            "foreground": "<operator>",
        },
    },
    // Important keyword
    {
        "scope": [
            "keyword.other.important.css",
        ],
        "settings": {
            "foreground": "<modifier>",
        },
    },
    {
        "scope": [
            "entity.other.attribute-name.pseudo-class.css",
            "entity.other.attribute-name.pseudo-element.css",
        ],
        "settings": {
            "foreground": "<definition>",
        },
    },
];
