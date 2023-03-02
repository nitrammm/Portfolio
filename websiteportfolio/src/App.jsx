import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import lizard from './images/Rogue1.png'
import lawn from './images/Rogue2.png'
import sneaker from './images/Rogue3.png'


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Martin's Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              About Me
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Hi, my name is Martin Huerta. A Junior Software Engineer passionate about design and front-end web development, currently working with JavaScript, React, and other styling frameworks like MUI and Bulma. Recently finished The Coding Bootcamp at UT Austin, eager to keep learning and growing in the field.   
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>

              <Grid item xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={lizard}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h7" component="h2">
                      Project One
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      WikiTube
                    </Typography>
                    <Typography>
                      A YouTube and Wikipedia hybrid search engine, where you can look up a YouTuber and get their latest video plus their Wikipedia information.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" href='https://sophiaaramburu.github.io/WikiTube/'>View</Button>
                  </CardActions>
                </Card>
              </Grid>
                     <Grid item xs={12} sm={6} md={4}>
                            <Card
                              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                              <CardMedia
                                component="img"
                                sx={{
                                  // 16:9
                                  pt: '56.25%',
                                }}
                                image={lawn}
                                alt="random"
                              />
                              <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h7" component="h2">
                                  Project Two
                                </Typography>
                                <Typography gutterBottom variant="h5" component="h2">
                                  Know Mow Worries
                                </Typography>
                                <Typography>
                                  A lawn service app where self employed lawn care professionals can list their job postings in their local area, and get rated by reviews.
                                </Typography>
                              </CardContent>
                              <CardActions>
                                <Button size="small" href='https://knowmowworries.onrender.com/'>View</Button>
                              </CardActions>
                            </Card>
                          </Grid>
                                        <Grid item xs={12} sm={6} md={4}>
                                        <Card
                                          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                        >
                                          <CardMedia
                                            component="img"
                                            sx={{
                                              // 16:9
                                              pt: '56.25%',
                                            }}
                                            image={sneaker}
                                            alt="random"
                                          />
                                          <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h7" component="h2">
                                              Project Three
                                            </Typography>
                                            <Typography gutterBottom variant="h5" component="h2">
                                              Jays on Your Feet
                                            </Typography>
                                            <Typography>
                                              A luxury shoe marketplace where users can log in and shop for rare shoes.
                                            </Typography>
                                          </CardContent>
                                          <CardActions>
                                            <Button size="small" href='https://stormy-cliffs-65992.herokuapp.com/'>View</Button>
                                          </CardActions>
                                        </Card>
                                      </Grid>

          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
