import React from 'react';
import Typography from '@material-ui/core/Typography';
import './HomePage.css';
import content from  './cardContent';
import ImageCard from './ImageCard';
import Footer from './Footer';
const HomePage = () => {
    return (
        <div className="bg">
            <div>
                <div className="header">
                    <Typography variant="h3" style={{fontFamily: "Pacifico, cursive", textAlign: "center"}}>  Welcome to Movies App </Typography>
                </div>
                <div className="rootElement">
                {
        content.map((content, key)=>(
          <ImageCard key={key} content={content} checked={true} />
        ))
      }
                </div>
               <Footer />
            </div>
        </div>
    )
}

export default HomePage
