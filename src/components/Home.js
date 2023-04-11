import React, { useContext, useEffect } from 'react';
import check from "../Controllers/CheckJwt";
import UserContext from "../context/UserContext";


function Home() {
    const token = localStorage.getItem('authToken');
    const context = useContext(UserContext);
    const { FlipLoginStats } = context;
    useEffect(() => {
        check(token).then((res) => {
            if (res) {
                FlipLoginStats(true);
            }
        });
    }, []);
    const img1 = require('../assets/img1.jpg');
    const img5 = require('../assets/img5.gif');
    return (
        <div className="Home">
            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-mdb-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>

                </div>
                <div className="carousel-inner">
                    <div className="carousel-item ">
                        <img src={img1} className="bg-image"
                            alt="Image for app" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src={img5} className="bg-image"
                            alt="Image for app" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div class="plate">
                <p class="script"><span>website name</span></p>
                <p class="shadow text1">tag1</p>
                <p class="shadow text2">tag2</p>
                <p class="shadow text3">tag2</p>
                <p class="script"><span>finish</span></p>
            </div>
        </div>
    );
}

export default Home;
