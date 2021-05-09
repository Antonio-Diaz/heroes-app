import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Redirect, useParams } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

const HeroScreen = ({ history }) => {
  const { heroId } = useParams()

  const hero = useMemo(() => getHeroById(heroId), [heroId])

  if (!hero) {
    return <Redirect to="/" />
  }

  const {
    id,
    superhero,
    publisher,
    alterEgo,
    firstAppearance,
    characters,
  } = hero

  const handleClick = () => {
    history.goBack()
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${id}.jpg`}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          alt={superhero}
        />
      </div>
      <div className="col-8">
        <h3> {superhero} </h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {' '}
            <b> alter ego: {alterEgo} </b>
          </li>
          <li className="list-group-item">
            {' '}
            <b> publisher: {publisher} </b>
          </li>
          <li className="list-group-item">
            {' '}
            <b> first appearance: {firstAppearance} </b>
          </li>
        </ul>
        {alterEgo !== characters && (
          <p className="container p-4">
            {' '}
            <b> characters: {characters} </b>
          </p>
        )}
        <button className="btn btn-outline-primary m-4" onClick={handleClick}>
          Regresar
        </button>
      </div>
    </div>
  )
}

HeroScreen.propTypes = {
  history: PropTypes.object.isRequired,
}

export default HeroScreen
