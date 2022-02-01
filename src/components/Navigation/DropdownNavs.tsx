import { useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const AboutNav = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Dropdown
      nav
      isOpen={isOpen} toggle={toggle}
    >
      <DropdownToggle
        caret
        nav
        className="no-hover-color"
      >
        About Us
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <NavLink to="/about" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>About Caring Child</NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/about/caring-child-history" tag={RRNavLink} onClick={toggle}>
            Caring Child Daycare&apos;s History
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/about/curriculum" tag={RRNavLink} onClick={toggle}>
            Curriculum
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/about/faq" tag={RRNavLink} onClick={toggle}>
            FAQ
          </NavLink>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

const ProgramNav = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Dropdown
      nav
      isOpen={isOpen} toggle={toggle}
    >
      <DropdownToggle
        caret
        nav
        className="no-hover-color"
      >
        Caring Programs
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <NavLink to="/programs/infants-and-toddlers" exact activeClassName="active" tag={RRNavLink} onClick={toggle}>
            Infants &amp; Toddlers.
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/programs/twos" tag={RRNavLink} onClick={toggle}>
            Twos
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/programs/preschool" tag={RRNavLink} onClick={toggle}>
            PreSchool
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/programs/private-pre-k" tag={RRNavLink} onClick={toggle}>
            Private Pre-K
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/programs/after-school" tag={RRNavLink} onClick={toggle}>
            After School
          </NavLink>
        </DropdownItem>
        <DropdownItem>
          <NavLink to="/programs/summer-camp" tag={RRNavLink} onClick={toggle}>
            Summer Camp
          </NavLink>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export { AboutNav, ProgramNav };