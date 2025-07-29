import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const dummyStats = [
  {
    short: "https://short.ly/abc123",
    original: "https://example.com",
    createdAt: "2024-07-29 10:00",
    expiresAt: "2024-07-29 10:30",
    clicks: 5,
    logs: [
      {
        time: "10:05",
        source: "WhatsApp",
        location: "Mumbai, India",
      },
      {
        time: "10:15",
        source: "Chrome",
        location: "Delhi, India",
      },
    ],
  },
];

const StatisticsPage = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        URL Statistics
      </Typography>
      {dummyStats.map((stat, i) => (
        <Paper key={i} sx={{ mb: 3, p: 2 }}>
          <Typography variant="h6">{stat.short}</Typography>
          <Typography>Original: {stat.original}</Typography>
          <Typography>Created At: {stat.createdAt}</Typography>
          <Typography>Expires At: {stat.expiresAt}</Typography>
          <Typography>Total Clicks: {stat.clicks}</Typography>
          <Typography variant="subtitle1" mt={2}>
            Click Logs:
          </Typography>
          <List dense>
            {stat.logs.map((log, j) => (
              <ListItem key={j}>
                <ListItemText
                  primary={`Time: ${log.time}`}
                  secondary={`Source: ${log.source}, Location: ${log.location}`}
                />
              </ListItem>
            ))}
          </List>
        </Paper>
      ))}
    </Container>
  );
};

export default StatisticsPage;
