import React from 'react'

const TopRatedItems = (props) => {

     const {title, fItem1,fItem2,fItem3, fItem4, fItem5, itemName1,itemName2,itemName3,itemName4,itemName5, Price1, Price2,
      Price3, Price4, Price5 } = props.topFood

  return (
      <div className='container'>
      <h4>{title}</h4>
      <div className='row mx-0'>
          <ul className='popular--list'>
           {/* {Object.entries(props.food).map(([key, value]) => (
            <li>
              <img src={value}  className='img-fluid' />
            </li>
          ))} */}
            <li>
              <img src={fItem1} alt={title} className='img-fluid' />
                <div className='item__caption'>
                  <h5>{itemName1}</h5>
                  <h6 className='mb-0'>Price : {Price1}</h6>
                </div>
            </li>
            <li>
              <img src={fItem2} alt={title} className='img-fluid' />
              <div className='item__caption'>
                <h5>{itemName2}</h5>
                <h6 className='mb-0'>Price : {Price2}</h6>
              </div>
            </li>
            <li>
              <img src={fItem3} alt={title} className='img-fluid' />
              <div className='item__caption'>
              <h5>{itemName3}</h5>
              <h6 className='mb-0'>Price : {Price3}</h6>
              </div>
            </li>
            <li>
              <img src={fItem4} alt={title} className='img-fluid' />
              <div className='item__caption'>
              <h5>{itemName4}</h5>
              <h6 className='mb-0'>Price : {Price4}</h6>
              </div>
            </li>
            <li>
              <img src={fItem5} alt={title} className='img-fluid' />
               <div className='item__caption'>
              <h5>{itemName5}</h5>
              <h6 className='mb-0'>Price : {Price5}</h6>
              </div>
            </li>
          </ul>
      </div>

    </div>
  )
}

export default TopRatedItems