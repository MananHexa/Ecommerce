// components/FilterMenu.js
import { useState } from 'react'
import { Collapse, Button } from 'react-bootstrap'

export default function FilterMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* For mobile: Toggle Button */}
      <div className="d-md-none my-3">
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="filterCollapse"
          aria-expanded={open}
          className="w-100"
        >
          Toggle Filters
        </Button>
        <Collapse in={open}>
          <div id="filterCollapse" className="card card-body mt-2">
            <Filters />
          </div>
        </Collapse>
      </div>

      {/* For desktop: Sidebar */}
      <div className="d-none d-md-block p-3 border rounded bg-light" style={{ minWidth: '250px' }}>
        <h5 className="mb-3">Filters</h5>
        <Filters />
      </div>
    </>
  )
}

function Filters() {
  return (
    <>
      {/* Categories */}
      <div className="mb-3">
        <h6>Category</h6>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="shirt" />
          <label className="form-check-label" htmlFor="shirt">Shirt</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="tshirt" />
          <label className="form-check-label" htmlFor="tshirt">T-shirt</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="jeans" />
          <label className="form-check-label" htmlFor="jeans">Jeans</label>
        </div>
      </div>

      {/* Color */}
      <div className="mb-3">
        <h6>Color</h6>
        {['Red', 'Blue', 'Green', 'Black'].map((color) => (
          <div className="form-check" key={color}>
            <input className="form-check-input" type="checkbox" id={color.toLowerCase()} />
            <label className="form-check-label" htmlFor={color.toLowerCase()}>{color}</label>
          </div>
        ))}
      </div>

      {/* Size */}
      <div className="mb-3">
        <h6>Size</h6>
        {['S', 'M', 'L', 'XL'].map((size) => (
          <div className="form-check form-check-inline" key={size}>
            <input className="form-check-input" type="checkbox" id={`size-${size}`} />
            <label className="form-check-label" htmlFor={`size-${size}`}>{size}</label>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div className="mb-3">
        <h6>Price Range</h6>
        <div className="d-flex gap-2">
          <input type="number" className="form-control form-control-sm" placeholder="Min" />
          <input type="number" className="form-control form-control-sm" placeholder="Max" />
        </div>
      </div>
    </>
  )
}
