import { useState } from 'react';
import Grid from '../Grid/Grid';
import GridSizeForm from '../GridSizeForm/GridSizeForm';
import Button from '../Button/Button';
import { CirclePicker } from "react-color";
import './App.scss';

function App() {
  const [valueWidth, setValueWidth] = useState(0);
  const [valueHeight, setValueHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [color, setColor] = useState('#fff');

  const inputWidthValue = (newWidthValue) => {
    setValueWidth(Number(newWidthValue));
  };

  const inputHeightValue = (newHeightValue) => {
    setValueHeight(Number(newHeightValue));
  };

  const gridSize = () => {
    setWidth(valueWidth);
    setHeight(valueHeight);
    setValueWidth(0);
    setValueHeight(0);
    setToggle(!toggle);
  }

  const changeColor = (color) => {
    setColor(color.hex);
  }

  const eraseGrid = () => {
    setColor('#fff');
  }

  const resetGrid = () => {
    setToggle(!toggle);
    setWidth(valueWidth);
    setHeight(valueHeight);
    setValueWidth(0);
    setValueHeight(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Pixart
        </h1>
      </header>
      <main className="App-main">
        {!toggle && <GridSizeForm
          inputWidthValue={inputWidthValue}
          inputHeightValue={inputHeightValue}
          width={valueWidth}
          height={valueHeight}
          gridSize={gridSize}
        />}
        <section className="App-main-grid">
          <Grid
            width={width}
            height={height}
            color={color}
          />
        </section>
        <section className="App-main-settings">
        {toggle && 
          <>
            <CirclePicker
              color={color}
              onChangeComplete={changeColor} />
            <Button type="button" onClick={eraseGrid} value="Gommer"/>
            <Button type="button" onClick={resetGrid} value="Nouvelle grille"/>
          </>
        }
        </section>
      </main>
    </div>
  );
}

export default App;
