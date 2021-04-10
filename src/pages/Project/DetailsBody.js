import ReactHtmlParser from 'react-html-parser';
import { icon_asterisk } from 'assets/svgs';

function DetailsBody({ detailText, hasFMCredit, FMChallenge }) {
  return (
    <div className="details-body">
      {detailText.map((paragraph, index) => (
        <p key={index} className="details-body__paragraph">
          {ReactHtmlParser(paragraph) /* parsing to enable html <strong> tags */} 
        </p>
      ))}
      {hasFMCredit && FMChallenge && (
        <div className="details-body__FMCredit">
          <img className="asterisk" src={icon_asterisk} alt="asterisk"/>
          <p>This project was a challenge from 
            <a className="link" href={FMChallenge} target="_blank" rel="noreferrer"> Frontend Mentor</a>.
          </p>
        </div>
      )}
      <div className="division"></div>
    </div>
  );
}
  
export default DetailsBody;