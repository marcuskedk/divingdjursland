import React from "react";
import locales from "../helpers/locales.json";
import { useTranslation } from 'react-i18next'

const Info = () => {

  const { t } = useTranslation()

  return (
    <section className="info-page">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="sticky">
              <div className="info_menu">
                {locales.praktisk.map((item, index) => (
                  <a className="redirect_links" href={"#" + locales.praktisk[index].link}>{t('praktisk.'+index+'.title')}</a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-8">
            {locales.praktisk.map((item, index) => (
              <div className="infoCard" id={locales.praktisk[index].link}>
                <h3>{t('praktisk.'+index+'.title')}</h3>
                <p>{t('praktisk.'+index+'.text1')}</p>
                <p>{t('praktisk.'+index+'.text2')}</p>
                <p>{t('praktisk.'+index+'.text3')}</p>
                <p>{t('praktisk.'+index+'.text4')}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
