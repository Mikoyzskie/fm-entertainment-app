import './App.css'
import {
  Header, 
  CarouselThumb,
  RecommendedThumb
} from "./components"
import icons from "./assets"
import {type MovieList} from "./types"
// import data from "./data.json"
import { useEffect, useRef, useState } from 'react'




function App() {
  const [movieData, setMovieData] = useState<MovieList[] | null>();
  const [containerSize, setContainerSize] = useState(365);

  const mainContainer = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    fetch('/data.json')
    .then(res => res.json())
    .then(json => setMovieData(json))
  },[])

  useEffect(()=>{
    if(!mainContainer.current) return

    const observer = new ResizeObserver(obs =>{
      const width  = obs[0].contentRect.width;
      setContainerSize(width)
    })

    observer.observe(mainContainer.current)

    return () => observer.disconnect()
  },[])

  return (
    <>
      <Header/>
      <main className='main' ref={mainContainer}>
        <div className='main__search'>
          <img src={icons.SearchIcon} alt="User" className="search__icon" />
          <input id='search' name="search" type="text" placeholder='Search for movies or TV series' className='input__search'/>
        </div>
        <section className='trending'>
          <p className='section__title'>Trending</p>
          <CarouselThumb src="/src/assets/thumbnails/1998/trending/small.jpg" />
        </section>
        <section className='recommended'>
          <p className='section__title recommended__title'>Recommended for you</p>
          <div className='recommended__grid'>
            {
              movieData && movieData.map((item, index)=>{
                if(!item.isTrending){
                  return(
                    <RecommendedThumb
                      key={index}
                      image={item.thumbnail.regular}
                      category={item.category}
                      rating={item.rating}
                      year={item.year}
                      title={item.title}
                      isBookmarked={item.isBookmarked}
                      width={containerSize}
                    />
                  )
                }
              })
            }
          </div>
        </section>
      </main>
    </>
  )
}

export default App
