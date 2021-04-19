// Home page for app
import React, {useEffect, useRef,useState, useContext} from "react";
import * as d3 from "d3";
import { UserContext } from "../userContext";
const data = "never";

export const HighScores = () => {

  const {userInfo, setUserInfo} = useContext(UserContext);
  const time10 = [];
  const time15 = [];
  const time20 = [];
  useEffect(() => {
    getHighScoreData();
  }, [data])

  const getAllHighScoreData = () => {
    fetch(`http://localhost:3000/getEasyHighScores`)
    .then((res) => res.json())
    .then(res =>{
      console.log(res)
      // First sort by Time (3)
      // then sort by difficulty (4)
      // 12 charts?
    });
  }

  const getHighScoreData = () => {
    fetch(`http://localhost:3000/getHighScores?username=${userInfo.userName}`)
    .then((res) => res.json())
    .then(res =>{
      res.forEach(element => {
        if(element.time === "10"){
          time10.push(element);
        }else if(element.time === "15"){
          time15.push(element);
        }else if(element.time === "20"){
          time20.push(element);
        }
        // If I want to seperate by level, foreach element.level === "hell", pretty much above
      });
      const top210 = getTopN(time10, "score", 2);
      const top215 = getTopN(time15, "score", 2);
      const top220 = getTopN(time20, "score", 2);
      drawChart(top210, "graph", time10[0].time);
      drawChart(top215, "graph1", time15[0].time);
      drawChart(top220, "graph2", time20[0].time);
   
    });
  }
  //reference: https://stackoverflow.com/questions/22949597/getting-max-values-in-json-array
  const getTopN = (arr, prop, n) => {
    // clone before sorting, to preserve the original array
    const clone = arr.slice(0); 

    // sort descending
    clone.sort(function(x, y) {
        if (x[prop] == y[prop]) return 0;
        else if (parseInt(x[prop]) < parseInt(y[prop])) return 1;
        else return -1;
    });

    return clone.slice(0, n || 1);
}

  

  const drawChart = (data, graph, time) =>{
    const margin = 70;
    const width = 500;
    const height = 400;
    const chartWidth = width - 2 * margin;
    const chartHeight = height - 2 * margin;

    const svg = d3.select(`#${graph}`).append("svg")
        .attr("width", width)
        .attr("height", height);
    svg.append("text")
        .attr("transform", "translate(30,0)")
        .attr("x", 50)
        .attr("y", 50)
        .attr("font-size", "24px")
        .style('fill', 'white')
        .text("High Score for " + time + " seconds");
    const chart = svg.append('g')
        .attr('transform', `translate(${margin}, ${margin})`);

    var xScale = d3.scaleBand().range([0, chartWidth]).padding(0.4),
    yScale = d3.scaleLinear().range([chartHeight, 0]);

    xScale.domain(data.map(function(d){return d.level;}));
    yScale.domain([0, d3.max(data, function(d) { return d.score; })+0.1]);
    chart.append('g')
        .attr('transform', `translate(0, ${chartHeight})`)
        .call(d3.axisBottom(xScale));

    chart.append("g")
         .call(d3.axisLeft(yScale).tickFormat(function(d){
             return d;
         }).ticks(10));
         const colourScale = d3.scaleLinear()
         .domain([0, 0.5])
         .range(['white', 'red']);
    svg.append('text')
    .attr('x', -(height / 2))
    .attr('y', 50 / 2)
    .attr('transform', 'rotate(-90)')
    .attr('text-anchor', 'middle')
    .style('fill', 'white')
    .text('Score');
     
    svg.append('text')
        .attr('x', chartWidth / 2 + margin)
        .attr('y', 380)
        .attr('text-anchor', 'middle')
        .style('fill', 'white')
        .text('Level');

    chart.selectAll(".bar")
         .data(data)
         .enter().append("rect")
         .attr("class", "bar")
         .attr("x", function(d) { return xScale(d.level); })
         .attr("y", function(d) { return yScale(d.score); })
         .attr("width", xScale.bandwidth())
         .attr("height", function(d) { return chartHeight - yScale(d.score); })
         .attr("fill", (data) => colourScale(data.score));
    } 

  return (
    <div className={`w-full h-full p-5 text-white`}>
      <div class="flex flex-row items-center p-5 justify-around">
        <button className="box-border h-32 w-32 p-4 border-pink-500 border-4 m4 rounded-lg"> 
            Personal high scores
        </button>
        <button className="box-border h-32 w-32 border-pink-500 border-4 p-4 m4 rounded-lg"
          onClick={getAllHighScoreData}
        >
          Top easy high scores
        </button>
        <button className="box-border h-32 w-32 border-pink-500 border-4 p-4 m4 rounded-lg"
          onClick={getAllHighScoreData}
        >
          Top Medium high scores
        </button>

        <button className="box-border h-32 w-32 border-pink-500 border-4 p-4 m4 rounded-lg"
          onClick={getAllHighScoreData}
        >
          Top Hard high scores
        </button>

        <button className="box-border h-32 w-32 border-pink-500 border-4 p-4 m4 rounded-lg"
          onClick={getAllHighScoreData}
        >
          Top Hell high scores
        </button>
      </div>
      <div className={`grid grid-cols-3 gap-4 h-full w-full text-white`}>
      <div id="graph" classsName="flex flex-col items-left justify-center h-full">
      </div>
      <div id="graph1" classsName="flex flex-col items-left justify-center h-full">
      </div>
      <div id="graph2" classsName="flex flex-col items-left justify-center h-full">

      </div>
      </div>
    </div>
  )
};
