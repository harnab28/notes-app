/* eslint-disable jsx-a11y/alt-text */
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__title">
        <h2>
          <span
            style={{
              background: "#ffae19",
              color: "white",
              padding: "0.25rem 0.5rem",
            }}
          >
            Arnab
          </span>{" "}
          Hazra
        </h2>
      </div>
      <div className="footer__social">
        <a href="https://github.com/harnab28">
          <img src="https://img.icons8.com/fluent/48/000000/github.png" />
        </a>
        <a href="https://www.linkedin.com/in/iarnabhazra/">
          <img src="https://img.icons8.com/material-two-tone/48/000000/linkedin--v1.png" />
        </a>
        <a href="https://www.facebook.com/harnab">
          <img src="https://img.icons8.com/material-two-tone/48/000000/facebook.png" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
