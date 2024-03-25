import { Stack, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./data";
import Card from "./Card";

export default function Row1() {
  const theme = useTheme();
  const cardsData = [
    {
      icon: (
        <EmailIcon
          sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
        />
      ),
      title: "12,361",
      subtitle: "Emails Sent",
      increase: "+14%",
      data: data1,
      color: "paired",
    },
    {
      icon: (
        <PointOfSaleIcon
          sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
        />
      ),
      title: "431,225",
      subtitle: "Sales Obtained",
      increase: "+21%",
      data: data2,
      color: "nivo",
    },
    {
      icon: (
        <PersonAddIcon
          sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
        />
      ),
      title: "32,441",
      subtitle: "New Clients",
      increase: "+5%",
      data: data3,
      color: "dark2",
    },
    {
      icon: (
        <TrafficIcon
          sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
        />
      ),
      title: "1,325,134",
      subtitle: "Traffic Received",
      increase: "+43%",
      data: data4,
      color: "category10",
    },
  ];

  const renderedCards = cardsData.map((card) => {
    return (
      <Card
        key={card.title}
        icon={card.icon}
        title={card.title}
        subTitle={card.subtitle}
        chartData={card.data}
        increase={card.increase}
        scheme={card.color}
      />
    );
  });

  return (
    <Stack
      direction="row"
      flexWrap={"wrap"}
      gap={1}
      justifyContent={{ xs: "center", sm: "space-evenly", md: "space-between" }}
    >
      {renderedCards}
    </Stack>
  );
}
