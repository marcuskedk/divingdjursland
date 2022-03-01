import * as React from 'react';
import { useTranslation } from 'react-i18next'
import * as ReactDOM from 'react-dom';
import { Routes, Route, Link } from "react-router-dom";

const Footer = () => {
    const { t } = useTranslation();
    return (
        <>
            <footer>
                <div className="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <ul>
                                </ul>
                            </div>
                            <div className="col-md-4">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p>{ t('footer.title') }</p>
                            </div>
                            <div className="col-md-6 text-right">
                                <p>{ t('footer.undertitle') }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
