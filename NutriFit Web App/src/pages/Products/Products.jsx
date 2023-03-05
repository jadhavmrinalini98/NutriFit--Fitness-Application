import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from './styles';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from "react-router-dom";

//import useStyles from './styles'

import logo from './assets/images.png';

const Products = ({ products, onAddToCart , totalItems }) => {
    const classes= useStyles();

    

        return ( 
        <><>
                <AppBar position="fixed" className={classes.appBar} color="inherit" style={{marginTop:'85px'}}>
                    <Toolbar>
                        <Typography component={Link} to="/Products" variant="h6" className={classes.title} color="inherit">
                            <img src={logo} alt="NUTRI FIT" height="25px" className={classes.image} />
                            NUTRI FIT
                        </Typography>
                        <div className={classes.grow} />
                        

                        <div className={classes.button}>
                            <IconButton component={Link} to="/Cart" aria-label="Show cart items" color="inherit" >
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    </Toolbar>

                </AppBar>
            </><main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Grid container justify="center" spacing={4}>
                        {products.map((product) => (
                            <Grid item key={products.id} xs={12} ms={4} lg={3}>
                                <Product product={product} onAddToCart={onAddToCart}/>
                            </Grid>

                        ))}
                    </Grid>
                </main></> 
    )
    

}

export default Products;