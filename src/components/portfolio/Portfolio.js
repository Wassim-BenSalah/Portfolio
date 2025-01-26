import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import { Box, Grid } from "@mui/material";
import { info } from "../../info/Info";

export default function Portfolio({ innerRef }) {
    return (
        <Box id="portfolio" ref={innerRef} py={4}>
            <Grid container spacing={4} justifyContent="center">
                {info.portfolio && info.portfolio.map((project, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <PortfolioBlock 
                            image={project.image} 
                            live={project.live} 
                            source={project.source} 
                            title={project.title} 
                            images={project.images} // Assure-toi que `images` est inclus
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
