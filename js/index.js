var audio = document.getElementById("myAudio");
			audio.load;



function playAudio() {
  audio.volume = 1;
  audio.play(); 
}
Audio.prototype.stop = function() {
    this.pause();
    this.currentTime = 0;
};


var dataset = [
{date: "08/01/2016", GBPUSD:1.45},
{date: "15/01/2016", GBPUSD:1.42},
{date: "22/01/2016", GBPUSD:1.42},
{date: "29/01/2016", GBPUSD:1.42},
{date: "05/02/2016", GBPUSD:1.45},
{date: "12/02/2016", GBPUSD:1.45},
{date: "19/02/2016", GBPUSD:1.44},
{date: "26/02/2016", GBPUSD:1.38},
{date: "04/03/2016", GBPUSD:1.42},
{date: "11/03/2016", GBPUSD:1.43},
{date: "18/03/2016", GBPUSD:1.44},
{date: "25/03/2016", GBPUSD:1.41},
{date: "01/04/2016", GBPUSD:1.42},
{date: "08/04/2016", GBPUSD:1.41},
{date: "15/04/2016", GBPUSD:1.41},
{date: "22/04/2016", GBPUSD:1.44},
{date: "29/04/2016", GBPUSD:1.46},
{date: "06/05/2016", GBPUSD:1.44},
{date: "13/05/2016", GBPUSD:1.43},
{date: "20/05/2016", GBPUSD:1.44},
{date: "27/05/2016", GBPUSD:1.46},
{date: "03/06/2016", GBPUSD:1.45},
{date: "10/06/2016", GBPUSD:1.42},
{date: "17/06/2016", GBPUSD:1.43},
{date: "24/06/2016", GBPUSD:1.36},
{date: "01/07/2016", GBPUSD:1.32},
{date: "08/07/2016", GBPUSD:1.29},
{date: "15/07/2016", GBPUSD:1.31},
{date: "22/07/2016", GBPUSD:1.31},
{date: "29/07/2016", GBPUSD:1.32},
{date: "05/08/2016", GBPUSD:1.30},
{date: "12/08/2016", GBPUSD:1.29},
{date: "19/08/2016", GBPUSD:1.30},
{date: "26/08/2016", GBPUSD:1.31},
{date: "02/09/2016", GBPUSD:1.32},
{date: "09/09/2016", GBPUSD:1.32},
{date: "16/09/2016", GBPUSD:1.30},
{date: "23/09/2016", GBPUSD:1.29},
{date: "30/09/2016", GBPUSD:1.29},
{date: "07/10/2016", GBPUSD:1.24},
{date: "14/10/2016", GBPUSD:1.21},
{date: "21/10/2016", GBPUSD:1.22},
{date: "28/10/2016", GBPUSD:1.21},
{date: "04/11/2016", GBPUSD:1.25},
{date: "11/11/2016", GBPUSD:1.26},
{date: "18/11/2016", GBPUSD:1.23},
{date: "25/11/2016", GBPUSD:1.24},
{date: "02/12/2016", GBPUSD:1.27},
{date: "09/12/2016", GBPUSD:1.25},
{date: "16/12/2016", GBPUSD:1.24},
{date: "23/12/2016", GBPUSD:1.22},
{date: "30/12/2016", GBPUSD:1.23},
{date: "06/01/2017", GBPUSD:1.22},
{date: "13/01/2017", GBPUSD:1.21},
{date: "20/01/2017", GBPUSD:1.23},
{date: "27/01/2017", GBPUSD:1.25},
{date: "03/02/2017", GBPUSD:1.24},
{date: "10/02/2017", GBPUSD:1.24},
{date: "17/02/2017", GBPUSD:1.24},
{date: "24/02/2017", GBPUSD:1.24},
{date: "03/03/2017", GBPUSD:1.22},
{date: "10/03/2017", GBPUSD:1.21},
{date: "17/03/2017", GBPUSD:1.23},
{date: "24/03/2017", GBPUSD:1.24},
{date: "31/03/2017", GBPUSD:1.25},
{date: "07/04/2017", GBPUSD:1.23},
{date: "14/04/2017", GBPUSD:1.25},
{date: "21/04/2017", GBPUSD:1.28},
{date: "28/04/2017", GBPUSD:1.29},
{date: "05/05/2017", GBPUSD:1.29},
{date: "12/05/2017", GBPUSD:1.28},
{date: "19/05/2017", GBPUSD:1.30},
{date: "26/05/2017", GBPUSD:1.28},
{date: "02/06/2017", GBPUSD:1.28},
{date: "09/06/2017", GBPUSD:1.27},
{date: "16/06/2017", GBPUSD:1.27},
{date: "23/06/2017", GBPUSD:1.27},
{date: "30/06/2017", GBPUSD:1.30},
{date: "07/07/2017", GBPUSD:1.28},
{date: "14/07/2017", GBPUSD:1.30},
{date: "21/07/2017", GBPUSD:1.29},
{date: "28/07/2017", GBPUSD:1.31},
{date: "04/08/2017", GBPUSD:1.30},
{date: "11/08/2017", GBPUSD:1.30},
{date: "18/08/2017", GBPUSD:1.28},
{date: "25/08/2017", GBPUSD:1.28},
{date: "01/09/2017", GBPUSD:1.29},
{date: "08/09/2017", GBPUSD:1.31},
{date: "15/09/2017", GBPUSD:1.35},
{date: "22/09/2017", GBPUSD:1.34},
{date: "29/09/2017", GBPUSD:1.33},
{date: "06/10/2017", GBPUSD:1.30},
{date: "13/10/2017", GBPUSD:1.32},
{date: "20/10/2017", GBPUSD:1.31},
{date: "27/10/2017", GBPUSD:1.31},
{date: "03/11/2017", GBPUSD:1.30},
{date: "10/11/2017", GBPUSD:1.31},
{date: "17/11/2017", GBPUSD:1.32},
{date: "24/11/2017", GBPUSD:1.33},
{date: "01/12/2017", GBPUSD:1.34},
{date: "08/12/2017", GBPUSD:1.33},
{date: "15/12/2017", GBPUSD:1.33},
{date: "22/12/2017", GBPUSD:1.33},
{date: "29/12/2017", GBPUSD:1.35},
{date: "05/01/2018", GBPUSD:1.35},
{date: "12/01/2018", GBPUSD:1.37},
{date: "19/01/2018", GBPUSD:1.38},
{date: "26/01/2018", GBPUSD:1.41},
{date: "02/02/2018", GBPUSD:1.41},
{date: "09/02/2018", GBPUSD:1.38},
{date: "16/02/2018", GBPUSD:1.40},
{date: "23/02/2018", GBPUSD:1.39},
{date: "02/03/2018", GBPUSD:1.38},
{date: "09/03/2018", GBPUSD:1.38},
{date: "16/03/2018", GBPUSD:1.39},
{date: "23/03/2018", GBPUSD:1.41},
{date: "30/03/2018", GBPUSD:1.40},
{date: "06/04/2018", GBPUSD:1.40},
{date: "13/04/2018", GBPUSD:1.42},
{date: "20/04/2018", GBPUSD:1.40},
{date: "27/04/2018", GBPUSD:1.37},
{date: "04/05/2018", GBPUSD:1.35},
{date: "11/05/2018", GBPUSD:1.35},
{date: "18/05/2018", GBPUSD:1.34},
{date: "25/05/2018", GBPUSD:1.33},
{date: "01/06/2018", GBPUSD:1.33},
{date: "08/06/2018", GBPUSD:1.34},
{date: "15/06/2018", GBPUSD:1.32},
{date: "22/06/2018", GBPUSD:1.32},
{date: "29/06/2018", GBPUSD:1.32},
{date: "06/07/2018", GBPUSD:1.32},
{date: "13/07/2018", GBPUSD:1.32},
{date: "20/07/2018", GBPUSD:1.31},
{date: "27/07/2018", GBPUSD:1.31},
{date: "03/08/2018", GBPUSD:1.30},
{date: "10/08/2018", GBPUSD:1.27},
{date: "17/08/2018", GBPUSD:1.27},
{date: "24/08/2018", GBPUSD:1.28},
{date: "31/08/2018", GBPUSD:1.29},
{date: "07/09/2018", GBPUSD:1.29},
{date: "14/09/2018", GBPUSD:1.30},
{date: "21/09/2018", GBPUSD:1.30},
{date: "28/09/2018", GBPUSD:1.30},
{date: "05/10/2018", GBPUSD:1.31},
{date: "12/10/2018", GBPUSD:1.31},
{date: "19/10/2018", GBPUSD:1.30},
{date: "26/10/2018", GBPUSD:1.28},
{date: "02/11/2018", GBPUSD:1.29},
{date: "09/11/2018", GBPUSD:1.29},
{date: "16/11/2018", GBPUSD:1.28},
{date: "23/11/2018", GBPUSD:1.28},
{date: "30/11/2018", GBPUSD:1.27},
{date: "07/12/2018", GBPUSD:1.27},
{date: "14/12/2018", GBPUSD:1.25},
{date: "21/12/2018", GBPUSD:1.26},
{date: "27/12/2018", GBPUSD:1.26},
{date: "29/12/2018", GBPUSD:1.27},
{date: "04/01/2019", GBPUSD:1.27},
{date: "05/01/2019", GBPUSD:1.27},
{date: "11/01/2019", GBPUSD:1.28},
{date: "12/01/2019", GBPUSD:1.28},
{date: "18/01/2019", GBPUSD:1.28},
{date: "19/01/2019", GBPUSD:1.28},
{date: "26/01/2019", GBPUSD:1.31},
];

var multiDataset = d3.range(dataset.length-1).map( i => [dataset[i], dataset[i+1] ] );

// Calculate Margins and canvas dimensions
var margin = {top: 40, right: 40, bottom: 40, left: 60},
    width = 700 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

//Parsers and Formaters
var parseTime = d3.timeParse("%d/%m/%Y");
var formatTime = d3.timeFormat("%a/%b/%Y");

// Scales
var x = d3.scaleTime()
    .range([0, width]);

var y = d3.scaleLinear()
    .range([height, 0]);

// Line
var line = d3.line()
    .x(function(d) { return x(this.parseTime(d.date)).toFixed(1); })
    .y(function(d) { return y(d.GBPUSD).toFixed(1); })
    .curve(d3.curveStepAfter)
 

var svg = d3.select("#audioviz").append("svg")
    .style("background-color", '#')
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

 //Arguments for axes : Ranges for X, y
 x.domain(d3.extent(dataset, function(d) { return parseTime(d.date); }));
 y.domain(d3.extent(dataset, function(d) { return d.GBPUSD; }));

// Axes
svg.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

svg.append("g")
    .attr("class", "axis axis--y")
    .call(d3.axisLeft(y));
  // Labels
svg.append("text")
    .attr("text-anchor", "middle")
    .style("font-size", "14px")
    .attr("transform", "translate("+ (margin.left - 94 ) +","+(height/2)+")rotate(-90)")
    .text("Value of the Pound");

svg.append("text")
    .style("font-size", "14px")
    .attr("text-anchor", "middle")
    .attr("transform", "translate("+ (width/2) +","+(height-(margin.bottom -74))+")")
    .text("Date");

//  Chart Title
svg.append("text")
    .attr("x", (width / 2))
    .attr("y", 20 - (margin.top / 2))
    .attr("text-anchor", "middle")
    .style("font-size", "16px")
    .text("Weekly USD/GBP since 01/01/2016");

// Data Lines:

d3.select(".start").on("click", function() {
  console.log('sdfsdf');
  var path = svg.selectAll(".line")
    .data(multiDataset)
    .enter()
    .append("path")
      .attr("class", "line")
      .attr("d", line);
  
    
  
 var text1 = svg.append("text")
   .attr("id","text1")
   .transition()
    .delay(4700)
    .attr('x', 90)
    .attr('y', 120)
    .attr("font-size", "13px")
    .text('<-- 1.Brexit');

  
  var text1 = svg.append("text")
   .attr("id","text1")
   .transition()
    .delay(7600)
    .attr('x', 27)
    .attr('y', 240)
    .attr("font-size", "13px")
    .text('2.Flash crash-->');
  
   var text1 = svg.append("text")
   .attr("id","text1")
   .transition()
    .delay(14200)
    .attr('x', 280)
    .attr('y', 240)
    .attr("font-size", "13px")
    .text('<---3.General Election');

  
  var text1 = svg.append("text")
   .attr("id","text1")
   .transition()
    .delay(17000)
    .attr('x', 110)
    .attr('y', 145)
    .attr("font-size", "13px")
    .text('4.Thresa May Florence Speech-->');
  
  var text1 = svg.append("text")
   .attr("id","text1")
   .transition()
    .delay(22800)
    .attr('x', 232)
    .attr('y', 55)
    .attr("font-size", "13px")
    .text('5.Irish border disagreement-->');
  
  var text1 = svg.append("text")
   .attr("id","text1")
   .transition()
    .delay(27550)
    .attr('x', 340)
    .attr('y', 205)
    .attr("font-size", "13px")
    .text('6.Letters of no confidnce -->');



  path.each( function (d,i) { d.totalLength = this.getTotalLength(); })

var segmentDuration = 31400/multiDataset.length;
  path
      .attr("stroke-dasharray", d => d.totalLength + " " + d.totalLength)
      .attr("stroke-dashoffset", d => d.totalLength)
    .transition() // Call Transition Method
      .duration(150) // Set Duration timing (ms)
      .delay( (d,i) => i*segmentDuration)
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset", 0); // Set final value of dash-offset for transition
});

// Reset Animation
d3.select(".reset").on("click", function() {
  d3.selectAll(".line").remove()
  d3.selectAll("#text1").remove();
});