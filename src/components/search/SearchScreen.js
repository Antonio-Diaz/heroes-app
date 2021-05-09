import PropType from 'prop-types'
import queryString from 'query-string'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import { useFrom } from '../../Hooks/useForm'
import getHeroByName from '../../selectors/getHeroByName'
import HeroCard from '../heroes/HeroCard'

const SearchScreen = ({ history }) => {
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)

  const [formValues, handleInputChange] = useFrom({
    searchText: q,
  })
  const { searchText } = formValues

  const heroesFiltered = useMemo(() => getHeroByName(q), [q])

  const handleSearch = e => {
    e.preventDefault()
    history.push(`?q=${searchText}`)
  }

  return (
    <div>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4> Search Form </h4>
          <form onSubmit={handleSearch}>
            <input
              name="searchText"
              type="text"
              autoComplete="false"
              placeholder="search hero"
              className="form-control"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn btn-outline-primary m-1 btn-block"
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results: </h4>
          <hr />

          {q === '' && <div className="alert alert-info">Search a hero</div>}

          {q !== '' && heroesFiltered.length === 0 && (
            <div className="alert alert-danger">
              There is no a hero with {q}
            </div>
          )}

          {heroesFiltered.map(hero => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  )
}

SearchScreen.propTypes = {
  history: PropType.object.isRequired,
}

export default SearchScreen
