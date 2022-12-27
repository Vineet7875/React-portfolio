import React from "react";

const Home = () => {
    return (<>
        <div id="hom" className="Home">
            <div className="intro">
                <h1>Vineet Jadhav</h1>
                <div>
                    <p>I'm passionate <span id="spin"></span></p>
                </div>
                <div className="social_media">
                    <a href="https://twitter.com/vineet7875">
                        <img src="\twitter.png" className="socialimg" />
                    </a>
                    <a href="https://www.instagram.com/thisvineet/">
                        <img src="\instagram.png" className="socialimg" />
                    </a>
                    <a href="https://www.linkedin.com/in/vineet-jadhav-577a531b4/">
                        <img src="\linkdin.png" className="socialimg" />
                    </a>
                    <a href="https://github.com/Vineet7875">
                        <img src="\git2.jpg" id="git" className="socialimg" />
                    </a>
                </div>
            </div>
        </div>
    </>)
}
export default Home