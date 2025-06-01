import React from 'react';

const brands = [
  {
    name: 'Nike',
    logo: 'https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo.png',
  },
  {
    name: 'Adidas',
    logo: 'https://standfirst-designweek-production.imgix.net/uploads/2019/06/27172619/3_adidas_originals.jpg?fit=crop&crop=faces&q=80&auto=compress,format&w=750&h=527'
  },
  {
    name: 'Puma',
    logo: 'data:image/png;base64,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'
  },
  {
    name: 'Reebok',
    logo: 'https://loodibee.com/wp-content/uploads/Reebok-Logo-2014-2019-300x300.png',
  },
  {
    name: 'Zara',
    logo: 'https://logomakerr.ai/blog/wp-content/uploads/2022/08/2019-to-Present-Zara-logo-design.jpg'
  },
  {
    name: 'H&M',
    logo: 'https://icon2.cleanpng.com/20180412/fsw/kisspng-vaughan-mills-h-m-shopping-centre-clothing-fashion-m-5acf503b49a1d8.2912889915235359313016.jpg',
  },
];

const AvailableBrands = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        We Have These Brands Available
      </h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        {brands.map((brand) => (
          <div
            key={brand.name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '150px',
            }}
          >
            <img
              src={brand.logo}
              alt={brand.name}
              style={{ width: '130px', height: '90px', objectFit: 'contain' }}
              onError={(e) => {
                e.target.onerror = null
                e.target.src = 'https://via.placeholder.com/80?text=No+Logo'
              }}
            />
            <span style={{ marginTop: '8px', fontWeight: '500' }}>
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AvailableBrands
