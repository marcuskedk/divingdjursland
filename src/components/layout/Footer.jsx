import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom';
import locales from '../../helpers/locales.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faExclamationCircle,  } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const location = useLocation()
    const { t } = useTranslation()

  return (
    <footer className='footer'>
        <div className='container'>
            <div className='row'>
                <div className='footer-col'>
                    <h4>Kategorier</h4>
                    <ul>
                        <li>
                            <a href="">Forside</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="">Info</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="">Tilmelding</a>
                        </li>
                    </ul> 

                </div>
               
               
                
                <div className='footer-col'>
                    <h4>Kontakt</h4>
                    {locales.footer.contact.map((items, index ) => (
                        <ul> 
                            <li>
                                 {t('footer.contact.' + index + '.text')} 
                            </li>
                        </ul>
                    ))}
                </div>
                <div className='footer-col'>
                    <h4>Betalingsmuligheder</h4>
                    <div className='payment-logos'>
                        <a href=""><i className="fa-brands fa-cc-mastercard"></i></a>
                        <a href=""><i className="fa-brands fa-cc-visa"></i></a>
                    </div>
                </div>

                <div className='footer-col'>
                    <h4>Følg med her!</h4>
                    <div className='social-links '>
                        <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                        <a href=""><i className="fa-brands fa-instagram"></i></a>
                    </div>
                </div>
                        
                
                
            </div>
        </div>
    </footer>
  )
}

export default Footer