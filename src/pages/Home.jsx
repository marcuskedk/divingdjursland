import * as React from "react";
import * as ReactDOM from "react-dom";
import Slider from '../components/Slider.jsx';

const Home = () => {
    return (
        <>
            <section>
                <div className="slider">
                    <Slider />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
