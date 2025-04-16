
import './App.css';
import Header from './components/Header';
import Categories from './components/Categories';
import TopRest from './components/TopRest';
import OnlineDelivery from './components/OnlineDelivery';
import BestPlaces from './components/BestPlaces';
import BestCuisines from './components/BestCuisines';
import RestaurantsNearMe from './components/RestaurantsNearMe';
import Footer from './components/Footer';

function App() {
  return (
    <>
     <Header/>
     <Categories/>
     <TopRest/>
     <OnlineDelivery/>
     <BestPlaces/>
     <BestCuisines/>
     <RestaurantsNearMe/>
     <Footer/>
    </>
  );
}

export default App;
