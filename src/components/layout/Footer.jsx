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
                </div>
               
               
                
                <div className='footer-col'>
                    <h4>Kontakt</h4>
                    {locales.footer.contact.map((items, index ) => (
                        <ul>
                            {t('footer.contact.' + index + '.text')}
                        </ul>
                    ))}
                </div>
                <div className='footer-col'>
                    <h4>Betalingsmuligheder</h4>
                    <ul>
                        <li>
                            <a href=""></a>
                        </li>
                    </ul>
                </div>

                <div className='footer-col'>
                    <h4>Betalingsmuligheder</h4>
                   
                
                    <div className='social-links '>
                        <a href=""><i className='fab fa-facebook'></i></a>
                    </div>
                </div>
                        
                
                
            </div>
        </div>
    </footer>
  )
}

export default Footer