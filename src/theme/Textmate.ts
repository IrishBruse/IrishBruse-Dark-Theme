import { ThemeType } from "../Compile";

const textmate: Record<string, ThemeType> = {
    "comment": "Comment",
    "constant.character.escape": "Escape",
    "constant.character": "Escape",
    "constant.language": "Keyword",
    "constant.other.enum": "Enum",
    "constant": "Number",
    "entity.name.function": "Method",
    "entity.name.section": "Object",
    "entity.name.tag": "Keyword",
    "entity.name.type.namespace": "Meta",
    "entity.name.type": "Object",
    "entity.other.attribute-name": "Local",
    "entity.other.inherited-class": "Object",
    "invalid": "Error",
    "keyword.control": "Control",
    "keyword.operator.arithmetic": "bold",
    "keyword.operator.new": "Keyword",
    "keyword.operator": "Operator",
    "keyword.other.unit": "Number",
    "keyword.other": "Keyword",
    "keyword.preprocessor": "Meta",
    "keyword.type": "Control",
    "keyword": "Keyword",
    "meta.function-call.generic": "Method",
    "meta.interpolation": "Text",
    "meta.preprocessor.macro": "Meta",
    "operator": "Operator",
    "punctuation.definition.interpolation": "Meta",
    "punctuation.definition.tag": "Meta",
    "punctuation.metadata": "Keyword",
    "punctuation.parenthesis": "Text",
    "punctuation.separator": "Meta",
    "punctuation.terminator": "Meta",
    "storage.type.other": "Object",
    "storage": "Keyword",
    "string.quoted.single": "Escape",
    "string": "String",
    "storage.type.primitive": "Control",
    "support.class": "Object",
    "support.function": "Method",
    "support.type": "Object",
    "variable.language": "Keyword",
    "variable.metadata": "Keyword",
    "variable.parameter": "Local",
    "meta.enum entity.name.type": "Enum"
}

const json: Record<string, ThemeType> = {
    "source.json support.type.property-name": "Local"
}

const js_ts: Record<string, ThemeType> = {
    "meta.object-literal.key.ts": "Local",
    "meta.object-literal.key.js": "Local",
    "variable.other.readwrite.alias.js": "Object",
    "variable.other.readwrite.alias.ts": "Object",
    "source.ts keyword.operator.expression": "Keyword",
    "source.js keyword.operator.expression": "Keyword",
    "support.type.primitive.ts": "Keyword",
    "support.type.primitive.js": "Keyword",
}

const markdown: Record<string, ThemeType> = {
    "text.html.markdown markup.underline.link": "Accent",
    "text.html.markdown heading": "Control",
    "text.html.markdown entity.name.section.markdown": "Text",
    "text.html.markdown string.other.link.title": "Local",
    "text.html.markdown markup.inline": "Text",
    "text.html.markdown meta.separator": "Control",
    "text.html.markdown punctuation.definition.quote": "Accent",
    "text.html.markdown meta.tag": "Operator",
    "text.html.markdown markup.heading.setext": "Control",
    "text.html.markdown fenced_code.block.language": "Object",
    "string.other.link.description.markdown": "Local",
    "constant.other.reference.link.markdown": "Local",
    "text.html.markdown markup.italic": "italic",
    "text.html.markdown markup.bold": "bold",
    "text.html.markdown markup.bold markup.italic": "bold italic",
    "markup.bold.markdown": "bold"
}

const ini: Record<string, ThemeType> = {
    "source.ini keyword.other.definition": "Local",
    "source.ini entity.name.section.group-title": "Object",
    "source.ini punctuation.definition.entity": "Text"
}

const css: Record<string, ThemeType> = {
    "source.css entity.other.attribute-name.class": "Control",
    "source.css entity.other.attribute-name.id": "Object",
    "source.css support.constant.property-value": "Keyword",
    "source.css support.constant.color": "Keyword",
    "source.css support.constant.font-name": "Keyword"
}

const go: Record<string, ThemeType> = {
}


const java: Record<string, ThemeType> = {
    "source.java keyword.control.new": "Keyword",
    "source.java punctuation.definition.annotation": "Object",
    "keyword.control.ternary": "Operator"
}


const powershell: Record<string, ThemeType> = {
}

const csharp: Record<string, ThemeType> = {
    "keyword.type.void.cs": "Control",
}

const py: Record<string, ThemeType> = {
    "storage.type.number.python": "Number",
    "storage.type.format.python": "Escape",
    "string.quoted.single.python": "String",
    "string.quoted.double.python": "String",
}

const regex: Record<string, ThemeType> = {
}

const rust: Record<string, ThemeType> = {
    "source.rust meta.attribute": "Object",
    "source.rust meta.attribute punctuation": "Text",
    "source.rust punctuation.semi": "Meta"
}

const yaml: Record<string, ThemeType> = {
    "source.yaml entity.name.tag": "Local",
    "source.yaml string.unquoted": "String"
}

export default {
    ...textmate,
    ...json,
    ...js_ts,
    ...markdown,
    ...css,
    ...ini,
    ...go,
    ...java,
    ...powershell,
    ...csharp,
    ...py,
    ...regex,
    ...rust,
    ...yaml,
};
