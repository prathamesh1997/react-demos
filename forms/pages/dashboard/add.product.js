import Dialog from '@material-ui/core/Dialog';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from '@material-ui/core/styles'
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Firebase from '../../src/config/firebase';
import notify from '../../src/lib/notify';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const styles = theme => (
    {
        fab: {
            margin: theme.spacing.unit,
        },
        root: {
            height: 500,
        },
        container: {
            display: 'flex',
            margin: '0',
        },
        paper: {
            margin: theme.spacing.unit,
            marginLeft: theme.spacing.unit * 6,
            width: 500,
            height: 400
        },
        title: {
            margin: '1em',
            fontSize: '1.2em',
        },
        productName: {
            marginLeft: theme.spacing.unit * 6,
            marginRight: theme.spacing.unit,
            width: '14em',
        },
        mrp: {
            marginLeft: theme.spacing.unit * 6,
            marginRight: theme.spacing.unit,
            width: '8em',
        },
        button:
        {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit,
            marginTop: theme.spacing.unit * 2,
            width: '4em',
        }
    })


class AddProduct extends React.Component {

    constructor(props) {
        super(props)
        this.productRef = Firebase.db.collection('addProduct');
    }
    state = {
        checked: false,
        values:
        {
            productName: "",
            qty: "",
            mrp: "",
            discount: ""
        },
        // open:false
    };

    handleChange = () => {
        this.setState(state => ({
            checked: !state.checked,

        }));
    }
    handleValues = (event) => {
        // event.preventDefault();
        this.setState(
            {

                values: {
                    ...this.state.values,
                    [event.target.name]: event.target.value
                }
            }
        )
    }
   
    addProduct = (event) => {
        const { discount, mrp, qty, productName } = this.state.values
        event.preventDefault();
        this.productRef.add({
            discount,mrp,qty,productName
        }).then((docref)=>{
            console.log(docref)
            this.setState({open:true})
            this.setState(
                {
                    values:
                    {
                        productName: '',
                        qty: '',
                        mrp: '',
                        discount: ''
                    }
                }
            )
        }).catch(
            (error)=>
            {
                console.log(error)
            }
        )
    }
    render() {
        const { classes,message,onClose,variant } = this.props;
        const { checked } = this.state;
        const { productName, qty, mrp, discount } = this.state.values;


        return (
            <div className={classes.root}>
                <Fab color="secondary"
                    aria-label="Add"
                    className={classes.fab}
                    onClick={this.handleChange}
                    checked={checked}
                >
                    <AddIcon />
                </Fab>
                <div className={classes.container}>
                    <Fade in={checked}>
                        <Paper elevation={4} className={classes.paper}>
                            <Typography className={classes.title}>
                                Add Product Details
                       </Typography>
                            <form onSubmit={this.addProduct}>
                                <TextField
                                    id="productName"
                                    label="Product Name"
                                    placeholder="@7 Up .example"
                                    name="productName"
                                    multiline
                                    className={classes.productName}
                                    margin="normal"
                                    onChange={this.handleValues}
                                    values={productName}
                                />
                                <TextField
                                    id="qty"
                                    label="Quantity"
                                    placeholder="@12 .eg"
                                    // type="number"
                                    name="qty"
                                    multiline
                                    className={classes.quantity}
                                    margin="normal"
                                    onChange={this.handleValues}
                                    values={qty}

                                />
                                <TextField
                                    id="mrp"
                                    label="MRP"
                                    placeholder="@124 .eg"
                                    // type="number"
                                    multiline
                                    className={classes.mrp}
                                    margin="normal"
                                    onChange={this.handleValues}
                                    values={mrp}
                                    name="mrp"
                                />
                                <TextField
                                    id="discount"
                                    label="Discount"
                                    placeholder="@10% .eg"
                                    // type="number"
                                    multiline
                                    className={classes.mrp}
                                    margin="normal"
                                    onChange={this.handleValues}
                                    values={discount}
                                    name="discount"
                                />

                                <Button variant="contained"
                                    size="medium"
                                    color="primary"
                                    //   type="submit"
                                    className={classes.button}
                                    type="submit"
                                >
                                    Add
                                </Button>
                            </form>
                            <TextField
                                id="total"
                                label="Total"
                                placeholder=""
                                // type="number"
                                multiline
                                className={classes.productName}
                                margin="normal"
                                disabled={true}
                            />

                        </Paper>
                    </Fade>
                    <Typography className={classes.title}>
                        Welcome to dashboard
                       </Typography>
                </div>
            </div>
        )
    }
}

AddProduct.propTypes = {
    classes: PropTypes.object.isRequired,
    message:PropTypes.node,
    variant:PropTypes.oneOf(['success','error','warnings','info']).isRequired,
    onClose:PropTypes.func
};

export default withStyles(styles)(AddProduct);
