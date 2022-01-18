import fs from "fs";

const dirs = ["./src/tokenColors/", "./src/semanticTokenColors/"];
const outputFiles = ["./tokenColors.js", "./semanticTokenColors.js"];

// Remeber to add to ignore for the watch or else it will cause infinite loop
const duplicateLangs = [
    {
        from: {
            name: "javascript",
            textmate: ".js"
        },
        to: {
            name: "typescript",
            textmate: ".ts"
        }
    },
    {
        from: {
            name: "html",
            textmate: "text.html"
        },
        to: {
            name: "xml",
            textmate: "text.xml"
        }
    },
    {
        from: {
            name: "html",
            textmate: "text.html"
        },
        to: {
            name: "vue",
            textmate: "source.vue"
        }
    },
    {
        from: {
            name: "html",
            textmate: "text.html"
        },
        to: {
            name: "derivative",
            textmate: "text.html.derivative"
        }
    }
];

for (let i = 0; i < dirs.length; i++) {
    let moduleNames = [];
    let modulePaths = [];

    var files = fs.readdirSync(dirs[i]);

    files.forEach(file => {
        let name = file.replace(".js", "");
        let path = dirs[i] + name;

        duplicateLangs.forEach(lang => {
            //Duplicate javascript for typescript
            if (name === lang.from.name && path.includes("semanticTokenColors") == false) {
                var tsPath = path.replace(lang.from.name, "gen_" + lang.to.name);
                var data = fs.readFileSync(path + ".js", "utf-8");

                data = data.replaceAll(lang.from.textmate, lang.to.textmate);

                fs.writeFileSync(tsPath + ".js", "// Auto generated from " + lang.from.name + ".js" + " changes will be lost\n\n" + data)

                if (files.includes(name + ".js") == false) {
                    moduleNames.push("gen_" + lang.to.name);
                    modulePaths.push(tsPath);
                }
            }
        });

        moduleNames.push(name);
        modulePaths.push(path);
    });

    var text = "";
    for (let i = 0; i < moduleNames.length; i++) {
        text += "import " + moduleNames[i] + " from " + "\"" + modulePaths[i] + ".js\";\n";
    }
    text += "\n\n";

    text += "export default [";
    for (let i = 0; i < moduleNames.length; i++) {
        text += "\n\t" + moduleNames[i] + ",";
    }
    text += "\n]";

    fs.writeFileSync(outputFiles[i], text);

}
