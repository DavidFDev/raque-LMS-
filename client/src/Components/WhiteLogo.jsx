import WhiteLogoImg from "../assets/Logo/yctlibrary.png";

const WhiteLogo = () => {
  return (
    <div className="d-flex gap-2 align-items-center flex-nowrap">
      <img
        src={WhiteLogoImg}
        alt="Logo"
        className="img-fluid"
        style={{ maxHeight: "60px", borderRadius: "50%" }}
      />
      <span className="fw-bold text-white">YCTLIBRARY</span>
    </div>
  );
};

export default WhiteLogo;
