import { useEffect, useState } from "react";
import "./style/home.css";

function Home(){
    return(
    <div className="home">
        <section className="section1">
            <h1>Hi, I'm <span>Roduf Eleu</span></h1>
            <p className="p1">Welcome to my portfolio! This website shows my skills, projects, and achievements.</p>
            <div className="location">
                <img className="img2" src="/src/assets/pin.png" alt="pin" />
                <p className="p2">Tawog, Caramoan, Cam Sur</p>
            </div>

            <div className="num">
                <img className="img3" src="/src/assets/phone-call.png" alt="phone" />
                <p className="p3">94530343535</p>
            </div>

            <div className="email">
                <img className="img4" src="/src/assets/email.png" alt="email" />
                <p className="p4">rodufbulaqena@gmail.com</p>
            </div>
        </section>
        <section className="Section2">
            <img className="img1" src="/src/assets/pogi.png" alt="pogi" />
        </section>
    </div>
)}

export default Home;