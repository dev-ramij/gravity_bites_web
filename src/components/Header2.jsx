import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/images/logo.png'
import { AiFillCaretRight } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';

const NAVBARS = ["Store Address", "Store Owner", "Document", "Bank Details"];

/**
 * 
 * @param {{onClickBack:()=>void,idx:number}} props 
 * @returns 
 */
function Header2(props) {
  const { onClickBack, idx } = props;
  return (
    <Navbar bg="white" expand="lg" className='shadow-md p-0'>
      <Container fluid="sm">
        <Navbar.Brand href="/" className='p-0'>
          <img className='w-20 h-20' src={Logo} />
        </Navbar.Brand>
        <div
          onClick={onClickBack}
          className='font-semibold text-black text-md mr-4 flex items-center c-pointer'> <BsArrowLeft className='mr-2' />  Back</div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto"
            navbarScroll
          >
            {NAVBARS.map((nav, i) =>
              <div key={i}
                className={`font-semibold text-md ml-4 flex items-center ${idx === i ? 'text-active' : 'text-black'}`}>
                <AiFillCaretRight /> {nav}
              </div>
            )}
            {/* <Nav.Link href="#" className='font-semibold text-black text-md ml-4 flex items-center'></Nav.Link>
            <Nav.Link href="#" className='font-semibold text-black text-md ml-4 flex items-center'> <AiFillCaretRight /> Documents</Nav.Link>
            <Nav.Link href="#" className='font-semibold text-black text-md ml-4 flex items-center'> <AiFillCaretRight /> Bank Details</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header2;