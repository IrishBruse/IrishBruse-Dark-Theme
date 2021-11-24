import fs from "fs";

const dirs = ["./src/tokenColors/", "./src/semanticTokenColors/"];
const outputFiles = ["./tokenColors.js", "./semanticTokenColors.js"];

for (let i = 0; i < dirs.length; i++) {
    let moduleNames = [];
    let modulePaths = [];

    var files = fs.readdirSync(dirs[i]);

    files.forEach(file => {
        let name = file.replace(".js", "");
        let path = dirs[i] + name;

        //Duplicate javascript for typescript
        if (name === "javascript") {
            var tsPath = path.replace("javascript", "typescript");
            var data = fs.readFileSync(path + ".js", "utf-8");

            data = data.replaceAll(".js", ".ts");

            fs.writeFileSync(tsPath + ".js", "// Auto generated from javascript.js changes will be lost\n\n" + data)

            if (files.includes(name + ".js") == false) {
                moduleNames.push("typescript");
                modulePaths.push(tsPath);
            }
        }

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
