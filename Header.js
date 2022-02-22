 import {Container,FormControl,Navbar,Nav,Dropdown,Badge} from 'react-bootstrap';
 import {BsFillPeopleFill} from 'react-icons/bs';
 import {Link} from 'react-router-dom';
//import App from '../App';
//import  './App.css';
 
 const Header =()=>{
    return(
        <Navbar bg="dark" variant='dark'style={{height:80}}>
        <Container>
        <Navbar.Brand>
            <Link to ='/'>Attendance Tracker</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
            <FormControl 
            style={{width:500}}
            placeholder="Search"
            className='m-auto'
            >

            </FormControl>
        </Navbar.Text>
        <Nav>
            <Dropdown alignRight>
            <Dropdown.Toggle variant='primary'>
            <BsFillPeopleFill color='white' fontSize='25px'/>
                <Badge>{10}</Badge>   
            </Dropdown.Toggle> 

            <Dropdown.Menu style={{minWidth:370}}>
              <span style={{padding:10}}>Nill</span>  
            </Dropdown.Menu>   
            </Dropdown>
        </Nav>
        </Container>
        </Navbar>
    )
}
export default Header;