// components/PaymentPage.js
import { useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'

export default function PaymentPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      alert('Payment processed successfully (Dummy)')
    }, 500)
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Card style={{ width: '100%', maxWidth: '500px' }} className="p-4 shadow">
        <h3 className="text-center mb-4">💳 Payment Details</h3>

        {submitted && <Alert variant="success">Payment submitted successfully!</Alert>}

        <Form onSubmit={handleSubmit}>
          {/* Cardholder Name */}
          <Form.Group className="mb-3">
            <Form.Label>Cardholder Name</Form.Label>
            <Form.Control type="text" placeholder="e.g. John Doe" required />
          </Form.Group>

          {/* Card Number */}
          <Form.Group className="mb-3">
            <Form.Label>Card Number</Form.Label>
            <Form.Control type="text" placeholder="1234 5678 9012 3456" maxLength={19} required />
          </Form.Group>

          {/* Expiry & CVV */}
          <div className="d-flex gap-3">
            <Form.Group className="mb-3 w-50">
              <Form.Label>Expiry Date</Form.Label>
              <Form.Control type="text" placeholder="MM/YY" maxLength={5} required />
            </Form.Group>
            <Form.Group className="mb-3 w-50">
              <Form.Label>CVV</Form.Label>
              <Form.Control type="password" placeholder="***" maxLength={3} required />
            </Form.Group>
          </div>

          {/* Billing Email */}
          <Form.Group className="mb-4">
            <Form.Label>Email for Receipt</Form.Label>
            <Form.Control type="email" placeholder="john@example.com" required />
          </Form.Group>

          {/* Submit Button */}
          <Button type="submit" variant="primary" className="w-100 fs-5">
            Pay Now
          </Button>
        </Form>
      </Card>
    </div>
  )
}
