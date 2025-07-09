import React from 'react'

const MainBanner = () => {
    let bannerUrl = "assets/img/banners/fban2.jpg"
    let banAltTxt ="Home Banner"
  return (
    <div>
        <img src={bannerUrl} alt={banAltTxt} className='home-banner img-fluid' />
    </div>
  )
}

export default MainBanner