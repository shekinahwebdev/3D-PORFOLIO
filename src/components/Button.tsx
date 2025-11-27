const Button = ({ className, text, id }: any) => {
  return (
    <a className={`${className ?? ""} cta-wrapper`}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/assets-2/images/arrow-down.svg" alt="arrow-down-button" />
        </div>
      </div>
    </a>
  );
};

export default Button;
