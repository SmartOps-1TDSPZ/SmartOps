import React from "react";
import Logo from "../../assets/Logo-LadingPage.svg";
import AmandaImg from "../../assets/assets.itegrantes/Amanda.jpeg";
import JuanImg from "../../assets/assets.itegrantes/Juan.jpeg";
import RafaelImg from "../../assets/assets.itegrantes/Rafael.jpeg";
import "./styles.css";
import { Link } from "react-router-dom";

interface Member {
  name: string;
  rm: string;
  imgSrc: string;
  githubLink: string;
}

const members: Member[] = [
  {
    name: "Amanda Mesquita Cirino da Silva",
    rm: "RM: 559177",
    imgSrc: AmandaImg,
    githubLink: "https://github.com/mandyy14",
  },
  {
    name: "Juan Pablo Ruiz de Souza",
    rm: "RM: 557727",
    imgSrc: JuanImg,
    githubLink: "https://github.com/JuanPabloRuiz583",
  },
  {
    name: "Rafael Souza Bezerra",
    rm: "RM: 557888",
    imgSrc: RafaelImg,
    githubLink: "https://github.com/Rafazls",
  },
];

const Integrantes: React.FC = () => {
  return (
    <div className="integrantes-page">
      <header className="integrantes-header">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" />
        </Link>
        <h2 className="integrantes-title">Integrantes</h2>
      </header>

      <section className="integrantes-row">
        {members.map((member, index) => (
          <div className="integrantes-column" key={index}>
            <div className="integrantes-card">
              <img
                src={member.imgSrc}
                alt={member.name}
                className="integrantes-image"
              />
              <div className="integrantes-container">
                <h3 className="integrantes-name">{member.name}</h3>
                <p className="integrantes-rm">{member.rm}</p>
                <p>
                  <button className="integrantes-button">
                    <a
                      href={member.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <footer className="integrantes-footer">
        <h3>Github SmartOps:</h3>
        <p>
          <button className="integrantes-button">
            <a
              href="https://github.com/SmartOps-1TDSPZ/SmartOps"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github SmartOps
            </a>
          </button>
        </p>
      </footer>
    </div>
  );
};

export default Integrantes;
