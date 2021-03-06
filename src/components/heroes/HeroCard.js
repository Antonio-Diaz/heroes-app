import PropType from 'prop-types'
import { Link } from 'react-router-dom'

const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div>
      <div className="card ms-3" style={{ maxWidth: '100%' }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={`./assets/heroes/${id}.jpg`}
              className="card-img"
              alt={superhero}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title"> {superhero} </h5>
              <p className="card-text"> {alter_ego} </p>
              {alter_ego !== characters && (
                <p className="card-text">{characters}</p>
              )}
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>
              <Link to={`./hero/${id}`}>ver más...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

HeroCard.propTypes = {
  id: PropType.string.isRequired,
  superhero: PropType.string.isRequired,
  publisher: PropType.string.isRequired,
  alter_ego: PropType.string.isRequired,
  first_appearance: PropType.string.isRequired,
  characters: PropType.string.isRequired,
}

export default HeroCard
