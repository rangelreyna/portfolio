
function Hamburger({ isOpen, setIsOpen }) {
  return (
    <a href="#top" className="header__hamburger-btn" onClick={() => setIsOpen(!isOpen)}>
      <div></div>
      <div></div>
      <div></div>
    </a>
  );
}
  
export default Hamburger;