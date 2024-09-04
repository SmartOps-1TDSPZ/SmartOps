import * as S from "./styles";

import Aspas from "../../../../assets/Aspas-LadingPage.svg";
import Profile from "../../../../assets/ProfileModel-LadingPage.svg";

const feedbacks = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Pedro Silva",
    location: "New York, NY",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Marina Silva",
    location: "Rio de Janeiro, RJ",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Rafael Bezerra",
    location: "Santa Cruz, CA",
  },
];

const Feedbacks: React.FC = () => {
  return (
    <>
      <S.FeedbackTitle>FeedBacks dos clientes</S.FeedbackTitle>
      <S.FeedbackSection>
        {feedbacks.map((feedback) => (
          <S.ContainerFeedbackCard key={feedback.id}>
            <S.FeedbackCard>
              <S.CardImage src={Aspas} alt="Quote" />
              <S.CardText>{feedback.text}</S.CardText>
              <S.CardProfile>
                <S.ProfileImage src={Profile} alt="Profile" />
                <S.ProfileDetails>
                  <S.ProfileName>{feedback.name}</S.ProfileName>
                  <S.ProfileLocation>{feedback.location}</S.ProfileLocation>
                </S.ProfileDetails>
              </S.CardProfile>
            </S.FeedbackCard>
          </S.ContainerFeedbackCard>
        ))}
      </S.FeedbackSection>
    </>
  );
};

export default Feedbacks;
