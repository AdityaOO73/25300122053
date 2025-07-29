import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  Paper,
} from '@mui/material';

const UrlShortener = () => {
  const [urls, setUrls] = useState([{ longUrl: '', validity: '', shortcode: '' }]);
  const [results, setResults] = useState([]);

  const handleChange = (index, field, value) => {
    const updated = [...urls];
    updated[index][field] = value;
    setUrls(updated);
  };

  const handleAddUrl = () => {
    if (urls.length < 5) {
      setUrls([...urls, { longUrl: '', validity: '', shortcode: '' }]);
    }
  };

  const handleShorten = () => {
    const newResults = urls.map((url, index) => ({
      original: url.longUrl,
      short: `https://short.ly/${url.shortcode || `abc${index}`}`,
      expiresIn: url.validity ? `${url.validity} mins` : 'Never',
    }));
    setResults(newResults);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        URL Shortener
      </Typography>

      {urls.map((url, i) => (
        <Paper key={i} sx={{ p: 2, mb: 2 }}>
          <Grid container spacing={2}>
            <Grid xs={12} sm={6}>
              <TextField
                label="Long URL"
                fullWidth
                value={url.longUrl}
                onChange={(e) => handleChange(i, 'longUrl', e.target.value)}
              />
            </Grid>
            <Grid xs={12} sm={3}>
              <TextField
                label="Validity (min)"
                fullWidth
                type="number"
                value={url.validity}
                onChange={(e) => handleChange(i, 'validity', e.target.value)}
              />
            </Grid>
            <Grid xs={12} sm={3}>
              <TextField
                label="Shortcode (optional)"
                fullWidth
                value={url.shortcode}
                onChange={(e) => handleChange(i, 'shortcode', e.target.value)}
              />
            </Grid>
          </Grid>
        </Paper>
      ))}

      <Box display="flex" gap={2} mb={3}>
        <Button variant="outlined" onClick={handleAddUrl} disabled={urls.length >= 5}>
          Add URL
        </Button>
        <Button variant="contained" onClick={handleShorten}>
          Shorten All
        </Button>
      </Box>

      {results.length > 0 && (
        <Box>
          <Typography variant="h6" gutterBottom>
            Shortened URLs
          </Typography>
          {results.map((res, i) => (
            <Paper key={i} sx={{ p: 2, mb: 1 }}>
              <Typography><strong>Original:</strong> {res.original}</Typography>
              <Typography><strong>Short:</strong> {res.short}</Typography>
              <Typography><strong>Expires In:</strong> {res.expiresIn}</Typography>
            </Paper>
          ))}
        </Box>
      )}
    </Container>
  );
};

export default UrlShortener;
