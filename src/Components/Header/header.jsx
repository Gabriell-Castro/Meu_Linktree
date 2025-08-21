import minhaFoto from "../../Imagens/Meu_avatar.png";
import "./index.css";

const Header = () => {
  return (
    <>
      <header>
        <img src={minhaFoto} alt="" className="minhaFoto" />
        <h1>Gabriel Castro</h1>
        <p className="">Em que posso ajudar?</p>
      </header>
    </>
  );
};

export default Header;
