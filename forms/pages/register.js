// import Card, { withStyles } from '@material-ui/core/Card';
import { Card, withStyles, CardContent, Typography, TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import {MDCTextFieldHelperText} from '@material-ui/core';
import {useState} from 'react'
import classNames from 'classNames';
// Function
function Register(props) {
   
    const { classes } = props;
    const {
        values: {
            name,email, password, confirmPassword
        },
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched
    } = props;
        console.log(props.values);
    const change = (name, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
    };

    return (

        <Card className={classes.card} >
            <CardContent>
                <Typography className={classes.title}>
                    Register
                </Typography>
                <form className={classes.container} onSubmit={() => {
                    alert("Submitted");
                }}>
                    <TextField
                        id="name"
                        label="Full Name"
                        name="name"
                        helperText={touched.name ? errors.name:''}
                        error={touched.name && Boolean(errors.name)}
                        // type="name"
                        className={classes.textField}
                        values={name}
                        onChange={change.bind(null,"name")}
                        margin="normal"

                    />
                    {/* <TextField
                        id="lastName"
                        label="Last Name"
                        type="name"
                        className={classes.textField}
                        margin="normal"
                        variant="filled"
                    /> */}
                    <TextField
                        id="email"
                        label="Email Address"
                        name="email"
                        helperText={touched.email ? errors.email:''}
                        error={touched.email && Boolean(errors.email)}
                        // type="name"
                        className={classes.textField}
                        values={email}
                        onChange={change.bind(null,"email")}
                        margin="normal"

                    />
                    <TextField
                        id="Password"
                        label="Enter Password"
                        type="password"
                        name="password"
                        helperText={touched.password ? errors.password:''}
                        error={touched.password && Boolean(errors.password)}
                        className={classes.textField}
                        values={password}
                        onChange={change.bind(null,"password")}
                        margin="normal"

                    />
                    <TextField
                        id="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        helperText={touched.confirmPassword ? errors.confirmPassword:''}
                        error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                        className={classes.textField}
                        values={confirmPassword}
                        onChange={change.bind(null,"confirmPassword")}
                        margin="normal"


                    />
                    <Button variant="contained" 
                            size="medium" color="success"
                            disabled={!isValid}
                            className={classes.button}>
                        Register
                    </Button>

                </form>
            </CardContent>
        </Card>
    );
}
// Applied Styling
const styles = theme => ({
    card: {
        maxWidth: '30%',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        margin: '40px auto',
    },
    button: {
        margin: theme.spacing.unit * 2,
        borderColor: 'black',

    },
    title: {
        fontSize: 20,

    },

    textField: {
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit,
        width: 300,
        backgroundColor: 'white !important',
    },
});
Register.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
