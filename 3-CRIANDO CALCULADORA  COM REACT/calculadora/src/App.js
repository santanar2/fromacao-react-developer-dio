import React, { useContext } from 'react';
import { CalculatorContext } from './context/CalculatorContext';

import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';

function App() {
  const {
    currentNumber,
    handleOnClear,
    handleAddNumber,
    handleSumNumbers,
    handleMinusNumbers,
    handleMultiplyNumbers,
    handleDivideNumbers,
    handleEquals
  } = useContext(CalculatorContext);

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="/" onClick={handleDivideNumbers} />
        </Row>
        
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="*" onClick={handleMultiplyNumbers} />
        </Row>
        
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        
        <Row>
          <Button label="C" onClick={handleOnClear} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="=" onClick={handleEquals} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
