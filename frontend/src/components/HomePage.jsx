import React from 'react';
import Typography from '@material-ui/core/Typography';
import './HomePage.css';
const HomePage = () => {
    return (
        <div className="bg">
            <div>
                <div className="header">
                    <Typography variant="h3" style={{fontFamily: "Pacifico, cursive", textAlign: "center"}}>  Welcome to Movies App </Typography>
                </div>
            </div>
        </div>
    )
}

export default HomePage
