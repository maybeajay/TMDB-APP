import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
export default function Header(){
    return(
        <>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"><img
              alt=""
              src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"}
              width="100"
              className="d-inline-block align-top" style={{width: "60px"}}/></Nav.Link>
            <Nav.Link as={Link} to="/movies/popular">Popular</Nav.Link>
            <Nav.Link as={Link} to="/movies/top_rated">Top Rated</Nav.Link>
            <Nav.Link as ={Link} to="/movies/upcoming">Upcoming</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}