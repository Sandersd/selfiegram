import React from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  Grid,
  Navbar,
  NavItem,
  Nav,
  Glyphicon
} from 'react-bootstrap';


const Header = () => {
  return (
    <div className="App">
      <Navbar inverse fixedTop>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>SelfieGram</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <LinkContainer to="/post">
                <NavItem><Glyphicon glyph="plus" /> Post</NavItem>
              </LinkContainer>
              <LinkContainer to="/discover">
                <NavItem><Glyphicon glyph="eye-open" /> Discover</NavItem>
              </LinkContainer>
              <LinkContainer to="/profile/1">
                <NavItem><Glyphicon glyph="user" /> Profile</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Grid>
      </Navbar>
    </div>
  );
};

export default Header;
