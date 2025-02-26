import styled from "styled-components";

const MyPageBoard = styled.div`
  width: 1920px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #f9f9f9;
  // padding: 40px 0;
`;

const MyPageContainer = styled.div`
  width: 1200px;
  display: flex;
  // gap: 40px;
`;

const ProfileSection = styled.div`
  width: 291px;
  background: rgba(226, 226, 226, 1);
  border-radius: 8px;
  padding: 24px;
  height: 331px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  margin-bottom: 60px;

  .profile-image-header {
    font-size: 24px;
    font-weight: 500;
    color: rgba(50, 54, 62, 1);
    margin-bottom: 24px;
    width: 130px;
    height: 22px;
    text-align: center;
  }

  .profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
  }

  .profile-info {
    margin-top: 16px;
    text-align: center;

    .name {
      font-size: 18px;
      font-weight: 500;
      color: #262626;
    }
  }
`;

const BasicInfoSection = styled.div`
  width: 347px;
  height: 986px;
  background: rgba(243, 243, 243, 1);
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid yellow;
  padding-top: 120px;

  .basic-info-title {
    font-size: 20px;
    font-weight: 500;
    color: rgba(50, 54, 62, 1);
    margin-bottom: 24px;
    width: 130px;
    height: 22px;
    text-align: center;
    margin-bottom: 30px;
  }

  .email-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 280px;
    height: 28px;
    margin-bottom: 16px;
    gap: 30px;
  }

  .email-title {
    font-size: 18px;
    font-weight: 500;
    color: rgba(166, 166, 166, 1);
    width: 80px;
  }

  .email {
    color: rgba(166, 166, 166, 1);
    font-size: 18px;
    font-weight: 400;
    width: 90px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .edit-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 280px;
    height: 28px;
    margin-bottom: 16px;
    gap: 30px;
  }

  .edit-title {
    font-size: 18px;
    font-weight: 500;
    color: rgba(166, 166, 166, 1);
    width: 80px;
    height: 28px;
    display: flex;
    align-items: center;
  }

  .edit-content {
    color: rgba(166, 166, 166, 1);
    font-size: 18px;
    font-weight: 400;
    width: 90px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

const StyleSection = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 8px;
  padding: 24px;
  border: 1px solid green;
  padding-top: 140px;

  h2 {
    font-size: 20px;
    font-weight: 600;
    color: #262626;
    margin-bottom: 24px;
  }

  .style-grid {
    display: flex;
    flex-direction: row;
    gap: 24px;
    width: 100%;
    margin-bottom: 40px;

    .style-item {
      flex: 1;
      border-radius: 12px;
      overflow: hidden;
      position: relative;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
      }

      .style-item-image {
        width: 100%;
        height: 180px;
        object-fit: cover;
      }

      .style-item-content {
        padding: 16px;
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0.9),
          rgba(255, 255, 255, 1)
        );
      }

      .style-item-title {
        font-size: 18px;
        font-weight: 600;
        color: #333;
        margin-bottom: 8px;
      }

      .style-item-description {
        font-size: 14px;
        color: #666;
      }
    }
  }
`;

export {
  MyPageBoard,
  MyPageContainer,
  ProfileSection,
  BasicInfoSection,
  StyleSection,
};
