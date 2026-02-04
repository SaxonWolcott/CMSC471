console.log('D3 Version:', d3.version); // Check if D3 is loaded

const width = 600;
const height = 400;
const r = 50; // radius

const svg = d3.select('#vis')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

// Left Circle
svg.append('circle')
    .attr('cx', width*0.25)
    .attr('cy', height*0.5)
    .attr('r', r)
    .style('fill', 'blue')
    .attr('stroke', 'black')
    .attr('stroke-width', 8);
    

// Middle Circle
svg.append('circle')
    .attr('cx', width*0.5)
    .attr('cy', height*0.5)
    .attr('r', r)
    .style('fill', 'red');

// Right Circle
svg.append('circle')
    .attr('cx', width*0.75)
    .attr('cy', height*0.5)
    .attr('r', r)
    .style('fill', 'green');


// Rectangle
const squareWidth = 60;

svg.append('rect')
    .attr('x', width*0.5 - squareWidth/2)
    .attr('y', height*0.5 - 150)
    .attr('width', squareWidth)
    .attr('height', squareWidth)
    .style('fill', 'red')



