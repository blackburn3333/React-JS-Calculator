import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, Button  } from 'reactstrap';

const CalDisplay = [];
const CalAnswerArray = [];
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date(),
            calDisplayData: CalDisplay,
            calAnsArray: CalAnswerArray,
            dispayClass : 'DisplayNormal',
        }
    }

    componentWillMount(){
        this.setCalDisplayData();
    }

    getCalDisplayData()
    {
        return this.state.calDisplayData;
    }

    getAnserArray(){
        return this.state.calAnsArray;
    }
    setCalDisplayData(){
        const getCalData = this.getCalDisplayData();
        this.setState({
            calDisplayData : getCalData
        });
    }

    showCalculation(event){
        const dispayAnswer = this.getCalDisplayData();
        const AnswerArray = this.getAnserArray();
        if(dispayAnswer[dispayAnswer.length - 1] === "+" || dispayAnswer[dispayAnswer.length - 1] === "-" ||dispayAnswer[dispayAnswer.length - 1] === "/" || dispayAnswer[dispayAnswer.length - 1] === "*"){
            console.log(
                this.setState({
                    dispayClass : 'DisplayNormal_Error',
                })
            );
        }else{
            const answ = eval(dispayAnswer.join(''));
            console.log(answ);
            AnswerArray.push(answ);
            this.setState({
                calDisplayData : AnswerArray,
                calAnsArray : [],
            })
        }
    }

    setToArray(character){
            const setCalArray = this.getCalDisplayData();
            setCalArray.push(character);
            this.setState({
                calDisplayData : setCalArray,
            })
            console.log(setCalArray);
    }

    clearScreen(event){
        this.setState({ 
            calDisplayData : [],
        });
    }

  render() {
    return (
      <div className="App">
          <Container className="CalCOntiner">
              <Row>
                  <Col className="inputSet" md={{ size: 4, offset: 4 }}>
                    <p className={this.state.dispayClass}>
                        {this.state.calDisplayData}
                    </p>
                  </Col>
              </Row>

              <Row>
                  <Col className="button_set" md={{ size: 4, offset: 4  }}>
                        <Button onClick={()=>this.setToArray(1)} outline color="primary">1</Button>
                        <Button onClick={()=>this.setToArray(2)} outline color="primary">2</Button>
                        <Button onClick={()=>this.setToArray(3)} outline color="primary">3</Button>
                        <Button onClick={()=>this.setToArray('+')} outline color="primary">+</Button>
                  </Col>
              </Row>
              <Row>
                  <Col className="button_set" md={{ size: 4, offset: 4  }}>
                      <Button onClick={()=>this.setToArray(4)} outline color="primary">4</Button>
                      <Button onClick={()=>this.setToArray(5)} outline color="primary">5</Button>
                      <Button onClick={()=>this.setToArray(6)} outline color="primary">6</Button>
                      <Button onClick={()=>this.setToArray('-')} outline color="primary">-</Button>
                  </Col>
              </Row>
              <Row>
                  <Col className="button_set" md={{ size: 4, offset: 4  }}>
                      <Button onClick={()=>this.setToArray(7)} outline color="primary">7</Button>
                      <Button onClick={()=>this.setToArray(8)} outline color="primary">8</Button>
                      <Button onClick={()=>this.setToArray(9)} outline color="primary">9</Button>
                      <Button onClick={()=>this.setToArray('*')} outline color="primary">X</Button>
                  </Col>
              </Row>
              <Row>
                  <Col className="button_set" md={{ size: 4, offset: 4  }}>
                      <Button onClick={this.clearScreen.bind(this)} outline color="primary">C</Button>
                      <Button onClick={()=>this.setToArray(0)} outline color="primary">0</Button>
                      <Button onClick={this.showCalculation.bind(this)} outline color="primary">=</Button>
                      <Button onClick={()=>this.setToArray('/')} outline color="primary">/</Button>
                  </Col>
              </Row>
              
          </Container>
          <Container>
          <Row>
                  <Col className="FooterCol">
                  <p>
                  Simple React JS calculator.
                  </p>
                  </Col>
            </Row>
            </Container>
      </div>
    );
  }
}

export default App;
