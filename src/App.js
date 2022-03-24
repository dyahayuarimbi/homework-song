import './index.css';
import Music from './Component/music';
import data from './data/dataAlbum';

function App() {
  return (
    <div className="App">
      <Music img={data.album.images[0].url} title={data.name} artist={data.artists[0].name}/>
    </div>    
  );
}

export default App;