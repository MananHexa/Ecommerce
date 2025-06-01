// components/FilterMenu.js
import { useState } from 'react'
import { Collapse, Button } from 'react-bootstrap'
import { FaTshirt, FaPalette, FaRulerCombined, FaDollarSign } from 'react-icons/fa'

export default function FilterMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* For mobile: Toggle Button */}
      <div className="d-md-none my-4">
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="filterCollapse"
          aria-expanded={open}
          className="w-100 fs-5"
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
      <div
        className="d-none d-md-block p-4 border rounded bg-light"
        style={{ minWidth: '280px', fontSize: '1.05rem', lineHeight: '1.8' }}
      >
        <h4 className="mb-4 text-center">Filters</h4>
        <Filters />
      </div>
    </>
  )
}

function Filters() {
  return (
    <>
      {/* Categories */}
      <div className="mb-4">
        <h5><FaTshirt className="me-2" />Category</h5>
           <p className="text-muted small">Choose what type of clothing you prefer.</p>
        {['Shirt', 'T-shirt', 'Jeans', 'Jacket'].map((item) => (
          <div className="form-check" key={item}>
            <input className="form-check-input" type="checkbox" id={item.toLowerCase()} />
            <label className="form-check-label" htmlFor={item.toLowerCase()}>{item}</label>
          </div>
        ))}
      </div>

      {/* Color */}
      <div className="mb-4">
        <h5><FaPalette className="me-2" />Color</h5>
        <p className="text-muted small">Pick a color that suits your mood.</p>
        {['Red', 'Blue', 'Green', 'Black', 'White'].map((color) => (
          <div className="form-check" key={color}>
            <input className="form-check-input" type="checkbox" id={color.toLowerCase()} />
            <label className="form-check-label" htmlFor={color.toLowerCase()}>{color}</label>
          </div>
        ))}
      </div>

      {/* Size */}
      <div className="mb-4">
        <h5><FaRulerCombined className="me-2" />Size</h5>
          <p className="text-muted small">Multiple sizes for every body type.</p>
        {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
          <div className="form-check form-check-inline" key={size}>
            <input className="form-check-input" type="checkbox" id={`size-${size}`} />
            <label className="form-check-label" htmlFor={`size-${size}`}>{size}</label>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div className="mb-4">
        <h5><FaDollarSign className="me-2" />Price Range</h5>
        <div className="d-flex gap-3">
          <input type="number" className="form-control form-control-sm" placeholder="Min" />
          <input type="number" className="form-control form-control-sm" placeholder="Max" />
        </div>
      </div>
    </>
  )
}
