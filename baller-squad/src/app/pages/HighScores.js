// Home page for app
import React, { useEffect, useContext } from "react";
import * as d3 from "d3";
import { UserContext } from "../userContext";
import { HighScoreButton } from "../components/highscores/HighScoreButton";

export const HighScores = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const time10 = [];
  const time15 = [];
  const time20 = [];
  // useEffect(() => {
  //   getHighScoreData();
  // }, [time10, time15, time20]);

  // Gets score by difficulty, x axis - users, y axis - score
  const getDifficultyHighScoreData = (difficulty) => {
    console.log(difficulty);
    fetch(
      `http://localhost:3000/getDifficultyHighScores?difficulty=${difficulty}`
    )
      .then((res) => res.json())
      .then((res) => {
        // Sorts the result into three categories based on time, if they exist
        if (res.length !== 0) {
          console.log(res);
          var Difficultytime10 = [];
          var Difficultytime15 = [];
          var Difficultytime20 = [];
          res.forEach((element) => {
            if (element.time === "10") {
              Difficultytime10.push(element);
            } else if (element.time === "15") {
              Difficultytime15.push(element);
            } else if (element.time === "20") {
              Difficultytime20.push(element);
            }
          });

          // D3 cannot handle multiple duplicate x values (which is our users), so only the highest score of the user is allowed
          var NoDuplicateDifficultytime10 = [];
          var NoDuplicateDifficultytime15 = [];
          var NoDuplicateDifficultytime20 = [];

          NoDuplicateDifficultytime10 = noDuplicateDifficulty(Difficultytime10);
          NoDuplicateDifficultytime15 = noDuplicateDifficulty(Difficultytime15);
          NoDuplicateDifficultytime20 = noDuplicateDifficulty(Difficultytime20);

          // Gets the top 5 scores
          var topDifficulty10 = getTopN(
            NoDuplicateDifficultytime10,
            "score",
            5
          );
          var topDifficulty15 = getTopN(
            NoDuplicateDifficultytime15,
            "score",
            5
          );
          var topDifficulty20 = getTopN(
            NoDuplicateDifficultytime20,
            "score",
            5
          );
          
          // Sorts them in ascending order
          topDifficulty10 = ascendingScoreSort(topDifficulty10)
          topDifficulty15 = ascendingScoreSort(topDifficulty15)
          topDifficulty20 = ascendingScoreSort(topDifficulty20)

          // Empties the graphs so we dont constantly add new graphs
          d3.select(`#graph`).html("");
          d3.select(`#graph1`).html("");
          d3.select(`#graph2`).html("");

          // Check if they exist and if they do then we draw them
          if (topDifficulty10.length !== 0) {
            drawChart(topDifficulty10, "graph", Difficultytime10[0].time, 1);
          }
          if (topDifficulty15.length !== 0) {
            drawChart(topDifficulty15, "graph1", Difficultytime15[0].time, 1);
          }
          if (topDifficulty20.length !== 0) {
            drawChart(topDifficulty20, "graph2", Difficultytime20[0].time, 1);
          }
        } else {
          // If response is equal to zero then we just empty the graphs
          d3.select(`#graph`).html("");
          d3.select(`#graph1`).html("");
          d3.select(`#graph2`).html("");
        }
      });
  };

  // Gets the user's highscores, x-axis - difficulties, y-axis - score
  const getHighScoreData = () => {
    var medium = [];
    var easy = [];
    var hard = [];
    var hell = [];
    fetch(`http://localhost:3000/getHighScores?username=${userInfo.userName}`)
      .then((res) => res.json())
      .then((res) => {
        // Sorts the result into three categories based on time
        res.forEach((element) => {
          if (element.time === "10") {
            time10.push(element);
          } else if (element.time === "15") {
            time15.push(element);
          } else if (element.time === "20") {
            time20.push(element);
          }
        });
        
        // Sorts each time array into three categories based on difficulty and draws the graph
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
          drawChart(top10, "graph", time10[0].time, 0);
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
          drawChart(top15, "graph1", time15[0].time, 0);
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
          drawChart(top20, "graph2", time20[0].time, 0);
        }
      });
  };
  // Gets top n by category(prop) of the array and returns an array of the top n
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

  // Gets top n by category(prop) of the array and returns the highest value
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

  // D3 code to draw the charts
  // Flag - 0 = difficulty for x-axis, 1 = users for x-axis
  const drawChart = (data, graph, time, flag) => {
    let height, width;
    const margin = 70;
    width = 500;
    height = 400;
    const chartWidth = width - 2 * margin;
    const chartHeight = height - 2 * margin;

    d3.select(`#${graph}`).html("");
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

    if (flag === 0) {
      xScale.domain(
        data.map(function (d) {
          return d.level;
        })
      );
    } else if (flag === 1) {
      xScale.domain(
        data.map(function (d) {
          return d.user;
        })
      );
    }

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
      .domain([0, 100])
      .range(["white", "blue"]);
    svg
      .append("text")
      .attr("x", -(height / 2))
      .attr("y", 50 / 2)
      .attr("transform", "rotate(-90)")
      .attr("text-anchor", "middle")
      .style("fill", "white")
      .text("Score");

    if (flag == 0) {
      svg
        .append("text")
        .attr("x", chartWidth / 2 + margin)
        .attr("y", 380)
        .attr("text-anchor", "middle")
        .style("fill", "white")
        .text("Level");
    } else {
      svg
        .append("text")
        .attr("x", chartWidth / 2 + margin)
        .attr("y", 380)
        .attr("text-anchor", "middle")
        .style("fill", "white")
        .text("Users");
    }

    if (flag === 0) {
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
    } else if (flag === 1) {
      chart
        .selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", function (d) {
          return xScale(d.user);
        })
        .attr("y", function (d) {
          return yScale(d.score);
        })
        .attr("width", xScale.bandwidth())
        .attr("height", function (d) {
          return chartHeight - yScale(d.score);
        })
        .attr("fill", (data) => colourScale(data.score));
    }
  };

  return (
    <div
      className={`w-full h-full p-5 flex flex-col flex1 justify-between items-center text-white`}
    >
      <div
        className={`flex flex-row flex1 w-full justify-evenly text-white items-center justify-start flex-wrap`}
      >
        <HighScoreButton
          text={`Personal High Scores`}
          onClick={() => getHighScoreData()}
        />
        <HighScoreButton
          text={`Easy High Scores`}
          onClick={() => getDifficultyHighScoreData("Easy")}
        />
        <HighScoreButton
          text={`Medium High Scores`}
          onClick={() => getDifficultyHighScoreData("Medium")}
        />
        <HighScoreButton
          text={`Hard High Scores`}
          onClick={() => getDifficultyHighScoreData("Hard")}
        />
        <HighScoreButton
          text={`Hell High Scores`}
          onClick={() => getDifficultyHighScoreData("Hell")}
        />
      </div>

      <div
        className={`flex xl:flex-row flex-col space-y-1 flex1 h-full w-full xl:justify-evenly text-white items-center justify-start`}
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

// Creates an empty new array
// Set the flag as false
// Check if element is in the new array
// If it is in there, set the flag to true then check if score is higher or not 
// If the flag is false then insert element into the new array
function noDuplicateDifficulty(DuplicateArray) {
  var newArray = [];

  DuplicateArray.forEach((d) => {
    let isInArray = false;
    if (newArray.length === 0) {
      newArray.push(d);
    }
    newArray.map((v, i) => {
      if (v.user === d.user) {
        isInArray = true;
        if (d.score > v.score) {
          newArray.push(d);
          newArray.splice(i, 1);
        }
      }
    });

    if (isInArray === false) {
      newArray.push(d);
    }
  });
  return newArray;
}

// Sorts an array in asecnding order by score
function ascendingScoreSort(array) {
  array.sort(function (a, b) {
    return a.score - b.score
  });
  return array;
}