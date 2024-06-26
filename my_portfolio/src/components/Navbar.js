import '../Scss/Navbar.scss';

function Navbar() {
  const refreshPage = ()=>{
		window.location.href='/';
	}

  return(
    <>
    <header>
      <nav id="navbar">
        <ul>
          <li id="navbar_name" onClick={() => {refreshPage()}}>Arturo Duran</li>
          <li><a className="navbar_link" href="#home">Home</a></li>
          <li><a className="navbar_link" href="#about">About</a></li>
          <li><a className="navbar_link" href="#projects">Projects</a></li>
          <li><a className="navbar_link" href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Navbar;