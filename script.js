// Create main heading
const heading = document.createElement("h1");
heading.textContent = "Tables in Tables";
document.body.appendChild(heading);

// Create main table
const mainTable = document.createElement("table");
mainTable.style.borderCollapse = "collapse";
mainTable.style.border = "1px solid black";

// Utility function to style table cells
function styleCell(cell) {
  cell.style.border = "1px solid black";
  cell.style.padding = "8px";
  cell.style.textAlign = "center";
}

// === Nested Table 1 ===
const nestedTable1 = document.createElement("table");
nestedTable1.style.borderCollapse = "collapse";

const nt1Header = nestedTable1.insertRow();
let th1 = nt1Header.insertCell();
th1.colSpan = 2;
th1.textContent = "Nested Table 1";
styleCell(th1);

const nt1r1 = nestedTable1.insertRow();
["Row 1 Col 1", "Row 1 Col 2"].forEach(text => {
  let td = nt1r1.insertCell();
  td.textContent = text;
  styleCell(td);
});

const nt1r2 = nestedTable1.insertRow();
["Row 2 Col 1", "Row 2 Col 2"].forEach(text => {
  let td = nt1r2.insertCell();
  td.textContent = text;
  styleCell(td);
});

// === Nested Table 2 ===
const nestedTable2 = document.createElement("table");
nestedTable2.style.borderCollapse = "collapse";

const nt2Header = nestedTable2.insertRow();
["Nested Table 2", "Column 1", "Column 2"].forEach(text => {
  let th = document.createElement("th");
  th.textContent = text;
  styleCell(th);
  nt2Header.appendChild(th);
});

const nt2r1 = nestedTable2.insertRow();
["Row 1", "Data A", "Data B"].forEach(text => {
  let td = nt2r1.insertCell();
  td.textContent = text;
  styleCell(td);
});

// === Nested Table 3 ===
const nestedTable3 = document.createElement("table");
nestedTable3.style.borderCollapse = "collapse";

const nt3Header = nestedTable3.insertRow();
let nt3th = nt3Header.insertCell();
nt3th.textContent = "Nested Table 3";
styleCell(nt3th);

const nt3r1 = nestedTable3.insertRow();
const tdList = nt3r1.insertCell();
const ul = document.createElement("ul");
["List item 1", "List item 2", "List item 3"].forEach(text => {
  let li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
});
tdList.appendChild(ul);
styleCell(tdList);

// === Nested Table 4 ===
const nestedTable4 = document.createElement("table");
nestedTable4.style.borderCollapse = "collapse";

const nt4Header = nestedTable4.insertRow();
let nt4th = nt4Header.insertCell();
nt4th.textContent = "Nested Table 4";
styleCell(nt4th);

const nt4r1 = nestedTable4.insertRow();
let tdHtml = nt4r1.insertCell();
tdHtml.textContent = "HTML";
tdHtml.style.backgroundColor = "black";
tdHtml.style.color = "white";
tdHtml.style.fontWeight = "bold";
styleCell(tdHtml);

// === Insert Nested Tables into Main Table ===
const row1 = mainTable.insertRow();
[row1.insertCell(), row1.insertCell()].forEach((cell, index) => {
  styleCell(cell);
  cell.appendChild(index === 0 ? nestedTable1 : nestedTable2);
});

const row2 = mainTable.insertRow();
[row2.insertCell(), row2.insertCell()].forEach((cell, index) => {
  styleCell(cell);
  cell.appendChild(index === 0 ? nestedTable3 : nestedTable4);
});

document.body.appendChild(mainTable);

