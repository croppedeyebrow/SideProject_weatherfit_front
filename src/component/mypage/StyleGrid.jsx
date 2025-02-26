import React from "react";
import { StyleSection } from "./MypageStyle";
import sunnynohand from "../../assets/sunnynohand.png";
import raniny from "../../assets/raniny.png";
import snowy from "../../assets/snowy.png";

const StyleGrid = () => {
  // 각 카테고리에 대한 데이터 정의
  const styleCategories = [
    {
      title: "날씨별",
      image: sunnynohand,
      description: "날씨에 맞는 스타일 추천",
    },
    {
      title: "스타일별",
      image: raniny,
      description: "나만의 스타일 모음",
    },
    {
      title: "상황별",
      image: snowy,
      description: "다양한 상황에 맞는 코디",
    },
  ];

  return (
    <StyleSection>
      <h2>마이 스타일</h2>

      <div className="style-grid">
        {styleCategories.map((category) => (
          <div key={category.title} className="style-item">
            <img
              src={category.image}
              alt={category.title}
              className="style-item-image"
            />
            <div className="style-item-content">
              <div className="style-item-title">{category.title}</div>
              <div className="style-item-description">
                {category.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </StyleSection>
  );
};

export default StyleGrid;
