import React from "react";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      <div className="logo">WEATHER FIT</div>
      <nav>
        <ul
          style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}
        ></ul>
      </nav>
      <div className="user-icon">
        {/* 사용자 아이콘 추가 */}
        <span>👤</span>
      </div>
    </header>
  );
};

export default Header;
