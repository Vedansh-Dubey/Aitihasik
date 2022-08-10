import { Button, Container, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { UserContext } from '../../context/index'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const LoginForm = (props) => {
    const [userData, setUserData] = useState({
        name: "", password: ""
    });
    // const [state, setState] = useContext(UserContext)
    const [loading, setLoading] = useState(false);

    useEffect(() => {

    }, []);

    let key, value;
    const handleInputs = (e) => {
        key = e.target.name;
        value = e.target.value;
        setUserData({ ...userData, [key]: value });
    };

    const submitData = async () => {
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_API}/login`, userData)
            setUserData({ name: "", password: "" })
            // setState({
            //     user: data.user,
            //     token: data.token
            // })
            window.localStorage.setItem('auth', JSON.stringify(data))
            toast.success("User login Succesfully")
            setTimeout(() => {
                props.handleClose1();
            }, 1500);

        } catch (error) {
            toast.error("Something went wrong")
            console.log(error);
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

                        <Button variant="contained" color="primary" size={"lg"} onClick={submitData} style={{ marginTop: "1rem" }} >Login</Button>
                    </Grid>
                </Grid>
                <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable theme="dark"
                />
            </Container>
        </>
    );
};

export default LoginForm;