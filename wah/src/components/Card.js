import React from 'react'

export default function Card() {
  return (
    <div>
        <div className="card mt-5" style={{width:"18rem", maxHeight:"380px"}}>
          <img src="https://source.unsplash.com/random/900x700/?burger" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Information goes here.</p>
          <div className='container w-100'>
            <select className="m-1 h-100 bg-success rounded">
                {Array.from(Array(6), (e, ind)=>{
                    return(
                        <option value={ind + 1}> {ind + 1} </option>
                    )
                })}
            </select>

            <select className="m-1 h-100 bg-success rounded">
                <option value="half"> Half </option>
                <option value="full"> Full </option>
            </select>
          </div>
          <div className='d-inline h-100 fs-5'>Total Price</div>
          </div>
        </div>
      </div>
  )
}
