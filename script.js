function createTable() {
  // Ask user for rows and columns
  const rows = prompt("Input number of rows");
  const cols = prompt("Input number of columns");

  // Convert input to numbers
  const numRows = Number(rows);
  const numCols = Number(cols);

  // Handle non-numeric input
  if (isNaN(numRows) || isNaN(numCols)) {
    return; // Ignore and do not create table
  }

  // Handle zero or negative values
  if (numRows <= 0 || numCols <= 0) {
    alert("Please enter positive values");
    return;
  }

  // Get table element
  const table = document.getElementById("table");

  // Clear existing table (if any)
  table.innerHTML = "";

  // Create table rows and columns
  for (let i = 0; i < numRows; i++) {
    const tr = document.createElement("tr");

    for (let j = 0; j < numCols; j++) {
      const td = document.createElement("td");
      td.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
}
