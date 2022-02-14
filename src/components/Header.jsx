import React from 'react'
import propTypes from 'prop-types'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

function Header({title}) {
  return (
      <header>
          <Link to='/'>
            <h1 className='title-bar'>{title}</h1>
            <Button>Rating System</Button>
          </Link>
      </header>
  )
}

Header.defaultProps = {
    title: 'Review App'
}

Header.propTypes = {
    title: propTypes.string
}

export default Header