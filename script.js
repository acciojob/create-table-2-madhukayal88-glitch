function createTable() {
  // 1. Get input from user via prompts
  const rn = prompt("Input number of rows");
  const cn = prompt("Input number of columns");

  // 2. Convert inputs to numbers
  const rows = parseInt(rn);
  const cols = parseInt(cn);

  // 3. Edge Case Handling: Check if input is a valid positive number
  if (isNaN(rows) || isNaN(cols)) {
    // Ignore non-numeric values as per requirements
    return;
  }

  if (rows <= 0 || cols <= 0) {
    alert("Please enter positive numbers greater than zero.");
    return;
  }

  // 4. Get the table element and clear any existing content
  const table = document.getElementById("myTable");
  table.innerHTML = "";

  // 5. Generate the table structure
  for (let i = 0; i < rows; i++) {
    // Create a new row element
    const tr = document.createElement("tr");

    for (let j = 0; j < cols; j++) {
      // Create a new cell element
      const td = document.createElement("td");
      
      // Set the text content using 0-based indices
      td.textContent = `Row-${i} Column-${j}`;
      
      // Append the cell to the current row
      tr.appendChild(td);
    }

    // Append the completed row to the table
    table.appendChild(tr);
  }
}