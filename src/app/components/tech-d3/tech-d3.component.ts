import { Component, OnInit, ElementRef } from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';
import * as D from 'd3';

@Component({
  selector: 'tech-d3',
  templateUrl: './tech-d3.component.html',
  styleUrls: ['./tech-d3.component.css']
})
export class TechD3Component implements OnInit {

  private d3: D3; // <-- Define the private member which will hold the d3 reference
  private parentNativeElement: any;
  private d3Svg: any;
  constructor(element: ElementRef, d3Service: D3Service) { // <-- pass the D3 Service into the constructor
    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
    this.parentNativeElement = element.nativeElement;
  }

  ngOnInit() {
    let d3 = this.d3; // <-- for convenience use a block scope variable
    let d3ParentElement: Selection<any, any, any, any>; // <-- Use the Selection interface (very basic here for illustration only)

    // ...

    if (this.parentNativeElement !== null) {

      // set the dimensions and margins of the graph
      var margin = { top: 20, right: 20, bottom: 30, left: 40 },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

      // set the ranges
      var x = d3.scaleBand()
        .range([0, width])
        .padding(.5);
      var y = d3.scaleLinear()
        .range([height, 0]);

      // append the svg object to the body of the page
      // append a 'group' element to 'svg'
      // moves the 'group' element to the top left margin
      var svg = d3.select("#bar").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

      // get the data
      D.json("../../../tech-data.json", function (error, data: any) {
        if (error) throw error;

        // format the data
        data.technologies.forEach(function (d) {
          d.popularity = d.popularity;
        });

        // Scale the range of the data in the domains
        x.domain(data.technologies.map(function (d) { return d.name; }));
        y.domain([0, d3.max(data.technologies, function (d: any) { return d.popularity; })]);

        // append the rectangles for the bar chart
        svg.selectAll("rect")
          .data(data.technologies)
          .enter()
          .append("rect")
          .attr("height", 0)
          .attr("y", height)
          .transition().duration(3000)
          .delay(function (d, i) { return i * 200; })
          .attr("x", function (d: any) { return x(d.name); })
          .attr("width", x.bandwidth())
          .attr("y", function (d: any) { return y(d.popularity); })
          .attr("height", function (d: any) { return height - y(d.popularity); })
          .style("fill", function (d: any) { return 'rgb(20, 20, ' + (d.popularity * 2) + ')' });


        // value on bar

        svg.selectAll('text')
          .data(data.technologies)
          .enter()
          .append('text')
          .attr("height", 0)
          .attr("y", height)
          .transition().duration(3000)
          .delay(function (d, i) { return i * 200; })
          .text(function (d: any) {
            return d.popularity + '%';
          })
          .attr("x", function (d: any) {
            return x(d.name) + x.bandwidth() / 2;
          })
          .attr("y", function (d: any) {
            return y(d.popularity) + 20;
          })
          .attr("font-family", 'sans-serif')
          .attr("font-size", '13px')
          .attr("font-weight", 'bold')
          .attr("fill", 'white')
          .attr("text-anchor", 'middle');

        // add the x Axis
        svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));

        // add the y Axis
        svg.append("g")
          .call(d3.axisLeft(y));
        svg.selectAll("rect").on("click", function(d:any){location.replace("/technology/"+d.name);})
      });
    }
    
  }

}
