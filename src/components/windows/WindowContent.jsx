import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Container, Typography } from '@mui/material';
import windowimg from '../../assets/windowdesimg.png'

const WindowContent = () => {

    return (
        <Container className='mb-4'>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Box>
                        <Typography variant="h4" className='fw-bold'>How to measure</Typography>
                        <Typography variant="body1">
                            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                   <img src={windowimg} alt="" />
                </Grid>
            </Grid>
        </Container>
    )
}

export default WindowContent
