export default [
    // Style the styles
    {
        "scope": [
            "markup.underline.markdown",
            "markup.underline"
        ],
        "settings": {
            "fontStyle": "underline"
        }
    },
    {
        "scope": [
            "markup.quote.markdown",
            "markup.quote",
        ],
        "settings": {
            "fontStyle": "italic"
        },
    },
    {
        "scope": [
            "markup.bold.markdown",
            "markup.bold",
            "strong",
        ],
        "settings": {
            "fontStyle": "bold"
        },
    },
    {
        "scope": [
            "markup.italic.markdown",
            "markup.italic",
            "emphasis",
        ],
        "settings": {
            "fontStyle": "italic"
        },
    },
    // Lists and bullets
    {
        "scope": [
            "punctuation.definition.list.begin",
        ],
        "settings": {
            "foreground": "#569cd6",
        },
    },
    // Headings
    {
        "scope": [
            "meta.separator.markdown",
            "entity.name.section.markdown",
            "punctuation.definition.heading.markdown",
        ],
        "settings": {
            "foreground": "#569cd6"
        },
    },
    {
        "scope": [
            "punctuation.definition.heading.markdown",
        ],
        "settings": {
            "foreground": "#8a76cc"
        },
    },
    // Code block language type
    {
        "scope": "fenced_code.block.language",
        "settings": {
            "foreground": "#4ec9b0"
        },
    },
    // Brackets & Seperator
    {
        "scope": [
            "punctuation.definition.markdown",
            "meta.separator.markdown",
            "punctuation.definition.string.begin.markdown",
            "punctuation.definition.string.end.markdown",
            "punctuation.definition.metadata.markdown",
        ],
        "settings": {
            "foreground": "#505050"
        },
    },
    {
        "scope": [
            "markup.underline.link.image.markdown",
            "markup.underline.link.markdown",
        ],
        "settings": {
            "foreground": "#569cd6"
        },
    },
    // String
    {
        "scope": [
            "punctuation.definition.string.begin.markdown string.other.link.description.title.markdown",
            "punctuation.definition.string.end.markdown string.other.link.description.title.markdown",
            "string.other.link.description.title.markdown",
        ],
        "settings": {
            "foreground": "#ce9178",
        },
    },
]
