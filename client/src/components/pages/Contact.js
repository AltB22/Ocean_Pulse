import React from "react";
import { Image } from 'react-bootstrap';
import Image1 from '../Contact Images/Beaus Contact Pic.jpg';
import Image2 from '../Contact Images/Billys Contact Pic.jpg';
import Image3 from '../Contact Images/James Contact Pic.jpg';
import Image4 from '../Contact Images/Vinni Contact Pic.jpeg';

function CircleUser(props) {
    const { alt } = props;

    const style = {
        width: '10%',
        height: '90%',
        borderRadius: '50%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        marginBottom: '10px',
        marginTop: '10px',
        boxShadow: '0 0 10px black',
        color: 'black',
        fontSize: '20px',
        fontWeight: 'bold',
        textDecoration: 'none',
        textShadow: '0 0 10px white',
        fontFamily: 'Arial, Helvetica, sans-serif',
    };

    return (

        <div className="Header">
            <div>
                <h1>Meet the Team</h1>
            </div>
            <section className="Contact">
                <Image style={style} src={Image1} alt={alt} fluid />
                <a style={style} href="https://github.com/BRhouma">Beau</a>
                <br></br>
                <Image style={style} src={Image2} alt={alt} fluid />
                <a style={style} href="https://github.com/AltB22">William</a>
                <br></br>
                <Image style={style} src={Image3} alt={alt} fluid />
                <a style={style} href="https://github.com/Kaneknah">James</a>
                <br></br>
                <Image style={style} src={Image4} alt={alt} fluid />
                <a style={style} href="https://github.com/Vinni99">Vinni</a>
            </section>
        </div>

    );
}

export default CircleUser;
