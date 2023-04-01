import "./App.css";
import Videos from "./pages/Videos"

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Videos
          likes={550}
          messages={100}
          shares={50}
          name="Pedro"
          description="Gato voando"
          music="musica mais o menos"
          url="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/brecker2.mp4?alt=media&token=b7e3ebf7-89a0-47a0-8a34-66f1176a71e3"
        />
       <Videos
          likes={250}
          messages={30}
          shares={20}
          name="Paulo"
          description="Bird olhando para a camera"
          music="musica épica"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
        <Videos
          likes={550}
          messages={100}
          shares={50}
          name="Churupita"
          description="+ um video de gato"
          music="só musica"
          url="https://firebasestorage.googleapis.com/v0/b/jornada2-eb156.appspot.com/o/brecker2.mp4?alt=media&token=b7e3ebf7-89a0-47a0-8a34-66f1176a71e3"
        />
      </div>
    </div>
  );
}

export default App;
