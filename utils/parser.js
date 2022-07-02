import * as https from "https";
import * as fs from "fs";

function get()
{
    return new Promise((resolve, reject) =>
    {
        https.get("https://code.visualstudio.com/api/references/theme-color", (response) =>
        {
            let chunks_of_data = [];

            response.on("data", (fragments) =>
            {
                chunks_of_data.push(fragments);
            });

            response.on("end", () =>
            {
                let response_body = Buffer.concat(chunks_of_data);
                resolve(response_body.toString());
            });

            response.on("error", (error) =>
            {
                reject(error);
            });
        });
    });
}

let data = await get()

let htmlText = data.toString();

let test = new RegExp("<li>.*?<code>(.*?)<\/code>", "sg");
let matches = [...htmlText.matchAll(test)]
let output = []
for (const iterator of matches)
{
    output.push(iterator[1]);
}

fs.writeFileSync("./utils/editor.json.txt", output.join("\n"));
