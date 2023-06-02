import React from 'react'
import {Link} from 'react-router-dom'

export default function PageNotFound() {
  return(
    <div className="not-found">
      <h3 className="not-found__title">404 - Страница не найдена</h3>
      <Link className="not-found__return">Вернуться</Link>
    </div>
  )
}