
function DetailsHeader({ technologies, date, github }) {
  return (
    <div className="details-header">
      <div className="details-header__metadata-container">
        <p>{technologies}</p>
        <p>{date}</p>
      </div>
      <div className="division"></div>
      <div className="details-header__metadata-container">
        <h5 className="heading">Project Background</h5>
        <a href={github} target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
}
  
export default DetailsHeader;