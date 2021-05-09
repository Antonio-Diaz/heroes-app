import PropTypes from 'prop-types'

import { heroes } from '../data/Heroes'

const getHeroByName = (name = '') => {
  if (name === '') {
    return []
  }

  name = name.toLocaleLowerCase()
  return heroes.filter(hero =>
    hero.superhero.toLocaleLowerCase().includes(name),
  )
}

getHeroByName.propTypes = {
  name: PropTypes.string.isRequired,
}

export default getHeroByName
