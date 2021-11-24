export default [
    // This covers all tags in html and javascript
    // Attributes
    {
        "scope": [
            "entity.other.attribute-name",
        ],
        "settings": {
            "foreground": "<local>"
        },
    },
    // < > />
    {
        "scope": [
            "punctuation.definition.tag.begin",
            "punctuation.definition.tag.end",
        ],
        "settings": {
            "foreground": "<darkgray>"
        },
    },
    // Tags
    {
        "scope": [
            "entity.name.tag",
        ],
        "settings": {
            "foreground": "<keyword>"
        },
    },
    // Attributes
    {
        "scope": [
            "invalid.deprecated.entity.other.attribute-name",
        ],
        "settings": {
            "foreground": "<local>",
            "fontStyle": "italic",
        },
    },
]
