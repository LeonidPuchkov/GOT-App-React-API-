import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import { Button } from "reactstrap";
import ErrorMessage from "../errorMessage";
import CharacterPage from "../characterPage";
import ItemList from "../itemList";
import ItemDetails from "../itemDetails";
import gotService from "../../services/gotService";
import { HousesPage } from "../pages";
import { BooksPage } from "../pages";
import { BooksItem } from "../pages";

export default class App extends Component {
  gotService = new gotService();

  state = {
    error: false,
    showChar: true
  };

  componentDidCatch() {
    console.log("Error");
    this.setState({
      error: true
    });
  }

  toggleChar = () => {
    this.setState(state => {
      return {
        showChar: !state.showChar
      };
    });
  };

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }
    const char = this.state.showChar ? <RandomChar /> : null;
    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              {char}
              <Button color="primary" onClick={this.toggleChar}>
                Toggle Char
              </Button>
            </Col>
          </Row>
          <CharacterPage />
          <Row>
            <Col md="6">
              <BooksPage />
            </Col>
            <Col md="6">
              <BooksItem />
            </Col>
          </Row>
          <HousesPage />
        </Container>
      </>
    );
  }
}
