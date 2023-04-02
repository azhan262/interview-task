import React, {useState} from 'react'

function Card(props) {

  const [quanityAdditionOnPrice, setQuanityAdditionOnPrice] = useState(0)
  const [quanityLocalAdditionOnPrice, setQuanityLocalAdditionOnPrice] = useState(0)

  const handleChangeAdditionOnprice = (e) => {
    const {name, value} = e.target
    const integerVal = parseInt(value)
    setQuanityAdditionOnPrice(integerVal)
  }

  const handleChangeLocalAdditionOnprice = (e) => {
    const {name, value} = e.target
    const integerVal = parseInt(value)
    setQuanityLocalAdditionOnPrice(integerVal)
  }

  const handleIncrementAdditionOnPrice = () => {
    setQuanityAdditionOnPrice(prevState => prevState + 1)
  }

  const handleDecrementAdditionOnPrice = () => {
    setQuanityAdditionOnPrice(prevState => prevState - 1)
  }


  const handleIncrementLocalAddition = () => {
    setQuanityLocalAdditionOnPrice(prevState => prevState + 1)
  }

  const handleDecrementLocalAddition = () => {
    setQuanityLocalAdditionOnPrice(prevState => prevState - 1)
  }

  return (
    <div className = 'custom-card'>
      <p className='f-size-20'>
        {props.productName}
      </p>
      <div className = 'row fw-bold f-size-10' style={{marginTop:'8px'}}>
        <div className = 'col-6'>
          <p>Capacity:</p>
        </div>
        <div className = 'col-6'>
          <p>Pcs in Pallet:</p>
        </div>
      </div>
      <hr className ='mx-auto custom-hr' style={{marginTop:'13px', width:'200px'}} />
      <form className = 'text-start' style={{marginLeft:'30px', marginRight:'10px'}}>
      <div className="row g-0 f-size-12" style={{marginBottom:'8px'}}>
        <label className="col-3 col-form-label">Stock:</label>
        <div className="col-8 d-flex align-items-center">
          <input type="stock" className="custom-input" />
        </div>
      </div>
      <div className="row g-0 f-size-12">
        <label className="col-3 col-form-label">Net Price:</label>
        <div className="col-8 pl-0 d-flex align-items-center">
          <input type="netPrice" className="custom-input" />
        </div>
      </div>
      <div className='flex-display-column' style={{marginTop:'15px'}}>
        <div className = 'flex-display-row justify-content-between align-items-center f-size-10'>
          <p>
            Additions on Price FZ:
          </p>
          <div className="quantity buttons_added">
            <input type="button" defaultValue="-" className="minus" onClick={handleDecrementAdditionOnPrice}/>
            <input type="number" step={1} min={1} max name={quanityAdditionOnPrice} defaultValue={quanityAdditionOnPrice} value={quanityAdditionOnPrice} onChange={handleChangeAdditionOnprice} title="Qty" className="input-text qty text" size={4} pattern inputMode />
            <input type="button" defaultValue="+" className="plus" onClick={handleIncrementAdditionOnPrice}/>
          </div>
          <p>%</p>
          <p>Total:</p>
          <div />
          <div />
          <div />
          <div />
        </div>
        
        <div className='flex-display-row justify-content-end'>
          <hr style={{ width:'121px', marginRight:'6px'}}/>
        </div>
        <div className = 'flex-display-row justify-content-between align-items-center f-size-10'>
          <p>
            Local Additions on FZ total: 
          </p>
          <div className="quantity buttons_added">
            <input type="button" defaultValue="-" className="minus" onClick={handleDecrementLocalAddition}/>
            <input type="number" step={1} min={1} max name="quanityLocalAdditionOnPrice" defaultValue={quanityLocalAdditionOnPrice} value = {quanityLocalAdditionOnPrice} onChange={handleChangeLocalAdditionOnprice} title="Qty" className="input-text qty text" size={4} pattern inputMode />
            <input type="button" defaultValue="+" className="plus" onClick={handleIncrementLocalAddition}/>
          </div>
          <p>%</p>
          <p>Total:</p>
          <div />
          <div />
          <div />
          <div />
        </div>

        <div className='flex-display-row justify-content-end'>
          <hr className ='custom-hr' style={{ width:'141px', marginRight:'6px'}} />
        </div>
      </div>
      </form>
      <div>
        <img src = '/images/picture-box.png' width='100%' alt = 'picture' className='img-fluid' />
      </div>
    </div>
  )
}

export default Card