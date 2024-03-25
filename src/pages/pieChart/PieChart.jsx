import { ResponsivePie } from "@nivo/pie";
import { Box, useMediaQuery, useTheme } from "@mui/material";

export default function PieChart({ isDashboard = false }) {
  const theme = useTheme();
  const mediaQuery = useMediaQuery("(min-width: 600px)");
  const data = [
    {
      id: "stylus",
      label: "stylus",
      value: 291,
      color: "hsl(154, 70%, 50%)",
    },
    {
      id: "java",
      label: "java",
      value: 119,
      color: "hsl(279, 70%, 50%)",
    },
    {
      id: "php",
      label: "php",
      value: 110,
      color: "hsl(105, 70%, 50%)",
    },
    {
      id: "haskell",
      label: "haskell",
      value: 205,
      color: "hsl(224, 70%, 50%)",
    },
    {
      id: "python",
      label: "python",
      value: 100,
      color: "hsl(176, 70%, 50%)",
    },
  ];

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
        strokeWidth: 1,
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

  return (
    <Box
      sx={{ height: isDashboard ? "300px" : "80vh" }}
      style={{
        width: isDashboard ? "100%" : "calc(100% - 64x)",
        marginLeft: isDashboard ? "0" : "64px",
        padding: isDashboard ? "5px" : "",
      }}
    >
      <ResponsivePie
        theme={barTheme}
        data={data}
        margin={
          isDashboard
            ? { top: 10, right: 0, bottom: 0, left: 10 }
            : { top: 40, right: 80, bottom: 80, left: 80 }
        }
        innerRadius={isDashboard ? 0.8 : 0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLinkLabels={isDashboard ? false : true}
        enableArcLabels={isDashboard ? false : true}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(255, 255, 255, 0.3)",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "ruby",
            },
            id: "dots",
          },
          {
            match: {
              id: "c",
            },
            id: "dots",
          },
          {
            match: {
              id: "go",
            },
            id: "dots",
          },
          {
            match: {
              id: "python",
            },
            id: "dots",
          },
          {
            match: {
              id: "scala",
            },
            id: "lines",
          },
          {
            match: {
              id: "lisp",
            },
            id: "lines",
          },
          {
            match: {
              id: "elixir",
            },
            id: "lines",
          },
          {
            match: {
              id: "javascript",
            },
            id: "lines",
          },
        ]}
        legends={
          isDashboard
            ? []
            : [
                {
                  anchor: "bottom",
                  direction: mediaQuery ? "row" : "column", // Use media query for direction
                  justify: false,
                  translateX: 0,
                  translateY: 56,
                  itemsSpacing: isDashboard ? 0 : 5,
                  itemWidth: isDashboard ? 70 : 100,
                  itemHeight: 18,
                  itemTextColor: theme.palette.text.primary,
                  itemDirection: "left-to-right",
                  itemOpacity: 1,
                  symbolSize: 18,
                  symbolShape: "circle",
                  effects: [
                    {
                      on: "hover",
                      style: { itemTextColor: theme.palette.text.primary },
                    },
                  ],
                },
              ]
        }
      />
    </Box>
  );
}
