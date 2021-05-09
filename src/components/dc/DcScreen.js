import HeroList from '../heroes/HeroList'

const DcScreen = () => {
  const publisher = 'DC Comics'
  return (
    <div>
      <h1>DC SCREEN</h1>
      <hr />

      <HeroList publisher={publisher} />
    </div>
  )
}

export default DcScreen
