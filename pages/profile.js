'use client';
import React from 'react';
import Header from '../components/Header';

export default function ProfilePage() {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 98765 43210',
    address: '123 Main Street, Mumbai, India',
    profilePic: 'https://i.pravatar.cc/150?img=3', // dummy profile image
  };

  return (
    <>
    <Header/>
    <div className="container py-5">
      <div className="card mx-auto shadow-sm" style={{ maxWidth: '600px' }}>
        <div className="card-body text-center">
          <img
            src={user.profilePic}
            alt="Profile"
            className="rounded-circle mb-3"
            width="120"
            height="120"
          />
          <h3 className="card-title">{user.name}</h3>
          <p className="card-text text-muted">{user.email}</p>
          <hr />
          <div className="text-start">
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
