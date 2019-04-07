import { Component } from "react";
import { Formik } from "formik";
import Register from "./register";
import LoginClass from "./login";
import * as Yup from "yup";

const validationSchema = Yup.object({
   
        // Yup.string("")
    //     name:Yup.string("Enter Name")
    //    .required("Name is required"),
    email: Yup.string("Enter Email")
        .required("Email is required"),
    password: Yup.string("")
        .min(6, "Password must be of 6 characters")
        .required("Password is required")
    // confirmPassword: Yup.string("Enter your password")
    //     .required("Confrim your password")
    //     .oneOf([Yup.ref("password")], "Password does not match")
})

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        // const classes = this.props;
        // const values = { name: "", email: "", confirmPassword: "", password: "" };
        const values={email:"",password:""};
        return (
            <React.Fragment>
                <Formik
                    render={
                        props => <LoginClass {...props} />
                        
                    }
                    initialValues={values}
                    validationSchema={validationSchema}
                />

            </React.Fragment>
             
        )
       
    }
}
export default InputForm;