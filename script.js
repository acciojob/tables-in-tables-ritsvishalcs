// Create heading
const heading = document.createElement("h1");
heading.textContent = "Tables in Tables";
document.body.appendChild(heading);

// Utility to create and style tables
function createTable(border = "1px solid black") {
  const table = document.createElement("table");
  table.style.border = border;
  table.style.borderCollapse = "collapse";
  table.style.margin = "10px";
  return table;
}

// Main table
const mainTable = createTable();

// Create table cells
function createCell(row, content, isHeader = false, options = {}) {
  const cell = isHeader ? document.createElement("th") : document.createElement("td");
  cell.textContent = content;
  cell.style.border = "1px solid black";
  cell.style.padding = "8px";
  if (options.colSpan) cell.colSpan = options.colSpan;
  if (options.bgColor) cell.style.backgroundColor = options.bgColor;
  if (options.textColor) cell.style.color = options.textColor;
  row.appendChild(cell);
  return cell;
}

// === Nested Table 1 ===
const nestedTable1 = createTable();
let row1 = nestedTable1.insertRow();
createCell(row1, "Nested Table 1", false, { colSpan: 2 });
let row2 = nestedTable1.insertRow();
createCell(row2, "Row 1 Col 1");
createCell(row2, "Row 1 Col 2");
let row3 = nestedTable1.insertRow();
createCell(row3, "Row 2 Col 1");
createCell(row3, "Row 2 Col 2");

// === Nested Table 2 ===
const nestedTable2 = createTable();
let headRow = nestedTable2.insertRow();
createCell(headRow, "Nested Table 2", true);
createCell(headRow, "Column 1", true);
createCell(headRow, "Column 2", true);

let dataRow = nestedTable2.insertRow();
createCell(dataRow, "Row 1");
createCell(dataRow, "Data A");
createCell(dataRow, "Data B");

// === Nested Table 3 ===
const nestedTable3 = createTable();
let t3Row = nestedTable3.insertRow();
let t3Cell = createCell(t3Row, "");
let ul = document.createElement("ul");
["List item 1", "List item 2", "List item 3"].forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});
t3Cell.appendChild(ul);

// === Nested Table 4 ===
const nestedTable4 = createTable();
let t4Row = nestedTable4.insertRow();
createCell(t4Row, "HTML", false, {
  bgColor: "black",
  textColor: "white"
});

// === Add nested tables to main table ===
let mainRow1 = mainTable.insertRow();
let mainCell1 = mainRow1.insertCell();
mainCell1.appendChild(nestedTable1);
let mainCell2 = mainRow1.insertCell();
mainCell2.appendChild(nestedTable2);

let mainRow2 = mainTable.insertRow();
let mainCell3 = mainRow2.insertCell();
mainCell3.appendChild(nestedTable3);
let mainCell4 = mainRow2.insertCell();
mainCell4.appendChild(nestedTable4);

// Add main table to document
document.body.appendChild(mainTable);

