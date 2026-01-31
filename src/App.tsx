import './App.css'
import {
  Header, 
  CarouselThumb,
  RecommendedThumb
} from "./components"
import icons from "./assets"
import data from "./data.json"

function App() {

  console.log(data);
  

  return (
    <>
      <Header/>
      <main className='main'>
        <div className='main__search'>
          <img src={icons.SearchIcon} alt="User" className="search__icon" />
          <input id='search' name="search" type="text" placeholder='Search for movies or TV series' className='input__search'/>
        </div>
        <section className='trending'>
          <h3 className='section__title'>Trending</h3>
          <CarouselThumb src="/src/assets/thumbnails/1998/trending/small.jpg" />
        </section>
        <section className='recommended'>
          <h3 className='section__title recommended__title'>Recommended for you</h3>
          <div className='recommended__grid'>
            <RecommendedThumb src="/src/assets/thumbnails/1998/trending/small.jpg" />
            <RecommendedThumb src="/src/assets/thumbnails/1998/trending/small.jpg" />
            <RecommendedThumb src="/src/assets/thumbnails/1998/trending/small.jpg" />
            <RecommendedThumb src="/src/assets/thumbnails/1998/trending/small.jpg" />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
