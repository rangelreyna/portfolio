
function DetailBox({ addClasses, title, text }) {
  return (
    <div className={"detail-box " + addClasses}>
      <div className="detail-box__left">
        <h4 className="title">{title}</h4>
        <div className="accent-line"></div>
      </div>
      <div className="detail-box__right">
        <p>{text}</p>
      </div>
    </div>
  );
}
  
export default DetailBox;