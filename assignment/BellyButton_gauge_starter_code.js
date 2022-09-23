// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {
    console.log(data);

    // Create a variable that holds the samples array. 
    var samples=[]
    // Create a variable that filters the samples for the object with the desired sample number.
    
    var firstTen=data.slice(0,10);
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadataArray = metadata.filter(sampleObj => sampleObj.id == sample.firstTen);
    console.log(metadataArray);
    // Create a variable that holds the first sample in the array.
    firstSample = data.metadataArray[0];
    
    // 2. Create a variable that holds the first sample in the metadata array.
    d3.json("samples.json").then(function(data){
      firstSample = data.metadata[0];
      Object.entries(firstSample).forEach(([key, value]) =>
        {console.log(key + ': ' + value);});


    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var results=data.samples;
    confirm.log(results)
    var metadata = data.metadata;
    var sampleArray = metadata.filter(metaObj => metaObj.id == sample); 
    console.log(sampleArray);
    // 3. Create a variable that holds the washing frequency.
    var washingFreq=sampleArray.wFreq;
    console.log(washingFreq)

    // Create the yticks for the bar chart.

    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot();
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot();
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [
      {
        value: wfreqs,
        type: "indicator",
        mode: "gauge+number",
        title: {text: "<b> Belly Button Washing Frequency </b> <br></br> Scrubs Per Week"},
        gauge: {
          axis: {range: [null,10], dtick: "2"},
  
          bar: {color: "black"},
          steps:[
            {range: [0, 2], color: "red"},
            {range: [2, 4], color: "orange"},
            {range: [4, 6], color: "yellow"},
            {range: [6, 8], color: "lightgreen"},
            {range: [8, 10], color: "green"}
          ],
          dtick: 2
        }
      }];
     
    
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
      automargin: true
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  });
 }
