<template>
<div class="analitics">
    <h2 class="title">Аналитика</h2>
    <div class="container">
        <p class="analitics-graf">Аналитика по визитам</p>
        <div class="hello" ref="chartdiv">
        </div>
    </div>
    
</div>

</template>
<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


export default {
  mounted() {
    let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

    chart.paddingRight = 20;

    let data = [
        {"date":"2020-07-01","visits":213},
        {"date":"2020-07-02","visits":249},
        {"date":"2020-07-03","visits":179},
        {"date":"2020-07-04","visits":170},
        {"date":"2020-07-05","visits":184},
        {"date":"2020-07-06","visits":202},
        {"date":"2020-07-07","visits":198},
        {"date":"2020-07-08","visits":168},
        {"date":"2020-07-09","visits":176},
        {"date":"2020-07-10","visits":171},
        {"date":"2020-07-11","visits":190},
        {"date":"2020-07-12","visits":154},
        {"date":"2020-07-13","visits":246},
        {"date":"2020-07-14","visits":250},
        {"date":"2020-07-15","visits":227},
        {"date":"2020-07-16","visits":140},
        {"date":"2020-07-17","visits":170},
        {"date":"2020-07-18","visits":125},
        {"date":"2020-07-19","visits":106},
        {"date":"2020-07-20","visits":207},
        {"date":"2020-07-21","visits":222},
        {"date":"2020-07-22","visits":198},
        {"date":"2020-07-23","visits":204},
        {"date":"2020-07-24","visits":213},
        {"date":"2020-07-25","visits":145},
        {"date":"2020-07-26","visits":166},
        {"date":"2020-07-27","visits":163},
        {"date":"2020-07-28","visits":135},
        {"date":"2020-07-29","visits":45}
    ];

    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "visits";

    series.tooltipText = "{valueY.visits}";
    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    this.chart = chart;
  },

  beforeUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

}
</script>
<style scoped>
    .title {
        text-align: center;
        color: #fff;
        font-size: 32px;
    }
    .analitics-graf {
        color: #fff;
        margin-top: 20px;
    }
    .container {
        max-width: 1230px;
        margin: 0 auto;
        padding: 0 15px;
    }
    .hello {
        width: 100%;
        height: 500px;
    }
    .analitics {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        line-height: 21px;
        background-color: rgb(56, 54, 54);
        min-height: 100vh;
        padding: 20px 0px;
    }
</style>