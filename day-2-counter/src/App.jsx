import react , {useState} from "react";

function App() {

  const [count , setCount] = useState(0);

  function handleClick(){
    setCount(count+1);
  }



  return (
    <>
      <div className="main" >
        <button onClick={handleClick}>
          ClickMe
        </button>
        <div>You have clicked {count} times</div>
      </div>
    </>
  );
}

export default App;
