/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'

export default function Header() {
  return (
    <header>
        <Link to='/'>Pizza Company</Link>
        <SearchOrder />
        <p>Enonch</p>
    </header>
  )
}
