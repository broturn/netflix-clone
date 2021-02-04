import React from "react";
import "./Nav.css";

function Nav() {

    

  return (
    <div className="nav">
      <img
        className="nav__logo"
        src="https://assets.brand.microsites.netflix.io/assets/884000e8-b375-11e7-9274-06c476b5c346_cm_1024w.png?v=21"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default Nav;
