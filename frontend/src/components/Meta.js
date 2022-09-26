import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome to Zebra Logistics-LLC',
  description: 'We sell the best products for cheap',
  keywords: 'eletronics, buy eletronics, cheap eletronics'
}

export default Meta;