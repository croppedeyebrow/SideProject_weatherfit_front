import React, { useState } from "react";
import {
  StyleSection,
  TabContainer,
  TabItem,
  ContentContainer,
  SelectContainer,
  DetailContainer,
  StyleButton,
} from "./MypageStyle";

const StyleGrid = () => {
  // 각 카테고리에 대한 데이터 정의
  const styleCategories = [
    {
      title: "날씨별",
      content: "날씨별 스타일 콘텐츠가 여기에 표시됩니다.",
      details: ["맑음", "비", "눈", "흐림", "바람", "더움"],
    },
    {
      title: "스타일별",
      content: "스타일별 콘텐츠가 여기에 표시됩니다.",
      details: ["미니멀", "모던", "캐주얼", "스트릿", "러블리", "럭셔리"],
    },
    {
      title: "상황별",
      content: "상황별 콘텐츠가 여기에 표시됩니다.",
      details: ["데이트", "출근", "여행", "운동", "모임", "일상"],
    },
  ];

  const [activeTab, setActiveTab] = useState(1); // 기본적으로 "스타일별" 탭 활성화
  const [activeDetails, setActiveDetails] = useState([]);

  const toggleDetail = (detail) => {
    if (activeDetails.includes(detail)) {
      setActiveDetails(activeDetails.filter((item) => item !== detail));
    } else {
      setActiveDetails([...activeDetails, detail]);
    }
  };

  return (
    <StyleSection>
      <h2>마이 스타일</h2>

      <TabContainer>
        <SelectContainer>
          {styleCategories.map((category, index) => (
            <TabItem
              key={category.title}
              active={activeTab === index}
              onClick={() => setActiveTab(index)}
            >
              {category.title}
            </TabItem>
          ))}
        </SelectContainer>

        <DetailContainer>
          {styleCategories[activeTab].details.map((detail) => (
            <StyleButton
              key={detail}
              active={activeDetails.includes(detail)}
              onClick={() => toggleDetail(detail)}
            >
              {detail}
            </StyleButton>
          ))}
        </DetailContainer>
      </TabContainer>

      <ContentContainer>{styleCategories[activeTab].content}</ContentContainer>
    </StyleSection>
  );
};

export default StyleGrid;
