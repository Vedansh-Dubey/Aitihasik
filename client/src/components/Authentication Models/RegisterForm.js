import { Button, Container, Grid, TextField, Typography, MenuItem, Backdrop, CircularProgress, } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const RegisterForm = (props) => {
    const [userData, setUserData] = useState({
        name: "", cpassword: "", password: "", age: "", mobile: "",
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {

    }, []);

    let key, value;
    const handleInputs = (e) => {
        key = e.target.name;
        value = e.target.value;
        setUserData({ ...userData, [key]: value });
    };

    const submitData = (e) => {
        e.preventDefault();
        setLoading(true);
        if (
            userData.name.length == 0 ||
            userData.password.length == 0 ||
            userData.mobile.length != 10 ||
            userData.cpassword.length == 0 ||
            userData.age.length == 0
        ) {
            setLoading(false);
            toast.error("Fields Empty");
        } else {
            axios
                .post(`http://localhost:8000/register`, userData)
                .then((res) => {
                    setLoading(false);
                    toast.success("User Register Successfully");
                    setUserData({
                        name: "", cpassword: "", mobile: "", password: "", age: "",
                    });
                    setTimeout(() => {
                        props.handleClose();
                        
                    }, 1500);
                })
                .catch(function (error) {
                    setLoading(false);
                    if (error.response.data === "EMAIL ALREADY EXIST")
                        toast.error("Email Already Exist.");
                    else if (error.response.data === "INVALID DATA")
                        toast.warn("Please fill all the fields.");
                    else if (error.response.data === "WRONG KEY")
                        toast.warn("Wrong Key.");
                    else {
                        // console.log(error.response);
                        toast.warn("Something goes wrong. Please try again.");
                    }
                    // props.handleClose();
                });
        }
    };

    return (
        <>
            <Container
                maxWidth={"md"}
                style={{
                    backgroundColor: "#fff", borderRadius: "1rem", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", boxShadow: 24,
                }}
            >
                <Grid
                    container
                    spacing={4}
                    justifyContent={"center"}
                    alignItems={"center"}
                    style={{ padding: "3rem" }}
                >
                    <Grid item md={6} xs={6} display={{ md: "block", xs: "none" }}>
                        <img src={"https://startup.mp.gov.in/assets/img/login-bg.png"} alt="" srcSet="" style={{ width: "100%", height: "100%" }} />
                    </Grid>

                    <Grid item md={6} xs={12}>

                        <TextField margin={"dense"} fullWidth onChange={handleInputs} value={userData.name} name="name" color="primary" id="standard-basic" label="Username" variant="filled" required />
                        <TextField margin={"dense"} fullWidth type="password" onChange={handleInputs} value={userData.password} name="password" id="standard-basic" label="Password" variant="filled" color="primary" required />
                        <TextField margin={"dense"} fullWidth onChange={handleInputs} name="cpassword" type="password" color="primary" value={userData.cpassword} id="standard-basic" label="Confirm Password" variant="filled" required />

                        <TextField margin={"dense"} color="primary" fullWidth onChange={handleInputs} value={userData.age} name="age" id="standard-basic" label="Age" variant="filled" required />
                        <TextField margin={"dense"} color="primary" fullWidth onChange={handleInputs} value={userData.mobile} name="mobile" id="standard-basic" label="Mobile" type="number" variant="filled" required
                        />
                        <Button variant="contained" color="primary" size={"lg"} onClick={submitData} style={{ marginTop: "1rem" }} >Register</Button>
                    </Grid>
                </Grid>
                <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable theme="dark"
                />
            </Container>
        </>
    );
};

export default RegisterForm;