{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "description": "Stock prices of 5 Tech Companies over Time.",
  "data": {
    "url": "COVID-stocks\Stock Data\IntraDayCovidStocks_60min_SP500.json"
  },
  "mark": {
    "type": "line",
    "point": {
      "filled": false,
      "fill": "white"
    }
  },
  "encoding": {
    "x": {
      "timeUnit": "year",
      "field": "date",
      "type": "temporal"
    },
    "y": {
      "aggregate": "mean",
      "field": "price",
      "type": "quantitative"
    },
    "color": {
      "field": "symbol",
      "type": "nominal"
    }
  },
  "config": {

    "background": "#FFFFFF",
    "title": {"anchor": "start", "fontSize": 18, "font": "Lato"},
    "axisX": {
      "domain": true,
      "domainColor": "#000000",
      "domainWidth": 1,
      "grid": false,
      "labelFontSize": 12,
      "labelFont": "Lato",
      "labelAngle": 0,
      "tickColor": "#000000",
      "tickSize": 5,
      "titleFontSize": 12,
      "titlePadding": 10,
      "titleFont": "Lato"
    },
    "axisY": {
      "domain": false,
      "domainWidth": 1,
      "grid": true,
      "gridColor": "#DEDDDD",
      "gridWidth": 1,
      "labelFontSize": 12,
      "labelFont": "Lato",
      "labelPadding": 8,
      "ticks": false,
      "titleFontSize": 12,
      "titlePadding": 10,
      "titleFont": "Lato",
      "titleAngle": 0,
      "titleY": -10,
      "titleX": 18
    },
    "legend": {
      "labelFontSize": 12,
      "labelFont": "Lato",
      "symbolSize": 100,
      "titleFontSize": 12,
      "titlePadding": 10,
      "titleFont": "Lato",
      "orient": "right",
      "offset": 10
    },
    "view": {"stroke": "transparent"},
    "range": {
      "category": [
        "#1696d2",
        "#ec008b",
        "#fdbf11",
        "#000000",
        "#d2d2d2",
        "#55b748"
      ],
      "diverging": [
        "#ca5800",
        "#fdbf11",
        "#fdd870",
        "#fff2cf",
        "#cfe8f3",
        "#73bfe2",
        "#1696d2",
        "#0a4c6a"
      ],
      "heatmap": [
        "#ca5800",
        "#fdbf11",
        "#fdd870",
        "#fff2cf",
        "#cfe8f3",
        "#73bfe2",
        "#1696d2",
        "#0a4c6a"
      ],
      "ordinal": [
        "#cfe8f3",
        "#a2d4ec",
        "#73bfe2",
        "#46abdb",
        "#1696d2",
        "#12719e"
      ],
      "ramp": [
        "#CFE8F3",
        "#A2D4EC",
        "#73BFE2",
        "#46ABDB",
        "#1696D2",
        "#12719E",
        "#0A4C6A",
        "#062635"
      ]
    },
    "area": {"fill": "#1696d2"},
    "rect": {"fill": "#1696d2"},
    "line": {"color": "#1696d2", "stroke": "#1696d2", "strokeWidth": 5},
    "trail": {
      "color": "#1696d2",
      "stroke": "#1696d2",
      "strokeWidth": 0,
      "size": 1
    },
    "path": {"stroke": "#1696d2", "strokeWidth": 0.5},
    "point": {"filled": true},
    "text": {
      "font": "Lato",
      "color": "#1696d2",
      "fontSize": 11,
      "align": "center",
      "fontWeight": 400,
      "size": 11
    },
    "style": {"bar": {"fill": "#1696d2", "stroke": null}},
    "arc": {"fill": "#1696d2"},
    "shape": {"stroke": "#1696d2"},
    "symbol": {"fill": "#1696d2", "size": 30}


  }
}