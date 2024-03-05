// import React from 'react'
import vg from "../assets/2.webp"
import {
    AiFillGoogleCircle,
    AiFillYoutube,
    AiFillInstagram,
    AiFillAmazonCircle
}
    from 'react-icons/ai';

const Home = () => {
    return (
        <>
            {/* First Section */}
            <div className="home" id="home">
                <main>
                    <h1>Kartik</h1>
                    <p>Lets do React..</p>
                </main>
            </div>

            {/* Second Section */}
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eaque exercitationem cumque omnis quae! Ad quibusdam in nostrum soluta magni.</p>
                </div>
            </div>

            {/* Third Section */}
            <div className="home3" id="about">
                <div>
                    <h1> Who are we?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ullam nostrum quod! Autem illo cupiditate quibusdam labore laborum repellat velit doloribus dolore ipsum consequuntur. Dignissimos maiores sequi tempore nostrum numquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti vero magnam aperiam, molestiae quas ducimus veritatis deleniti voluptates repudiandae animi error quibusdam facere tempora labore id ad quidem commodi, pariatur nihil alias est nulla sequi porro. Enim cum molestiae, repellendus mollitia ad tenetur, aut temporibus quod doloribus deserunt est praesentium fugit nostrum dolore nobis non vero ipsum aliquid veniam! Dicta!</p>
                </div>
            </div>

            {/* Fourth Section */}
            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{ animationDelay: "0.3s" }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{ animationDelay: "0.5s" }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{ animationDelay: "0.7s" }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{ animationDelay: "1s" }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
}

export default Home