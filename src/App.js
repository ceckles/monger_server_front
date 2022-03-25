import "./App.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import  MediaCard from "./components/MediaCard/";
import MenuBar from  "./components/MenuBar/";

function App() {
  return (
    <div>
    <MenuBar/>
    <Box container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '70vh', maxWidth:'150vh' }}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={3}>
        <MediaCard/>
      </Grid>
      <Grid item xs={3}>
        <MediaCard/>
      </Grid>
      <Grid item xs={3}>
        <MediaCard/>
      </Grid>
      <Grid item xs={3}>
        <MediaCard/>
      </Grid>
    </Grid>
  </Box>
    </div>
  );
}

export default App;
