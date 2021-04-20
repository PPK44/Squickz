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

          // To eliminate duplicating users with various scores
          // Create an empty array
          // Check if element is in the array
          // If it is not, insert
          // If it is in there, check if score is higher or not
          var NoDuplicateDifficultytime10 = [];
          var NoDuplicateDifficultytime15 = [];
          var NoDuplicateDifficultytime20 = [];

          NoDuplicateDifficultytime10 = noDuplicateDifficulty(Difficultytime10);
          NoDuplicateDifficultytime15 = noDuplicateDifficulty(Difficultytime15);
          NoDuplicateDifficultytime20 = noDuplicateDifficulty(Difficultytime20);

          const topDifficulty210 = getTopN(
            NoDuplicateDifficultytime10,
            "score",
            5
          );
          const topDifficulty215 = getTopN(
            NoDuplicateDifficultytime15,
            "score",
            5
          );
          const topDifficulty220 = getTopN(
            NoDuplicateDifficultytime20,
            "score",
            5
          );

          d3.select(`#graph`).html("");
          d3.select(`#graph1`).html("");
          d3.select(`#graph2`).html("");

          if (topDifficulty210.length !== 0) {
            drawChart(topDifficulty210, "graph", Difficultytime10[0].time, 1);
          }
          if (topDifficulty215.length !== 0) {
            drawChart(topDifficulty215, "graph1", Difficultytime15[0].time, 1);
          }
          if (topDifficulty220.length !== 0) {
            drawChart(topDifficulty220, "graph2", Difficultytime20[0].time, 1);
          }
        } else {
          d3.select(`#graph`).html("");
          d3.select(`#graph1`).html("");
          d3.select(`#graph2`).html("");
        }
      });
  };

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

  // Flag - 0 = difficulty, 1 = users for x axis
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

    svg
      .append("text")
      .attr("x", chartWidth / 2 + margin)
      .attr("y", 380)
      .attr("text-anchor", "middle")
      .style("fill", "white")
      .text("Level");

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
        {/* <button
          className="box-border h-32 w-32 p-4 border-pink-200 border-4 m4 rounded-lg"
          onClick={getHighScoreData}
        >
          Personal high scores
        </button> */}
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

function noDuplicateDifficulty(DuplicateArray) {
  var newArray = [];

  DuplicateArray.forEach((d) => {
    let isInArray = false;
    if (newArray.length === 0) {
      newArray.push(d);
    }
    newArray.map((v, i) => {
      // If user is already in newArray
      // True: Check which score is higher and pop the lower one out
      // False: Insert user
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
