import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import FeatureList from "../components/FeatureList";
import Footer from "../components/Footer";
import "./Distributor.css";
import { useTranslation } from "react-i18next";

const BecomPartner = () => {
  const { t } = useTranslation(); 


  function Clip( url ) {

    return (
      <video 
        className="video_container"
        width="100%"
        id="video_background"
        preload="auto"
        autoplay="true"
        loop
        muted  key={url}>
        <source 
          src={url} 
          type="video/mp4"
          autostart="true"
        />
      </video>
    );
  }

const language = localStorage.getItem('lang')

  return (
    <div className="Home">
      <Header />
	  <div class="container-page distributor">
			<div class="block_all_your_shop">
				<div class="block_all_your_shop_text text-intro-contain" style={{marginBottom: '19%'}}>
					<h1>{t('becomPartner.group_1.text_1')}<br />{t('becomPartner.group_1.text_2')}</h1>
					<p>	
          {t('becomPartner.group_1.text_3')}
						<br /> {t('becomPartner.group_1.text_4')} 
					</p>
					<p>
          {t('becomPartner.group_2.text_1')} <br/>
					{t('becomPartner.group_2.text_2')}<br />
					{t('becomPartner.group_2.text_3')}
					</p>
					<input class="sign-btn" type="button" value={`${t("Features.learnMoreButton")}`} />
					
				</div>
				
				<div class="block_all_your_shop_video dist-vd-contain">
          {
            language === "fr" ? Clip(require("../video/Partners/02-partner-FR-180620.mp4")): Clip(require("../video/Partners/06-partner-ENG-180620.mp4"))
            
          }
				
				</div>
			</div>
        <FeatureList component="partner" />
      </div>
	  


      <Footer />
    </div>
  );
};

export default BecomPartner;
