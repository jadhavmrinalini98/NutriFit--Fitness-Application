import React from 'react'
import { Container, Button, Grid } from '@material-ui/core';
import { CallMissedSharp } from '@material-ui/icons';


import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link,useLocation } from "react-router-dom";
import logo from '../Products/assets/images.png';

const Cart = ({ cart, totalItems, onUpdateCartQty,onRemoveFromCart, handleEmptyCart }) => {
    

    const classes = useStyles();
    const location= useLocation();

    const EmptyCart = () => (
        <Typography  variant="subtitle1">You have no items in your shopping Cart, start adding items!
        <Link to='/Products' className={classes.link}>start adding some items</Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal: {cart.subtotal.formatted_with_symbol}

                </Typography>
                <div><Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart} >Empty cart</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button></div>
            </div>
        </>
    )

    if(!cart.line_items) return 'Loading...';
    return ( 
        <><AppBar position="fixed" className={classes.appBar} color="inherit" style={{ marginTop: '85px' }}>
            <Toolbar>
                <Typography component={Link} to="/Products" variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="NUTRI FIT" height="25px" className={classes.image} />
                    NUTRI FIT
                </Typography>
                <div className={classes.grow} />
                {location.pathname=='/Products' &&(

                <div className={classes.button}>
                    <IconButton component={Link} to="/Cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>)}
            </Toolbar>

        </AppBar>
        <Container>
                <div className={classes.toolbar} />
                <Typography className={classes.title} variant="h3" gutterbottom>Your Shopping Cart</Typography>
                {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
            </Container></>
    )
}

export default Cart;