import React from 'react'
import { Layout } from '../Component/Layout';
import Grid from '@mui/material/Grid';

export const Home = () => {
    return (
        <>
            <Layout>
                <Grid container
                    direction="row"
                    sx={{
                        justifyContent: "space-around",
                        alignItems: "center",
                    }}
                    style={{ height: "300px" }} spacing={2}>
                    <Grid item xs={6} sm={12}>
                        text 1
                    </Grid>
                    <Grid item xs={6} sm={12}>
                        text 2
                    </Grid>
                </Grid>
            </Layout>
        </>
    )
}
