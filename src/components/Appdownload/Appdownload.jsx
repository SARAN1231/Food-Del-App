import React from 'react'
import "./Appdownload.css"
import { assets } from '../../assets/assets';
const Appdownload = () => {
  return (
    <div className="Appdownload" id="Appdownload">
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="app-download-icon">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
}

export default Appdownload