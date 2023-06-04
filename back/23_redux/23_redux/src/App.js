import './styles/Box.css';

function App() {
  return (
    <div className="App">
      Redux Test
      <Box1 />
    </div>
  );
}

const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1</h2>
      <Box2 />
    </div>
  );
};

const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box2 </h2>
      <Box3 />
    </div>
  );
};

const Box3 = () => {
  return (
    <div className="Box">
      <h2>Box3: </h2>
      <button>+</button>
      <button>-</button>
    </div>
  );
};

export default App;