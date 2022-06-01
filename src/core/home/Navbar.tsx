import { NavbarBrand, Navbar, Col } from "reactstrap";

export default function NavBar() {
  return (
    <Navbar color="light" expand="md" light>
      <Col>
        <NavbarBrand href="https://registeredremitsydney.com.au">
          <img
            src="https://registeredremitsydney.com.au/images/rrs-logo.png"
            alt="REGISTERED REMIT SYDNEY"
            width="15%"
            className='class="d-inline-block align-text-top'
            height="15%"
          />
        </NavbarBrand>
      </Col>
    </Navbar>
  );
}
