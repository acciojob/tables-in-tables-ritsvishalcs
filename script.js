function createTableWithHeaders(headers) {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');

  headers.forEach(headerText => {
    const th = document.createElement('th');
    th.textContent = headerText;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);

  return table;
}

function createList(items) {
  const ul = document.createElement('ul');
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
  return ul;
}

function createMainStructure() {
  const mainTable = document.createElement('table');

  const row = document.createElement('tr');

  // First nested table
  const cell1 = document.createElement('td');
  const nestedTable1 = createTableWithHeaders(['Nested Table 1']);
  cell1.appendChild(nestedTable1);
  row.appendChild(cell1);

  // Second nested table (with 3 headers)
  const cell2 = document.createElement('td');
  const nestedTable2 = createTableWithHeaders(['Nested Table 2', 'Column 1', 'Column 2']);
  const row2 = document.createElement('tr');
  const cell2_1 = document.createElement('td');
  cell2_1.colSpan = 3;
  cell2_1.textContent = 'Row under 3 headers';
  row2.appendChild(cell2_1);
  nestedTable2.appendChild(row2);
  cell2.appendChild(nestedTable2);
  row.appendChild(cell2);

  // Third nested table (with a list)
  const cell3 = document.createElement('td');
  const nestedTable3 = createTableWithHeaders(['Nested Table 3']);
  const row3 = document.createElement('tr');
  const listCell = document.createElement('td');
  listCell.appendChild(createList(['List item 1', 'List item 2', 'List item 3']));
  row3.appendChild(listCell);
  nestedTable3.appendChild(row3);
  cell3.appendChild(nestedTable3);
  row.appendChild(cell3);

  // Fourth nested table with 'HTML' cell
  const cell4 = document.createElement('td');
  const nestedTable4 = createTableWithHeaders(['Nested Table 4']);
  const row4 = document.createElement('tr');
  const htmlCell = document.createElement('td');
  htmlCell.textContent = 'HTML';
  htmlCell.classList.add('html-cell');
  row4.appendChild(htmlCell);
  nestedTable4.appendChild(row4);
  cell4.appendChild(nestedTable4);
  row.appendChild(cell4);

  mainTable.appendChild(row);
  document.body.appendChild(mainTable);
}

createMainStructure();

