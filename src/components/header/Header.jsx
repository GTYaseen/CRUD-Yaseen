import React from "react";
import Container from "../containter/Container";
import "./Header.css";

function Header() {
  return (
    <div className="border">
      <Container>
        <div className="header">
          <h1>DashBoard</h1>
          <div className="user">
            <h1>Yaseen</h1>
            <div className="img">
              <img src="https://cdn.discordapp.com/attachments/1051177077438685186/1176241470043340862/Yaseen.jpg?ex=656e273b&is=655bb23b&hm=4c8f28e99e0d1abcbad3f1ffd163b08ec93c6ba3aed67d431a73170158333bac&" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
