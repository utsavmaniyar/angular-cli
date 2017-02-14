import { Component, OnInit, ElementRef, ViewEncapsulation, Input } from '@angular/core';
import { D3Service, D3, Selection } from 'd3-ng2-service';
import * as D from 'd3';

@Component({
  selector: 'tech-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HistoryComponent implements OnInit {

  private d3: D3; // <-- Define the private member which will hold the d3 reference
  private parentNativeElement: any;
  private d3Svg: any;
  private data;
  
  @Input() dataView;
  constructor(element: ElementRef, d3Service: D3Service) { // <-- pass the D3 Service into the constructor
    this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
    this.parentNativeElement = element.nativeElement;
    var _this = this;
    //setTimeout(function(){console.log(_this.dataView);},500);
  }

  // test(){

  // console.log(this.dataView);
  // }

  ngOnInit() {
    let d3 = this.d3; // <-- for convenience use a block scope variable
    let d3ParentElement: Selection<any, any, any, any>; // <-- Use the Selection interface (very basic here for illustration only)

    // ...
    let data = this.dataView;
    console.log("from history" + data);    
    if (this.parentNativeElement !== null) {

      // set the dimensions and margins of the graph
      var margin = { top: 20, right: 20, bottom: 30, left: 40 },
        width = document.getElementById("bar12").offsetWidth - margin.left - margin.right,
        // width = Math.floor(window.innerWidth*.7) - margin.left - margin.right,

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
      var svg = d3.select("#bar12").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

        
        // Scale the range of the data in the domains
        x.domain(data.map(function (d) { return d.name; }));
        y.domain([0, d3.max(data, function (d: any) { return d.view; })]);

        // append the rectangles for the bar chart
        svg.selectAll("rect")
          .data(data)
          .enter()
          .append("rect")
          .attr("class", "bar")
          .attr("height", 0)
          .attr("y", height)
          .transition().duration(3000)
          .delay(function (d, i) { return i * 200; })
          .attr("x", function (d: any) { return x(d.name); })
          .attr("width", x.bandwidth())
          .attr("y", function (d: any) { return y(d.view); })
          .attr("height", function (d: any) { return height - y(d.view); })
          .style("fill", function (d: any) { return 'rgb(20, 20, ' + Math.floor(d.popularity * 2.55) + ')' });

          svg.selectAll("rect")
          .data(data)
          .append("title")
          .text(function(d:any) { return d.name; });

        // value on bar

        svg.selectAll('text')
          .data(data)
          .enter()
          .append('text')
          .attr("height", 0)
          .attr("y", height)
          .transition().duration(3000)
          .delay(function (d, i) { return i * 200; })
          .text(function (d: any) {
            return d.view;
          })
          .attr("x", function (d: any) {
            return x(d.name) + x.bandwidth() / 2;
          })
          .attr("y", function (d: any) {
            return y(d.view) + 20;
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
      
    }
  }

  }
