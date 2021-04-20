// Home page for app
import React, { useEffect, useRef, useState, useContext } from "react";
import * as d3 from "d3";
import { UserContext } from "../userContext";
const data = "never";

export const HighScores = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const time10 = [];
  const time15 = [];
  const time20 = [];
  useEffect(() => {
    getHighScoreData();
  }, [time10, time15, time20]);

  const getHighScoreData = () => {
    var medium = [];
    var easy = [];
    var hard = [];
    var hell = [];
    fetch(`http://localhost:3000/getHighScores?username=${userInfo.userName}`)
      .then((res) => res.json())
      .then((res) => {
        res.forEach((element) => {
          if (element.time === "10") {
            time10.push(element);
          } else if (element.time === "15") {
            time15.push(element);
          } else if (element.time === "20") {
            time20.push(element);
          }
        });

        if (time10.length !== 0) {
          time10.forEach((el) => {
            if (el.level === "Medium") {
              medium.push(el);
            } else if (el.level === "Easy") {
              easy.push(el);
            } else if (el.level === "Hard") {
              hard.push(el);
            } else if (el.level === "Hell") {
              hell.push(el);
            }
          });
          const top10 = [];
          if (medium.length !== 0) {
            top10.push(getTopN2(medium, "score", 1));
          }
          if (easy.length !== 0) {
            top10.push(getTopN2(easy, "score", 1));
          }
          if (hard.length !== 0) {
            top10.push(getTopN2(hard, "score", 1));
          }
          if (hell.length !== 0) {
            top10.push(getTopN2(hell, "score", 1));
          }
          drawChart(top10, "graph", time10[0].time);
        }
        medium = [];
        easy = [];
        hard = [];
        hell = [];
        if (time15.length !== 0) {
          time15.forEach((el) => {
            if (el.level === "Medium") {
              medium.push(el);
            } else if (el.level === "Easy") {
              easy.push(el);
            } else if (el.level === "Hard") {
              hard.push(el);
            } else if (el.level === "Hell") {
              hell.push(el);
            }
          });
          const top15 = [];
          if (medium.length !== 0) {
            top15.push(getTopN2(medium, "score", 1));
          }
          if (easy.length !== 0) {
            top15.push(getTopN2(easy, "score", 1));
          }
          if (hard.length !== 0) {
            top15.push(getTopN2(hard, "score", 1));
          }
          if (hell.length !== 0) {
            top15.push(getTopN2(hell, "score", 1));
          }
          drawChart(top15, "graph1", time15[0].time);
        }
        medium = [];
        easy = [];
        hard = [];
        hell = [];
        if (time20.length !== 0) {
          time20.forEach((el) => {
            if (el.level === "Medium") {
              medium.push(el);
            } else if (el.level === "Easy") {
              easy.push(el);
            } else if (el.level === "Hard") {
              hard.push(el);
            } else if (el.level === "Hell") {
              hell.push(el);
            }
          });
          const top20 = [];
          if (medium.length !== 0) {
            top20.push(getTopN2(medium, "score", 1));
          }
          if (easy.length !== 0) {
            top20.push(getTopN2(easy, "score", 1));
          }
          if (hard.length !== 0) {
            top20.push(getTopN2(hard, "score", 1));
          }
          if (hell.length !== 0) {
            top20.push(getTopN2(hell, "score", 1));
          }
          drawChart(top20, "graph2", time20[0].time);
        }
      });
  };
  //reference: https://stackoverflow.com/questions/22949597/getting-max-values-in-json-array
  const getTopN = (arr, prop, n) => {
    // clone before sorting, to preserve the original array
    const clone = arr.slice(0);

    // sort descending
    clone.sort(function (x, y) {
      if (x[prop] === y[prop]) return 0;
      else if (parseInt(x[prop]) < parseInt(y[prop])) return 1;
      else return -1;
    });

    return clone.slice(0, n || 1);
  };

  const getTopN2 = (arr, prop, n) => {
    // clone before sorting, to preserve the original array
    const clone = arr.slice(0);

    // sort descending
    clone.sort(function (x, y) {
      if (x[prop] === y[prop]) return 0;
      else if (parseInt(x[prop]) < parseInt(y[prop])) return 1;
      else return -1;
    });

    return clone[0];
  };

  const drawChart = (data, graph, time) => {
    let height, width;
    const margin = 70;
    width = 500
    height = 400;
    const chartWidth = width - 2 * margin;
    const chartHeight = height - 2 * margin;

    const svg = d3
      .select(`#${graph}`)
      .append("svg")
      .attr("width", width)
      .attr("height", height);
    svg
      .append("text")
      .attr("transform", "translate(30,0)")
      .attr("x", 50)
      .attr("y", 50)
      .attr("font-size", "24px")
      .style("fill", "white")
      .text("High Score for " + time + " seconds");
    const chart = svg
      .append("g")
      .attr("transform", `translate(${margin}, ${margin})`);

    var xScale = d3.scaleBand().range([0, chartWidth]).padding(0.4),
      yScale = d3.scaleLinear().range([chartHeight, 0]);

    xScale.domain(
      data.map(function (d) {
        return d.level;
      })
    );
    yScale.domain([
      0,
      d3.max(data, function (d) {
        return d.score;
      }) + 0.1,
    ]);
    chart
      .append("g")
      .attr("transform", `translate(0, ${chartHeight})`)
      .call(d3.axisBottom(xScale));

    chart.append("g").call(
      d3
        .axisLeft(yScale)
        .tickFormat(function (d) {
          return d;
        })
        .ticks(10)
    );
    const colourScale = d3
      .scaleLinear()
      .domain([0, 0.5])
      .range(["white", "red"]);
    svg
      .append("text")
      .attr("x", -(height / 2))
      .attr("y", 50 / 2)
      .attr("transform", "rotate(-90)")
      .attr("text-anchor", "middle")
      .style("fill", "white")
      .text("Score");

    svg
      .append("text")
      .attr("x", chartWidth / 2 + margin)
      .attr("y", 380)
      .attr("text-anchor", "middle")
      .style("fill", "white")
      .text("Level");

    chart
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", function (d) {
        return xScale(d.level);
      })
      .attr("y", function (d) {
        return yScale(d.score);
      })
      .attr("width", xScale.bandwidth())
      .attr("height", function (d) {
        return chartHeight - yScale(d.score);
      })
      .attr("fill", (data) => colourScale(data.score));
  };

  return (
    <div
      className={`w-full h-full p-5 flex flex-col flex1 justify-between items-center text-white`}
    >
      <div
        className={`flex xl:flex-row flex-col space-y-4 flex1 h-full w-full xl:justify-evenly text-white items-center justify-start`}
      >
        <div
          id="graph"
          classsName="flex flex-col flex1 items-left justify-center h-full"
        ></div>
        <div
          id="graph1"
          classsName="flex flex-col items-left justify-center h-full"
        ></div>
        <div
          id="graph2"
          classsName="flex flex-col items-left justify-center h-full"
        ></div>
      </div>
    </div>
  );
};
