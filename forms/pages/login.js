import { Grid, Paper, withStyles, Typography, Card, CardContent, TextField, Button } from "@material-ui/core";
import PropTypes from 'prop-types';
import classNames from 'classNames';
import { withRouter } from 'next/router';
import Firebase from '../src/config/firebase'
import Snackbar from '@material-ui/core/Snackbar';
import React ,{useState} from 'react';

function LoginClass(props) {

    let state = {
        open: false,
        vertical: 'top',
        horizontal: 'center',
    };

    const { classes } = props;
    const {
        values: {
            email, password
        },
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched
    } = props;
    // console.log(props.values);
    const change = (name, e) => {
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
    };
    const handle= (event) => {
        event.preventDefault();
        console.log(props);
        const { email, password } = props.values;
        
        Firebase.auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user)
                props.router.push('/dashboard')
            })
            .catch((error) => {
              
                alert(error); 
            })
    }
    const handleClose = () => {
        this.setState({ open: false });
    }
    const { vertical, horizontal, open } = state;
    return (

        <div className={classes.root}>

            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title}>
                        Login
                    </Typography>
                    <form className={classes.container} onSubmit={handle} >
                        <Grid container spacing={12} alignItems="flex-end">
                            <Grid item>
                                <TextField
                                    id="email"
                                    label="Enter Email"
                                    name="email"
                                    helperText={touched.email ? errors.email : ''}
                                    error={touched.email && Boolean(errors.email)}
                                    className={(classes.textField, classes.dense)}
                                    values={email}
                                    onChange={change.bind(null, "email")}
                                    margin="dense"
                                    variant="outlined"
                                // margin="normal"
                                />
                                <TextField
                                    id="password"
                                    label="Enter Password"
                                    name="password"
                                    helperText={touched.password ? errors.password : ''}
                                    error={touched.password && Boolean(errors.password)}
                                    className={(classes.textField, classes.dense)}
                                    values={password}
                                    onChange={change.bind(null, "password")}
                                    margin="dense"
                                    variant="outlined"

                                    type="password"
                                // margin="normal"
                                />
                                <br />
                                <Button variant="contained"
                                    type="submit"
                                    size="medium"
                                    color="primary"
                                    disabled={!isValid}
                                    className={classes.margin}>
                                    LogIn
                                    </Button>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">Invalid Email or Password</span>}
            />
        </div>


    );
}
const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing.unit * 2,
        // margin: 'auto',
    },

    title: {
        fontSize: 20,
    },
    card: {
        maxWidth: '30%',
        // marginLeft: 'auto',
        // marginRight: 'auto',
        margin: '40px auto',

    },
    textField: {
        marginLeft: theme.spacing.unit * 4,
        // marginRight: theme.spacing.unit,
        // alignItems:'center',

    },
    dense: {
        marginTop: 16,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',

    },
    margin: {
        margin: theme.spacing.unit,
    }

});
LoginClass.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withRouter(withStyles(styles)(LoginClass));
