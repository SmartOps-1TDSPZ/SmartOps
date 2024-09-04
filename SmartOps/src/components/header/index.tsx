import * as S from "./styles";

const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet="../assets/Logo-LadingPage.svg"
        />
        <S.Logo src="../assets/Logo-LadingPage.svg" alt="Logo" />
      </picture>
      <S.Title>O lugar certo para seu carro</S.Title>
      <S.Subtitle>
        Assuma o controle total da saúde do seu veículo
        <br />
        Tecnologia que fala a língua do seu carro.
      </S.Subtitle>
    </S.HeaderContainer>
  );
};

export default Header;
