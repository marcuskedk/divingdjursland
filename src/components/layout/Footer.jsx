import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Routes, Route, Link } from "react-router-dom";
import navi from "../../helpers/navigation.json";
import fot from "../../helpers/footer.json";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <ul>
                                    {navi.navigation.map(( item, index ) => 
                                        <li key={ navi.navigation[index].id }>
                                            <Link to={ navi.navigation[index].link }>{ navi.navigation[index].title }</Link>
                                        </li>
                                    )}
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
                                <p>{ fot.footer[0].title }</p>
                            </div>
                            <div className="col-md-6 text-right">
                                <p>{ fot.footer[1].undertitle }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
