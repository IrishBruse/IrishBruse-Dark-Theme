export default [
    {
        "scope": [
            "constant.numeric.css",
            "entity.other.keyframe-offset.percentage.css",
        ],
        "settings": {
            "foreground": "<number>",
        },
    },
    {
        "scope": [
            "entity.name.tag.css",
            "entity.other.attribute-name.class.css",
        ],
        "settings": {
            "foreground": "<keyword>"
        },
    },
    {
        "scope": [
            "punctuation.section.keyframes.begin.bracket.curly.css",
            "punctuation.section.keyframes.end.bracket.curly.css",
            "punctuation.section.property-list.begin.bracket.curly.css",
            "punctuation.section.property-list.end.bracket.curly.css",
            "punctuation.section.function.begin.bracket.round.css",
            "punctuation.section.function.end.bracket.round.css",
            "meta.selector.css",
            "comment.block.css",
        ],
        "settings": {
            "foreground": "<darkgray>",
        },
    },
    // Strings
    {
        "scope": [
            "string.quoted.double.css",
            "string.quoted.single.css",
            "constant.other.color.rgb-value.hex.css",
            "string.template.css",
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
        ],
        "settings": {
            "foreground": "<darkgray>",
        },
    },
    // Important keyword
    {
        "scope": [
            "keyword.other.important.css",
        ],
        "settings": {
            "foreground": "<accessor>",
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
