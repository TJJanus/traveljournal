
import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import data from './data';

function App() {

  const cardEles = data.map(item => {
    return <Card 
    // title={item.title} 
    // price={item.price} 
    // rating={item.stats.rating}
    // reviewCount={item.stats.reviewCount}
    // country={item.location}
    // key={item.item}
    // openSpots={item.openSpots} 
    item={item}
    
    />
  })

  return (
    <div className="App">
      <Header />
      {/* <Card /> */}
      {cardEles}
    </div>
  );
}

export default App;
