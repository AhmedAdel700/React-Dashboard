import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";

export default function LineChart() {
  const theme = useTheme();
  const barTheme = {
    // background: "#ffffff",
    text: {
      fontSize: 11,
      fill: theme.palette.text.primary,
      outlineWidth: 0,
      outlineColor: "transparent",
    },
    axis: {
      domain: {
        line: {
          stroke: theme.palette.divider,
          strokeWidth: 1,
        },
      },
      legend: {
        text: {
          fontSize: 12,
          fill: theme.palette.text.primary,
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
      ticks: {
        line: {
          stroke: theme.palette.divider,
          strokeWidth: 1,
        },
        text: {
          fontSize: 11,
          fill: theme.palette.text.primary,
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
    },
    grid: {
      line: {
        stroke: theme.palette.divider,
        strokeWidth: 0,
      },
    },
    legends: {
      title: {
        text: {
          fontSize: 11,
          fill: theme.palette.text.primary,
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
      text: {
        fontSize: 11,
        fill: theme.palette.text.primary,
        outlineWidth: 0,
        outlineColor: "transparent",
      },
      ticks: {
        line: {},
        text: {
          fontSize: 10,
          fill: theme.palette.text.primary,
          outlineWidth: 0,
          outlineColor: "transparent",
        },
      },
    },
    annotations: {
      text: {
        fontSize: 13,
        fill: theme.palette.text.primary,
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
      link: {
        stroke: "#000000",
        strokeWidth: 1,
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
      outline: {
        stroke: "#000000",
        strokeWidth: 2,
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
      symbol: {
        fill: "#000000",
        outlineWidth: 2,
        outlineColor: "#ffffff",
        outlineOpacity: 1,
      },
    },
    tooltip: {
      container: {
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        fontSize: 12,
      },
      basic: {},
      chip: {},
      table: {},
      tableCell: {},
      tableCellValue: {},
    },
  };

  const data = [
    {
      id: "japan",
      color: "hsl(148, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 58,
        },
        {
          x: "helicopter",
          y: 162,
        },
        {
          x: "boat",
          y: 293,
        },
        {
          x: "train",
          y: 5,
        },
        {
          x: "subway",
          y: 164,
        },
        {
          x: "bus",
          y: 225,
        },
        {
          x: "car",
          y: 299,
        },
        {
          x: "moto",
          y: 289,
        },
        {
          x: "bicycle",
          y: 282,
        },
        {
          x: "horse",
          y: 232,
        },
        {
          x: "skateboard",
          y: 282,
        },
        {
          x: "others",
          y: 237,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(244, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 39,
        },
        {
          x: "helicopter",
          y: 175,
        },
        {
          x: "boat",
          y: 104,
        },
        {
          x: "train",
          y: 93,
        },
        {
          x: "subway",
          y: 86,
        },
        {
          x: "bus",
          y: 179,
        },
        {
          x: "car",
          y: 121,
        },
        {
          x: "moto",
          y: 281,
        },
        {
          x: "bicycle",
          y: 297,
        },
        {
          x: "horse",
          y: 292,
        },
        {
          x: "skateboard",
          y: 289,
        },
        {
          x: "others",
          y: 156,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(296, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 211,
        },
        {
          x: "helicopter",
          y: 106,
        },
        {
          x: "boat",
          y: 261,
        },
        {
          x: "train",
          y: 159,
        },
        {
          x: "subway",
          y: 48,
        },
        {
          x: "bus",
          y: 29,
        },
        {
          x: "car",
          y: 138,
        },
        {
          x: "moto",
          y: 50,
        },
        {
          x: "bicycle",
          y: 124,
        },
        {
          x: "horse",
          y: 295,
        },
        {
          x: "skateboard",
          y: 189,
        },
        {
          x: "others",
          y: 52,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(317, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 44,
        },
        {
          x: "helicopter",
          y: 105,
        },
        {
          x: "boat",
          y: 119,
        },
        {
          x: "train",
          y: 9,
        },
        {
          x: "subway",
          y: 145,
        },
        {
          x: "bus",
          y: 178,
        },
        {
          x: "car",
          y: 263,
        },
        {
          x: "moto",
          y: 298,
        },
        {
          x: "bicycle",
          y: 133,
        },
        {
          x: "horse",
          y: 158,
        },
        {
          x: "skateboard",
          y: 228,
        },
        {
          x: "others",
          y: 300,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(248, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 249,
        },
        {
          x: "helicopter",
          y: 273,
        },
        {
          x: "boat",
          y: 106,
        },
        {
          x: "train",
          y: 137,
        },
        {
          x: "subway",
          y: 144,
        },
        {
          x: "bus",
          y: 240,
        },
        {
          x: "car",
          y: 283,
        },
        {
          x: "moto",
          y: 295,
        },
        {
          x: "bicycle",
          y: 24,
        },
        {
          x: "horse",
          y: 285,
        },
        {
          x: "skateboard",
          y: 270,
        },
        {
          x: "others",
          y: 280,
        },
      ],
    },
  ];

  return (
    <Box
      sx={{ height: "80vh" }}
      style={{
        width: "calc(100% - 64x)",
        marginLeft: "64px",
      }}
    >
      <ResponsiveLine
        theme={barTheme}
        data={data}
        curve="catmullRom"
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
}
