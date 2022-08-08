import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerInitiate } from "../redux/actions/action";
import React, { useState } from "react";
import {
  Container,
  Paper,
  Button,
  TextField,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      flexDirection: "column",
    },
    paper: {
      width: "350px",
      padding: "20px",
    },
    form: {
      textAlign: "center",
    },
    TextField: {
      margin: "10px 0px",
    },
    head: {
      marginBottom: "50px",
    },
    spinner: {
      display: "none",
    },
  };
});
const Signup = () => {
  const classes = useStyles();
  const [Email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userState = useSelector((state) => state);
  const [spinner, setspinner] = useState(userState.user ? true : false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Email === "" || password === "") {
      alert("kindly enter values in all the fields and than try to submit");
    } else {
      dispatch(registerInitiate(Email, password));
      setEmail("");
      setpassword("");
      navigate("/");
    }
  };
  return (
    <div className={classes.main}>
      <Container className={classes.container}>
        <Typography variant="h4" className={classes.head}>
          Hello, Merchant Signup/Signin
        </Typography>
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <TextField
              placeholder="e.g  abc@abc.com"
              label="Email"
              variant="outlined"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className={classes.TextField}
              type="email"
            />
            <br />
            <TextField
              placeholder="Enter Password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className={classes.TextField}
              type="password"
            />
            <br />
            <Button
              type="submit"
              variant="contained"
              endIcon={
                <CircularProgress className={spinner ? "" : classes.spinner} />
              }
            >
              Signup
            </Button>
            <Link to="/login">
              <Typography variant="body1">
                Already have an account? Login In
              </Typography>
            </Link>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Signup;
