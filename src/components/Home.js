import React from 'react';

function Home() {
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
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item ">
                        <img src={img1} className="bg-image"
                             alt="Image for app"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img src={img5} className="bg-image"
                             alt="Image for app"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <img  src={img1} className="bg-image"
                             alt="Image for app"/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi culpa earum eius in ipsam
                laudantium nihil nulla quae quisquam? Impedit, sequi, vitae! Animi atque, culpa cum cupiditate dolorum
                ducimus ea eveniet excepturi expedita illo inventore iste itaque iure labore magnam necessitatibus nisi
                officia officiis praesentium quisquam quo recusandae similique suscipit tempora tempore temporibus ut
                vitae? A cumque, eum excepturi iste minus perspiciatis provident quos sequi. Assumenda distinctio eaque
                ex illo iste laudantium quam repellendus sequi vero voluptate! Aliquid blanditiis enim eos ex ipsum
                maxime necessitatibus qui temporibus, tenetur ut. Accusamus assumenda dignissimos et expedita, ipsa iste
                iusto magnam magni minus nam non officia optio porro quasi, repudiandae ullam voluptate. Accusamus
                aliquid aut autem consectetur deserunt eius eligendi ipsa iusto nesciunt nisi officiis quisquam quo quos
                saepe sunt ut, voluptas. Cupiditate eveniet perferendis quae tempore veniam? Aspernatur corporis dicta
                ducimus ea, et excepturi quasi reprehenderit sapiente vitae voluptatem. Ab ipsum quaerat quam qui sint!
                Architecto beatae consectetur distinctio ex quae quasi! Ad aliquid animi architecto atque consequatur
                corporis, cum cupiditate dignissimos dolore, eius explicabo fuga fugit impedit in inventore iure labore
                laborum maiores minima molestiae natus non perspiciatis possimus quaerat qui saepe sed tempora
                temporibus velit voluptas? Ad alias amet asperiores autem ex excepturi fuga fugiat fugit incidunt magni
                maiores molestias neque odit, officia sint soluta unde vero voluptates. A ab amet assumenda at debitis
                enim exercitationem fugiat in laudantium, modi nobis provident repudiandae tempora vel veniam.
                Accusantium dicta error est, optio possimus provident quas qui quis voluptates? Aliquam commodi
                consectetur corporis cumque deleniti earum, error ex facere itaque iusto minus nisi nulla odio officia
                officiis, omnis quaerat qui ratione, repellendus rerum sequi sint totam ut vel veniam veritatis vero?
                Iusto, qui, quisquam. Asperiores aspernatur, dignissimos fugiat iusto molestiae, necessitatibus odit
                omnis porro quaerat, tenetur voluptatem voluptatibus! Aut explicabo nisi placeat quia, sit totam vitae!
                Aliquam assumenda consequatur, facere possimus quod similique vitae voluptas! Accusamus, dignissimos
                eius eligendi et excepturi, explicabo fugiat harum minima, modi nisi placeat quam quas tempore. A autem
                dolorem esse eveniet excepturi, iure nesciunt rem repellat sed sint. Accusantium asperiores, commodi
                corporis dolor dolores eos esse fugiat voluptas? A accusamus animi aperiam atque debitis, et eum
                explicabo inventore maxime necessitatibus officia quisquam recusandae repellat, tempora totam ut
                voluptate. Deleniti dolorum eius eveniet labore optio, sed unde voluptates? Accusamus, culpa, earum et,
                ex illo minima nulla obcaecati placeat porro qui quia recusandae voluptas! Dolorem ea eaque
                mollitia.</p>
        </div>
    );
}

export default Home;
