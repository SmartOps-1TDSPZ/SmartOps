import styled from "styled-components";

export const FeedbackSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const FeedbackTitle = styled.h1`
  font-size: 35px;
  margin: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const FeedbackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

export const ContainerFeedbackCard = styled.div`
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
  flex: 1 1 calc(33.33% - 2rem);
  margin: 1rem;
  padding: 1rem;
  border-radius: 8px;
  max-width: 360px;

  @media (max-width: 1024px) {
    flex: 1 1 calc(50% - 2rem);
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
    max-width: none;
  }
`;

export const FeedbackCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const CardImage = styled.img`
  width: 30px;
  margin-bottom: 1rem;
`;

export const CardText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  flex-grow: 1;
`;

export const CardProfile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const ProfileDetails = styled.div`
  margin-left: 1rem;
`;

export const ProfileName = styled.h1`
  font-size: 18px;
  color: #333;
  margin: 0;
`;

export const ProfileLocation = styled.p`
  font-size: 14px;
  color: gray;
  margin: 0;
`;
