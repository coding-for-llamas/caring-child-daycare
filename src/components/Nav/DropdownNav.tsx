import React, { useState } from 'react';
import {
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Navbar, Nav, NavItem, NavLink,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

export const AboutNav = (): JSX.Element => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Navbar>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <Nav>
          <DropdownToggle caret>
            About Caring Child
            <DropdownMenu>
              <DropdownItem>
                <NavItem><NavLink to="/daycare/about" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>About Us</NavLink></NavItem>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/daycare/about/caring-child-history" tag={RRNavLink} onClick={toggle}>
                  Caring Child Daycare&apos;s History
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/daycare/about/caring-child-difference" tag={RRNavLink} onClick={toggle}>
                  The Caring Child Difference
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/daycare/about/meeting-higher-standards" tag={RRNavLink} onClick={toggle}>
                  Meeting Higher Standards
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/daycare/about/curriculum" tag={RRNavLink} onClick={toggle}>
                  Curriculum
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/daycare/about/meet-the-teachers" tag={RRNavLink} onClick={toggle}>
                  Meet The Teachers
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/daycare/about/faq" tag={RRNavLink} onClick={toggle}>
                  FAQ
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </DropdownToggle>
        </Nav>
      </Dropdown>
    </Navbar>
  );
};

export const ProgramsNav = (): JSX.Element => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Navbar>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <Nav>
          <DropdownToggle caret>
            Caring Programs
            <DropdownMenu>
              <DropdownItem>
                <NavItem><NavLink to="/daycare/programs" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>Programs</NavLink></NavItem>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/daycare/programs/infants-and-toddlers" tag={RRNavLink} onClick={toggle}>
                  Infants &amp; Toddlers
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/daycare/programs/twos" tag={RRNavLink} onClick={toggle}>
                  Twos
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/daycare/programs/preschool" tag={RRNavLink} onClick={toggle}>
                  Preschool
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/daycare/programs/private-pre-k" tag={RRNavLink} onClick={toggle}>
                  Private Pre-K
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/daycare/programs/after-school" tag={RRNavLink} onClick={toggle}>
                  After School
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/daycare/programs/summer-camp" tag={RRNavLink} onClick={toggle}>
                  Summer Camp
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </DropdownToggle>
        </Nav>
      </Dropdown>
    </Navbar>
  );
};

const ParentsNav = (): JSX.Element => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Navbar>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <Nav>
          <DropdownToggle caret>
            The Parent&apos;s Corner
            <DropdownMenu>
              <DropdownItem>
                <NavItem>
                  <NavLink to="/daycare/parents" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>Parent&apos;s Corner</NavLink>
                </NavItem>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/daycare/parents/resources" tag={RRNavLink} onClick={toggle}>
                  Parent Resources
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink to="/daycare/parents/testimonials" tag={RRNavLink} onClick={toggle}>
                  Testimonials
                </NavLink>
              </DropdownItem>
            </DropdownMenu>
          </DropdownToggle>
        </Nav>
      </Dropdown>
    </Navbar>
  );
};

export default ParentsNav;
