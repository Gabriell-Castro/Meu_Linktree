import minhaFoto from "../../Imagens/minhaft.jpg";
import "./index.css";

const Header = () => {
  return (
    <>
      <header>
        <img src={minhaFoto} alt="" className="minhaFoto anima-image" />
        <h1>Gabriel Castro</h1>
        <p className="anima-image">Em que posso ajudar?</p>
      </header>
    </>
  );
};

export default Header;
