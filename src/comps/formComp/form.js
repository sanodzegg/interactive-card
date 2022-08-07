import React, { useEffect, useRef, useState } from "react";
import "./form.css";

import { ReactComponent as CompleteSVG } from "../../assets/images/icon-complete.svg";

function Form({ setGCN, setGN, setGM, setGY, setGCVC }) {

  const [name, setName] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [cvc, setCVC] = useState(0);

  const [formSent, setFormSent] = useState(false);

  const [showErrors, setShowErrors] = useState(false);

  const [errors, setErrors] = useState({
    name: {
      valid: false,
      message: "Name is required."
    },
    cardNum: {
      valid: false,
      message: "Card number is required."
    },
    month: {
      valid: false,
      message: "Month is required."
    },
    year: {
      valid: false,
      message: "Year is required."
    },
    cvc: {
      valid: false,
      message: "CVC is required."
    }
  });

  const nameRef = useRef(null);
  const numRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const cvcRef = useRef(null);

  const handleName = (e) => {
    setGN(e);

    if (e.length > 2) {
      setName(e);
      setErrors((p) => ({
        ...p,
        name: {
          valid: true
        }
      }));
    } else {
      setName("");
      setErrors((p) => ({
        ...p,
        name: {
          valid: false,
          message: "Name is required."
        }
      }));
    }
  }

  const handleCardNum = (e) => {

    const textArr = e.split("");
    const textinfield = textArr.filter(e => e.match(/[a-zA-Z]/g));

    const parsedValue = e.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();

    numRef.current.value = parsedValue;
    setGCN(parsedValue);

    if (e.length === 19) {
      setCardNum(e);
      setErrors((p) => ({
        ...p,
        cardNum: {
          valid: true
        }
      }));
    } else if (textinfield.length > 0) {
      setErrors((p) => ({
        ...p,
        cardNum: {
          valid: false,
          message: "Wrong format, numbers only."
        }
      }));
    } else {
      setCardNum(0);
      setErrors((p) => ({
        ...p,
        cardNum: {
          valid: false,
          message: "Number must be 16 digits long."
        }
      }));
    }
  }

  const handleMonth = (e) => {
    const textArr = e.split("");
    const textinfield = textArr.filter(e => e.match(/[a-zA-Z]/g));
    setGM(e);

    if (e.length === 2) {
      setMonth(e);
      yearRef.current.focus();
      setErrors((p) => ({
        ...p,
        month: {
          valid: true,
        }
      }));
    } else if (textinfield.length > 0) {
      setErrors((p) => ({
        ...p,
        month: {
          valid: false,
          message: "Can't include letters."
        }
      }));
    } else {
      setErrors((p) => ({
        ...p,
        month: {
          valid: false,
          message: "Can't be blank."
        }
      }));
    }
  }

  const handleYear = (e) => {
    const textArr = e.split("");
    const textinfield = textArr.filter(e => e.match(/[a-zA-Z]/g));
    setGY(e);

    if (e.length === 2) {
      setYear(e);
      cvcRef.current.focus();
      setErrors((p) => ({
        ...p,
        year: {
          valid: true
        }
      }));
    } else if (textinfield.length > 0) {
      setErrors((p) => ({
        ...p,
        year: {
          valid: false,
          message: "Can't include letters."
        }
      }));
    } else {
      setErrors((p) => ({
        ...p,
        year: {
          year: false,
          message: "Can't be blank."
        }
      }));
    }
  }

  const handleCVC = (e) => {
    const textArr = e.split("");
    const textinfield = textArr.filter(e => e.match(/[a-zA-Z]/g));
    setGCVC(e);

    if (e.length === 3) {
      setCVC(e);
      setErrors((p) => ({
        ...p,
        cvc: {
          valid: true
        }
      }));
    } else if (textinfield.length > 0) {
      setErrors((p) => ({
        ...p,
        cvc: {
          valid: false,
          message: "Can't include letters."
        }
      }));
    } else {
      setErrors((p) => ({
        ...p,
        cvc: {
          year: false,
          message: "Can't be blank."
        }
      }));
    }
  }

  const nullifyCard = () => {
    setGCN("");
    setGN("");
    setGM("");
    setGY("");
    setGCVC("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const areErrors = [];

    Object.values(errors).forEach(e => {
      if (!e.valid) {
        setShowErrors(true);
        areErrors.push(e);
      }
    });

    if (areErrors.length === 0) {
      console.log({
        name,
        cardNum,
        month,
        year,
        cvc
      });
      nameRef.current.value = "";
      numRef.current.value = "";
      monthRef.current.value = "";
      yearRef.current.value = "";
      cvcRef.current.value = "";

      setFormSent(true);
    }
  }

  const handleContinue = () => {
    nullifyCard();
    setFormSent(false);
  }

  if (formSent) {
    return (
      <div className="endWrapper">
        <CompleteSVG />
        <h1>thank you</h1>
        <span>We've added your card details.</span>
        <button onClick={handleContinue}>Continue</button>
      </div>
    )
  }

  return (
    <form action="#">
        <>
          <label htmlFor="name">cardholder name</label>
          <input className={showErrors && !errors.name.valid ? "rl" : null} ref={nameRef} type="text" name="name" onChange={(e) => handleName(e.target.value)} placeholder="e.g. Jane Appleseed" />
          <span>{showErrors && !errors.name.valid ? errors.name.message : null}</span>
        </>
        <>
          <label htmlFor="cardNum">card number</label>
          <input className={showErrors && !errors.cardNum.valid ? "rl" : null} type="text" name="cardNum" maxLength={19} onChange={(e) => handleCardNum(e.target.value)} placeholder="e.g. 1234 5678 9123 0000" ref={numRef} />
          <span>{showErrors && !errors.cardNum.valid ? errors.cardNum.message : null}</span>
        </>
        <div className="lowerForm">
            <div className="formDate">
                <label htmlFor="mm">EXP. Date (MM/YY)</label>
                <div className="formDateWrapper">
                  <input ref={monthRef} className={showErrors && !errors.month.valid ? "rl" : null} type="text" name="mm" maxLength={2} onChange={(e) => handleMonth(e.target.value)} placeholder="MM" />
                  <input className={showErrors && !errors.year.valid ? "rl" : null} type="text" maxLength={2} ref={yearRef} onChange={(e) => handleYear(e.target.value)} placeholder="YY" />
                </div>
                <span>{showErrors && !errors.month.valid ? errors.month.message : showErrors && !errors.year.valid ? errors.year.message : null}</span>
            </div>
            <div>
              <label htmlFor="CVC">CVC</label>
              <input className={showErrors && !errors.cvc.valid ? "cvcval rl" : "cvcval"} type="text" maxLength={3} onChange={(e) => handleCVC(e.target.value)} ref={cvcRef} name="CVC" placeholder="e.g. 123" />
              <span>{showErrors && errors.cvc.message}</span>
            </div>
        </div>

        <button onClick={(e) => handleSubmit(e)} type="submit">Confirm</button>
    </form>
  )
}

export default Form;
