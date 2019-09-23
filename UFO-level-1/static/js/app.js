// from data.js
let tableData = data;

// Get a reference to the table body & filter button
let tbody = d3.select("tbody");
let button_filter_date = d3.select("#filter-btn");
d3.selectAll("#filter-btn").on("click", handleClick);

// initially populate tbody with all rows from data.js
data.forEach((sightingEntry) => {
  let row = tbody.append("tr");
  Object.entries(sightingEntry).forEach(([key, value]) => {
    let cell = row.append("td");
    cell.text(value);
  });
}); 


function filterDate(filteredData) {

  // https://stackoverflow.com/questions/7271490/delete-all-rows-in-an-html-table
  //let Table = document.getElementById("ufo-table");
  //Table.innerHTML = "";
  tbody.html("");
 

  // exercise file : 14-03-03-Evr_D3_Table ( BONUS )
  filteredData.forEach((fileteredRow) => {
    let row = tbody.append("tr");
    Object.entries(fileteredRow).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);   
    });
  });
 


}; 

// exercise file : 14-03-09-Par_Form_Filter
function handleClick(){

  d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    let inputElement = d3.select("#datetime");

    // Get the value property of the input element
    let inputValue = inputElement.property("value");

    let filteredData = tableData.filter(sightingEntry => sightingEntry.datetime === inputValue);
    filterDate(filteredData);
};


