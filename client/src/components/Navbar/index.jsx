import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { Link } from 'react-router-dom'
import navstyle from "./index.module.css"




const Navbar = () => {

    return (
        <>
            <Box>
                <AppBar className={navstyle.nav} position="static">
                    <Toolbar>
                        {/* sx = {flexGrow: 1} allows us to set all content at right except typography */}
                        <Typography variant="h4" sx={{ flexGrow: 1 }}>
                            <Link className={navstyle.button} to="/">Home</Link>
                        </Typography>
                        <Button color="inherit"> <Link className={navstyle.button} to="/users">Users</Link> </Button>
                        <Button color="inherit"> <Link className={navstyle.button} to="/add-user">Add User</Link>  </Button>

                    </Toolbar>
                </AppBar>
            </Box>
            <div className={navstyle.bottomNav}>
                <div>
                    <Button className={navstyle.button} color="inherit"> Contact</Button>
                    <Button className={navstyle.button} color="inherit"> About</Button>
                    <Button className={navstyle.button} color="inherit"> Portfolio</Button>
                    <Button className={navstyle.button} color="inherit"> Blog</Button>
                    <Button className={navstyle.button} color="inherit"> Services</Button>
                </div>
            </div>
        </>
    )
}

export default Navbar