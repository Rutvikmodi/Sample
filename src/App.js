import React, { Component } from "react";
import Navbar from "./navbar";
import "./App.css";
import userlogo from "./user.png";
import TextField from "@material-ui/core/TextField";
import "bootstrap/dist/css/bootstrap.min.css";
import { makeStyles } from "@material-ui/core/styles";
import { InputAdornment, withStyles } from "@material-ui/core";
import background from "./asfalt-dark.png";

const styles = theme => ({
    multilineColor: {
        color: "white"
    }
});
var sectionStyle = {
  backgroundImage: "url(" + background + ")"
};
const StyledButton = withStyles({
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderWidth: "2px",
            borderRadius: "20px",
            borderColor: "white"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderWidth: "2px",
            borderRadius: "20px",
            borderColor: "red"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "2px",
            borderRadius: "20px",
            borderColor: "green"
        }
    }
})(TextField);

const StyledButton1 = withStyles({
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderWidth: "2px",
            borderRadius: "20px",
            borderColor: "white"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderWidth: "2px",
            borderRadius: "20px",
            borderColor: "red"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "2px",
            borderRadius: "20px",
            borderColor: "green"
        },
        marginLeft: "145px"
    }
})(TextField);
export default class App extends Component {
    constructor(props) {
        super(props);

    }
    onChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };
    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <img src={background} className="main" />
                <div className="main">
                    <Navbar></Navbar>
                    <title>SPARK SQL TOOL</title>
                    <link rel="stylesheet" type="text/css" href="App.css" />
                    <div className="companybox">
                        <img src={userlogo} className="user" />
                        <form>
                            <p>ENTER THE STATEMENT HERE :</p>
                            <br></br>
                            <textarea
                                type="textarea"
                                name="address"
                                placeholder="ENTER SPARK SQL STATEMENT"
                                id = "oo"
                                required
                            />
                            <br></br>
                            <br></br>
                            <br></br>
                            <button class="button button1">SUBMIT</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
App = withStyles(styles)(App);