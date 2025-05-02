// Helper function to create elements
function createElement(tag, text = '', attributes = {}) {
    const el = document.createElement(tag);
    if (text) el.textContent = text;
    for (let attr in attributes) {
      el.setAttribute(attr, attributes[attr]);
    }
    return el;
  }
  
  // Main table
  const mainTable = createElement('table');
  mainTable.setAttribute('border', '1');
  
  // Row for nested tables
  const mainRow = createElement('tr');
  
  // Nested Table 1
  const td1 = createElement('td');
  const nestedTable1 = createElement('table', '', { border: '1' });
  const th1 = createElement('th', 'Nested Table 1');
  const tr1 = createElement('tr');
  tr1.appendChild(th1);
  nestedTable1.appendChild(createElement('thead')).appendChild(tr1);
  const contentRow1 = createElement('tr');
  contentRow1.appendChild(createElement('td', 'Content 1'));
  nestedTable1.appendChild(createElement('tbody')).appendChild(contentRow1);
  td1.appendChild(nestedTable1);
  
  // Nested Table 2
  const td2 = createElement('td');
  const nestedTable2 = createElement('table', '', { border: '1' });
  const thead2 = createElement('thead');
  const tr2 = createElement('tr');
  ['Nested Table 2', 'Column 1', 'Column 2'].forEach(text => {
    tr2.appendChild(createElement('th', text));
  });
  thead2.appendChild(tr2);
  nestedTable2.appendChild(thead2);
  const tbody2 = createElement('tbody');
  const dataRow2 = createElement('tr');
  ['Row 1', 'Row 2', 'Row 3'].forEach(text => {
    dataRow2.appendChild(createElement('td', text));
  });
  tbody2.appendChild(dataRow2);
  nestedTable2.appendChild(tbody2);
  td2.appendChild(nestedTable2);
  
  // Nested Table 3 with list
  const td3 = createElement('td');
  const nestedTable3 = createElement('table', '', { border: '1' });
  nestedTable3.appendChild(createElement('thead')).appendChild(createElement('tr')).appendChild(createElement('th', 'Nested Table 3'));
  const listRow = createElement('tr');
  const listCell = createElement('td');
  const ul = createElement('ul');
  ['List item 1', 'List item 2', 'List item 3'].forEach(text => {
    ul.appendChild(createElement('li', text));
  });
  listCell.appendChild(ul);
  listRow.appendChild(listCell);
  nestedTable3.appendChild(createElement('tbody')).appendChild(listRow);
  td3.appendChild(nestedTable3);
  
  // Nested Table 4 with black cell
  const td4 = createElement('td');
  const nestedTable4 = createElement('table', '', { border: '1' });
  nestedTable4.appendChild(createElement('thead')).appendChild(createElement('tr')).appendChild(createElement('th', 'Nested Table 4'));
  const htmlRow = createElement('tr');
  const htmlCell = createElement('td', 'HTML');
  htmlCell.classList.add('html-cell');
  htmlRow.appendChild(htmlCell);
  nestedTable4.appendChild(createElement('tbody')).appendChild(htmlRow);
  td4.appendChild(nestedTable4);
  
  // Append all nested tables to main row
  mainRow.appendChild(td1);
  mainRow.appendChild(td2);
  mainRow.appendChild(td3);
  mainRow.appendChild(td4);
  
  // Append main row to main table and then to body
  mainTable.appendChild(mainRow);
  document.body.appendChild(mainTable);
  

