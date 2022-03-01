import * as React from "react";
import { useTranslation } from 'react-i18next'
import * as ReactDOM from "react-dom";
import Slider from '../components/Slider.jsx';
import text from '../helpers/everything.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';  
import i18next from 'i18next';

const Home = () => {
    const { t } = useTranslation()
    return (
        <>
            <Slider />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <a className="card" href="/">
                                <h3>Strand Klit <span><FontAwesomeIcon icon={faArrowAltCircleRight} /></span></h3>
                                <img src="../img/IMG_20190726_122436_1.jpg" width="100%" alt="" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a className="card" href="/">
                                <h3>Strand Klit <span><FontAwesomeIcon icon={faArrowAltCircleRight} /></span></h3>
                                <img src="../img/IMG_20190726_122436_1.jpg" width="100%" alt="" />
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a className="card" href="/">
                                <h3>Strand Klit <span><FontAwesomeIcon icon={faArrowAltCircleRight} /></span></h3>
                                <img src="../img/IMG_20190726_122436_1.jpg" width="100%" alt="" />
                            </a>
                        </div>
                    </div>
                    <div className="row secTwo">
                        <div className="col-md-6">
                            <h3>{t('MainText.title')}</h3>
                            <p>{t('MainText.text1')}</p>
                            <p>{t('MainText.text2')}</p>
                        </div>
                        <div className="col-md-6">
                            <video className="vid" width="100%" autoplay="autoplay" loop="true" muted ><source src="../img/Henning_dykker_cuttet.mp4" type="video/mp4"/></video>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
