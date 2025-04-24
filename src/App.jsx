import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import FeatureCards from "./sections/FeatureCards";
const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <ShowcaseSection/>
      <FeatureCards />
    </div>
  )
}

export default App
