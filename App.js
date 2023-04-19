
import './App.css';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { useState } from 'react';

function App() {

  let handleClick3 = () => {
    // setCounter(counter===0)
    window.location.reload()
  }


  const [counter, setCounter] = useState(0)

  let handleClick1 = () => {
    setCounter(counter + 1)
  }

  let handleClick2 = () => {
    if (counter === 0) {
      return 0
    }
    else {
      setCounter(counter - 1);
    }
  }

  return (
    <>
    
      <h1 style={{ margin: "0px 37vw", color:"white" }}>JUST COUNT AND RESET</h1>
      <div className="container" style={{ backgroundColor: "orange", textAlign: "center", maxWidth: "40vw", display: "grid", alignItems: "center", height: "500px", margin: "auto" }}>
        {/* outer card */}
        <div className="right" style={{ alignItems: "flex-end" }}>
          <svg onClick={handleClick3} style={{ border: "5px solid red" }} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="50" height="50"><path d="M21.962,12.875A10.03,10.03,0,1,1,19.122,5H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.985,11.985,0,1,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1h0A.982.982,0,0,0,21.962,12.875Z" /></svg>
        </div>
        <div className="card" style={{
          backgroundColor: "aqua", textAlign: "center", height: "300px", width: "250px", margin: "auto", display: "flex",
          justifyContent: "center"
        }}>
          {/* inner card */}
          <div className="count" style={{
            backgroundColor: "hotpink",
            color: "blue",
            fontSize: "xxx-large", display: "flex",
            alignItems: "center",
            height: "70px", margin: "auto"
          }}>{counter}</div>
        </div>



        <form style={{ display: "flex", justifyContent: "center" }}>

          <div className="buttons" style={{}}>

            <Stack spacing={2} direction="row">

              <Button onClick={handleClick1} variant="outlined">+</Button>
              <Button onClick={handleClick2} variant="outlined">-</Button>
            </Stack>
          </div>

        </form>

      </div>
    </>
  );
}

export default App;
