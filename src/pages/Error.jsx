import { Link } from "react-router-dom";
import "../Styles/Error.css"; 
export default function Error() {
  return (
    <div className="error-container">
      <h1>404 - Page Not Found</h1>
      
      <div className="error-message">
        <p>This page doesn't exist...</p>
        <p className="roast">Just like your imaginary girlfriend</p>
        <span className="emoji" role="img" aria-label="cold truth">":("</span>
      </div>

      <div className="error-actions">
        <Link to="/Home" className="back-button">
          Return to Reality
        </Link>
        <p className="pro-tip">Pro Tip: Maybe stop making up URLs (and relationships)</p>
      </div>
    </div>
  );
}