import { SemanticTokens } from "../types/SemanticTokenColors";

const general: SemanticTokens = {
    "type": "Object",
    "class": "Object",
    "namespace": "Namespace",
    "function": "Method",
    "method": "Method",
    "variable": "Text",
    "number": "Number",
    "comment": "Comment",
    "variable.defaultLibrary": "Local",
    "variable.static.readonly": "Enum",
    "macro": "Meta",
    "operator": "Operator",
    "type.modification": "Keyword",
    "type.defaultLibrary": "Keyword",
    "punctuation": "TextDarker",
    "builtin": "Method",
    "controlKeyword": "Control",
    "enum": "Enum",
    "escape": "Escape",
    "excludedCode": "Meta",
    "extensionMethod": "Method",
    "interface": "Interface",
    "member": "Method",
    "property.declaration.static": "Method",
    "operatorOverloaded": {
        "foreground": "Operator",
        "underline": true
    },
    "parameter": "Local",
    "plainKeyword": "Keyword",
    "plainKeyword.accessor": "Control",
    "preprocessorKeyword": "Meta",
    "variable.definition.readonly": "Constant",
    "variable.readonly": "Constant",
    "struct": "Struct",
    "typeParameter": "Object"
}

const csharp: SemanticTokens = {
    "xmlDocCommentAttributeQuotes:csharp": "Comment",
    "xmlDocCommentAttributeName:csharp": "Comment",
    "xmlDocCommentDelimiter:csharp": "Comment",
    "xmlDocCommentName:csharp": "Comment",
    "xmlDocCommentText:csharp": "Comment",
}

const javascript: SemanticTokens = {
    "variable.defaultLibrary:javascript": "Object",
    "variable.defaultLibrary:typescript": "Object",
    "namespace:javascript": "Object",
    "namespace:typescript": "Object"
}

const python: SemanticTokens = {
    "module:python": "Object",
    "function.builtin:python": "Control",
    "class.builtin:python": "Control"
}

const go: SemanticTokens = {
    "namespace:go": "Object"
}

export default { ...general, ...csharp, ...javascript, ...python, ...go };
