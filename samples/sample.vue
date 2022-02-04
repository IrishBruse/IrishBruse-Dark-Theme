<template>
    <div ref="display" class="fullscreen" />
    <div class="pageBackground" />
    <h1 class="text-center">Email</h1>
    <form class="text-center" @reset="onReset" @submit.prevent="send">
        <input v-model="email" class="round shadow" placeholder="Email" type="email" />
        <br />
        <input v-model="subject" class="round shadow" placeholder="Subject" type="text" />
        <br />
        <textarea v-model="message" class="round shadow" cols="36" placeholder="Body" rows="6" />
        <br />
        <input class="round shadow" type="submit" value="Open Email Client" @click="send" />
    </form>
    <test-templ></test-templ>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import timetable from "./timetable.html";

const route = useRoute();
const display = ref();
const groups = ["A", "B", "C", "D"];

onMounted(() => {
    var doc = new DOMParser().parseFromString(timetable, "text/html");

    var rowContains = doc.body.children[0].children[0];

    var rows = rowContains.children;
    for (let i = 0; i < rows.length; i++) {
        for (let index = 0; index < rows[i].children.length; index++) {
            var cell = rows[i].children[index];

            // if (i == 0) {
            //     if (index % 2 == 1) {
            //         var div = document.createElement("DIV");
            //         div.classList.add("sideline");
            //         cell.appendChild(div);
            //     }
            // }

            var nodes = cell.querySelectorAll("table");

            if (nodes.length > 0) {
                // Process timeslots
                var rawClassroomName = nodes[0].querySelector("td").innerText;
                var processedClassroomName = ProcessClassroomName(rawClassroomName);
                var rawModuleName = nodes[1].querySelector("td").innerText;
                var processedModule = ProcessModuleName(rawModuleName);
                // var array = nodes[2].querySelectorAll("td"); // Not needed

                cell.innerHTML = "";

                if (
                    processedModule.group != route.params.class.toUpperCase() &&
                    processedModule.group != "" &&
                    groups.includes(route.params.class.toUpperCase())
                ) {
                    continue;
                }

                var timeslotDiv = document.createElement("DIV");
                timeslotDiv.classList.add("cell");
                timeslotDiv.classList.add(processedModule.color);

                var topDiv = document.createElement("DIV");
                topDiv.classList.add("topTimeslot");
                topDiv.innerText = processedClassroomName + "\xa0";
                timeslotDiv.appendChild(topDiv);

                var middleDiv = document.createElement("DIV");
                middleDiv.classList.add("middleTimeslot");
                middleDiv.innerText = processedModule.name + "\xa0";
                timeslotDiv.appendChild(middleDiv);

                var bottomDiv = document.createElement("DIV");
                bottomDiv.classList.add("bottomTimeslot");

                var groupDiv = document.createElement("DIV");
                if (processedModule.group != "") {
                    groupDiv.innerText = processedModule.group;
                }

                var classTypeDiv = document.createElement("DIV");
                classTypeDiv.innerText = processedModule.type;

                bottomDiv.appendChild(groupDiv);
                bottomDiv.appendChild(classTypeDiv);

                timeslotDiv.appendChild(bottomDiv);

                cell.appendChild(timeslotDiv);
            }
        }

        if (i == 0 || i == 1 || i == 2 || i == 3 || i == 4 || i == 7) {
            rows[i].removeChild(rows[i].children[0]);
        }

        // Handle rowspaning and delete 9:00 and 9:30 column
        rows[i].removeChild(rows[i].children[0]);
        rows[i].removeChild(rows[i].children[0]);
    }

    var title = document.createElement("tr");
    title.innerHTML = "<td class='lightgray' colspan='18'>Monday</td>";
    rowContains.insertBefore(title, rowContains.children[1]);

    title = document.createElement("tr");
    title.innerHTML = "<td class='lightgray' colspan='18'>Tuesday</td>";
    rowContains.insertBefore(title, rowContains.children[3]);

    title = document.createElement("tr");
    title.innerHTML = "<td class='lightgray' colspan='18'>Wednesday</td>";
    rowContains.insertBefore(title, rowContains.children[5]);

    title = document.createElement("tr");
    title.innerHTML = "<td class='lightgray' colspan='18'>Thursday</td>";
    rowContains.insertBefore(title, rowContains.children[7]);

    title = document.createElement("tr");
    title.innerHTML = "<td class='lightgray' colspan='18'>Friday</td>";
    rowContains.insertBefore(title, rowContains.children[11]);

    title = document.createElement("tr");
    title.innerHTML = "<td class='lightgray' colspan='18'>Weekend (yay)</td>";
    rowContains.insertBefore(title, rowContains.children[16]);

    var headerRow = document.createElement("tr");
    for (let i = 0; i < 9; i++) {
        var time = document.createElement("td");
        time.setAttribute("colspan", "2");
        time.innerText = i + 9 + ":00";
        headerRow.appendChild(time);
    }
    rowContains.children[0].replaceWith(headerRow);

    display.value.appendChild(doc.body.children[0]);
});

function ProcessClassroomName(name) {
    return name.replace("(BOYD)", "");
}

function ProcessModuleName(name) {
    var processedName = name.replace("(ONLINE)", "").trim();
    var tokens = processedName.split(" ");
    processedName = tokens.slice(1, tokens.length).join(" ");

    // var moduleName = ; // Used for debug
    var moduleName = processedName;
    var color = "gray";
    var type = "All";
    var group = "";

    // Lecture/Practical/Tutorial
    if (processedName.endsWith("T/P")) {
        type = "Tut/Prac";
        processedName = processedName.slice(0, processedName.length - 2);
    } else if (processedName.endsWith("/P")) {
        type = "Practical";
    } else if (processedName.endsWith("/L")) {
        type = "Lecture";
    } else if (processedName.endsWith("/T")) {
        type = "Tutorial";
    }
    processedName = processedName.slice(0, processedName.length - 2);

    // Module Name
    if (processedName.includes("PROCEDURAL PROGRAMMING")) {
        moduleName = "C Programming";
        color = "orange";
    } else if (processedName.includes("SOFTWARE DESIGN AND PROGRAM DEVELOPMENT")) {
        moduleName = "Java Programming";
        color = "red";
    } else if (processedName.includes("APPLIED NETWORKING TECHNOLOGY")) {
        moduleName = "Network Tech";
        color = "blue";
    } else if (processedName.includes("IT PROFESSIONAL SKILL")) {
        moduleName = "IT Skills";
        color = "pink";
    } else if (processedName.includes("SYSTEMS ANALYSIS METHODS")) {
        moduleName = "Systems Analysis";
        color = "yellow";
    } else if (processedName.includes("INTERNET AND MOBILE APPLICATION DEVELOPMENT")) {
        moduleName = "C# Programming (Mobile)";
        color = "green";
    }

    // remove color for printer
    if (color != "" && route.fullPath.toLowerCase().endsWith("print")) {
        color = "print";
    }

    // Groups
    if (groups.includes(processedName.charAt(processedName.length - 1))) {
        group = processedName.charAt(processedName.length - 1);
    }

    return { name: moduleName, color: color, type: type, group: group };
}
</script>

<style>
.fullscreen {
    text-align: center;
    padding: 0;
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100vw;
    color: black;
    font-weight: bold;
    min-height: 100vh;
    background-color: white;
}

.fullscreen > table {
    table-layout: fixed;
    empty-cells: hide;
    width: 100vw;
}

.fullscreen > table tr {
    height: 1px; /* ignore but needed for cells to fill height */
}

.fullscreen > table tr > td {
    height: inherit; /* ignore but needed for cells to fill height */
}

.sideline {
    background-color: lightgray;
    z-index: -1;
    top: 0;
    position: absolute;
    width: 2px;
    height: 100vh;
}

.cell {
    border-radius: 1rem;
    min-height: 100%;
}

.topTimeslot {
    text-align: left;
    padding: 0 0.65rem;
}

.middleTimeslot {
    padding: 0.5rem 0;
    font-size: 1rem;
    text-overflow: ellipsis;
    overflow: hidden;
}

.bottomTimeslot {
    display: flex;
    position: relative;
    padding: 0 0.65rem;
    bottom: 0;
}

.dayContainer {
    width: 100%;
}

.dayTitle {
    text-align: center;
    margin: auto;
}

.bottomTimeslot > div {
    flex-grow: 1;
}

.red {
    background-color: #d05e52;
}

.green {
    background-color: #96b695;
}

.blue {
    background-color: #54b9f7;
}

.yellow {
    background-color: #f4d03f;
}

.pink {
    background-color: #cc99cc;
}

.orange {
    background-color: #f7b891;
}

.gray {
    background-color: rgb(196, 196, 196);
}

.lightgray {
    background-color: rgb(230, 230, 230);
}

.white {
    background-color: rgb(255, 255, 255);
}

.print {
    background-color: white;
    border-width: 2px;
    border-style: solid;
    border-color: gray;
}
</style>
