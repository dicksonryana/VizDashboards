// This is obviously inoperative (well, the JSON data does load), but I wanted to at least sketch out what I think the steps would be.

// Fetch the JSON data and console log it
d3.json("data.json").then((belly) => {
    console.log(belly);
    var data = belly;
});

// Display the default plot
function init() {
  var belly = [{
    values: sample_values,
    labels: otu_ids,
    type: "bar"
  }];

// Need to figure out hovertext and whether this positioning works.
  var layout = {
    height: 600,
    width: 800
  };
  
  // Need to figure out how to grab the HTML tags to insert the different charts
  var CHART = d3.selectAll("#col-md-5", "bar").node();

  Plotly.newPlot(CHART, data);
  Plotly.newPlot("bar", belly, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selectOption").on("change", getData);

// Function called by DOM changes
function getData() {
  var dropdownMenu = d3.select("#selectOption");
  // Assign the value of the dropdown menu option to a variable
  var dataset = dropdownMenu.property("value");
  // Initialize an empty array for the name's data
  var data = [];

  // Sort the data array
  dataset.sort(function(a, b) {
    return dataset;
  });

  // Slice the first 10 objects for plotting
  data = dataset.slice(0, 10);

  // Reverse the array due to Plotly's defaults
  data = dataset.reverse();

  // Unclear to me how to set this up for so many different names (obviously, I could do this manually, but it would take days).
  // There's clearly another way, just don't know it.
  if (dataset == '') {
      data = ;
  }
  else if (dataset == '') {
      data = ;
  }
  else if (dataset == '') {
      data = ;
  }
  // Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("bar", "values", [newdata]);
}

// Repeat steps necessary for bubble chart and metadata table

// Metadata would go here: sample-metadata, panel-body
// Bubble chart would go here: col-md-5, bubble