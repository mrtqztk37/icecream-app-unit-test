import React, { useState } from "react";

const Form = () => {
  const [isChecked, setIsChecked] = useState();
  const [isHover, setIsHover] = useState(false);
  return (
    <form className="d-flex flex-row gap-1 align-items-center mb-5">
      <input
        onChange={(e) => setIsChecked(e.target.checked)}
        id="terms"
        type="checkbox"
        className="form-chechk-input"
      />

      <div className="terms-wrapper">
        <p
          style={{
            visibility: isHover ? "visible" : "hidden",
          }}
        >
          Size gerçekten bir şey teslim etmeyeceğiz
        </p>
        <label htmlFor="terms">Koşulları okudum ve kabul ediyorum </label>
      </div>

      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        disabled={!isChecked}
        className="btn btn-primary"
      >
        Siparişi Onayla
      </button>
    </form>
  );
};

export default Form;
