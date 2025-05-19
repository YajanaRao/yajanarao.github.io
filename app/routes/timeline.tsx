import * as React from "react";
import * as d3 from "d3";

const ScaleBandChart = () => {
  const svgRef = React.useRef();

  React.useEffect(() => {
    const data = [
      {
        label: "Government School, Kargal (1st - 5th)",
        start: 2005,
        end: 2009,
        color: "steelblue",
      },
      {
        label: "Ramakrishna Ashrama (6th - 7th)",
        start: 2010,
        end: 2011,
        color: "tomato",
      },
      {
        label: "Hongirana School of Excelence (8th - 12th)",
        start: 2012,
        end: 2016,
        color: "brown",
      },
      {
        label: "Susandhi Fellowship",
        start: 2016,
        end: 2021,
        color: "steelblue",
      },
      {
        label: "KLE Technological University - Hubballi",
        start: 2018,
        end: 2021,
        color: "brown",
      },
      {
        label: "Github Contribution",
        start: 2018.5,
        end: new Date("2025-05-01"),
        color: "limegreen",
      },
      {
        label: "Serenity Music Player",
        start: new Date("2019-05-01"),
        end: 2023,
        color: "lightgreen",
      },
      {
        label: "Meditation",
        start: new Date("2020-07-01"),
        end: new Date("2025-05-01"),
        color: "orange",
      },
      {
        label: "Merahkee Technology Solutions",
        start: new Date("2021-08-01"),
        end: new Date("2023-07-01"),
        color: "green",
      },
      {
        label: "Mammoth Analytics",
        start: new Date("2023-06-15"),
        end: new Date("2025-05-31"),
        color: "mediumspringgreen",
      },
      {
        label: "Shortmic.com",
        start: new Date("2024-03-01"),
        end: 2025,
        color: "tomato",
      },
      // Add your data here
    ];

    // Convert all start and end to Date objects if not already
    data.forEach((d) => {
      if (!(d.start instanceof Date)) {
        // If start is a number like 2020.5, convert to Date
        if (typeof d.start === "number") {
          const year = Math.floor(d.start);
          const monthFrac = d.start - year;
          const month = Math.floor(monthFrac * 12);
          d.start = new Date(year, month, 1);
        } else {
          d.start = new Date(d.start);
        }
      }
      if (!(d.end instanceof Date)) {
        if (typeof d.end === "number") {
          const year = Math.floor(d.end);
          const monthFrac = d.end - year;
          const month = Math.floor(monthFrac * 12);
          d.end = new Date(year, month, 1);
        } else {
          d.end = new Date(d.end);
        }
      }
    });

    const margin = { top: 30, right: 30, bottom: 30, left: 30 };
    const width = 800;
    const height = 600;
    const endYear = new Date().getFullYear() + 1; // Get the current year and add 1

    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom);

    // x scale: convert date to float year
    const x = d3.scaleLinear().domain([1995, endYear]).range([0, width]);

    // Helper to convert Date to float year
    function dateToYearFloat(date: Date) {
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();
      return year + month / 12 + (day - 1) / 365;
    }

    const y = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, height])
      .padding(0.2);

    const line = svg
      .append("line")
      .attr("y1", margin.top - 10)
      .attr("y2", height + margin.bottom)
      .attr("stroke", "rgba(0,0,0,0.2)")
      .style("pointer-events", "none");

    svg
      .append("g")
      .call(
        d3
          .axisTop(x)
          .ticks(10)
          .tickFormat((d) => d)
      )

      .attr(
        "transform",
        (d, i) => `translate(${margin.left} ${margin.top - 10})`
      );

    svg
      .append("g")
      .call(
        d3
          .axisBottom(x)
          .ticks(10)
          .tickFormat((d) => d)
      )
      .attr(
        "transform",
        (d, i) => `translate(${margin.left} ${height + margin.bottom})`
      );

    const g = svg
      .append("g")
      .attr("class", "group")
      .attr("transform", `translate(${margin.left} ${margin.top})`);

    const groups = g
      .selectAll("g")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "item");

    groups
      .append("rect")
      .attr("x", (d) => x(dateToYearFloat(d.start)))
      .attr("y", (d) => y(d.label))
      .attr(
        "width",
        (d) => x(dateToYearFloat(d.end)) - x(dateToYearFloat(d.start))
      )
      .attr("height", y.bandwidth())
      .attr("fill", (d) => d.color);

    // Add labels next to bars
    groups
      .append("text")
      .attr("x", (d) => x(dateToYearFloat(d.start)) - 10)
      .attr("y", (d) => y(d.label) + y.bandwidth() / 2 + 5)
      .attr("text-anchor", "end")
      .attr("font-size", "10px")
      .text((d) => d.label);

    // Add duration labels at the center of bars
    groups
      .append("text")
      .attr(
        "x",
        (d) =>
          x(dateToYearFloat(d.start)) +
          (x(dateToYearFloat(d.end)) - x(dateToYearFloat(d.start))) / 2
      )
      .attr("y", (d) => y(d.label) + y.bandwidth() / 2 + 5)
      .attr("text-anchor", "middle")
      .attr("font-size", "10px")
      .attr("fill", "#fff")
      .text((d) => {
        const start = d.start;
        const end = d.end;
        const diff = dateToYearFloat(end) - dateToYearFloat(start);
        return `${diff.toFixed(1).replace(/\.0+$/, "")} yrs`;
      });

    // Add a group for the highlighted year label above the bottom x-axis
    const yearLabelGroup = svg.append("g").style("display", "none");
    const yearLabelBg = yearLabelGroup
      .append("rect")
      .attr("height", 22)
      .attr("rx", 4)
      .attr("fill", "#222")
      .attr("opacity", 0.8);

    const yearLabelText = yearLabelGroup
      .append("text")
      .attr("y", height + margin.bottom - 8)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .attr("fill", "#fff")
      .attr("font-weight", "bold");

    svg.on("mousemove", function (event) {
      let [mouseX] = d3.pointer(event);
      // Convert mouseX to year and month
      const yearFloat = x.invert(mouseX - margin.left);
      const year = Math.floor(yearFloat);
      const month = Math.floor((yearFloat - year) * 12) + 1;
      const day = Math.floor(((yearFloat - year) * 12 - (month - 1)) * 30) + 1;
      // Format as yyyy.mm.dd
      const label = `${year}.${month.toString().padStart(2, "0")}.${day
        .toString()
        .padStart(2, "0")}`;
      line.attr("transform", `translate(${mouseX} 0)`);

      // Show and update year label above bottom axis
      yearLabelGroup.style("display", "block");
      yearLabelText.text(label);
      // Get text width for background
      const textNode = yearLabelText.node();
      const textWidth = textNode ? textNode.getBBox().width : 30;
      yearLabelBg
        .attr("width", textWidth + 16)
        .attr("x", mouseX - (textWidth + 16) / 2)
        .attr("y", height + margin.bottom - 26);
      yearLabelText.attr("x", mouseX);
    });

    svg.on("mouseleave", function () {
      yearLabelGroup.style("display", "none");
    });
  }, []);

  return <svg ref={svgRef} />;
};

function TimeLine() {
  return (
    <div>
      <h1>TimeLine</h1>
      <ScaleBandChart />
    </div>
  );
}

export default TimeLine;
