
function Logo({ logo, title }) {
  return (
    <div className="logo">
      <img src={logo} alt={"logo-" + title}/>
      <p>{title}</p>
    </div>
  );
}
  
export default Logo;