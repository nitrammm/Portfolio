import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import DeckOutlinedIcon from '@mui/icons-material/DeckOutlined';
import Typography from '@mui/material/Typography';

function HomeBar() {
    return (
<AppBar position="relative">
<Toolbar>
  <DeckOutlinedIcon sx={{ mr: 2 }} />
  <Typography variant="h6" color="inherit" noWrap>
    Martin's Portfolio
  </Typography>
</Toolbar>
</AppBar>
    );
}

export default HomeBar;