import { styled } from "styled-components";

const InputComp = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 10px;

  input {
    width: 420px;
    height: 60px;
    padding: 0 15px;
    border: 1px solid #e1e1e1;
    outline: none;
    border-radius: 10px;
    font-size: 14px;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #007bff;
    }

    &::placeholder {
      color: #999;
    }
  }

  .msg {
    position: absolute;
    padding-top: 5px;
    padding-left: 2px;
    color: #ff4d4f;
    font-size: 12px;
  }
`;

export const Input = (props) => {
  const { value, holder, changeEvt, type, msg } = props;
  return (
    <InputComp>
      <input
        type={type || "text"}
        value={value}
        placeholder={holder}
        onChange={changeEvt}
      />
      {msg && <div className="msg">{msg}</div>}
    </InputComp>
  );
};

export const LoginButton = styled.button`
  width: 419px;
  height: 65px;
  border: none;
  font-weight: 500;
  font-size: 20px;
  background-color: ${(props) => (props.$isValid ? "#4981f8" : "#cccccc")};
  color: white;
  border-radius: 5px;
  cursor: ${(props) => (props.$isValid ? "pointer" : "not-allowed")};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.$isValid ? "#3a6cd4" : "#cccccc")};
  }
`;

export const JoinButton = styled.button`
  width: 100%;
  height: 45px;
  border: none;
  font-weight: 600;
  font-size: 15px;
  background-color: #cccccc;
  color: #5d5e62;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

export const CombinedInputComp = styled.div`
  width: 100%;
  position: relative;
  // margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);

  input {
    width: 100%;
    height: 55px;
    padding: 0 20px;
    border: none;
    outline: none;
    font-size: 16px;
    color: #333;
    background-color: transparent;
    box-sizing: border-box;

    &:focus {
      background-color: rgba(0, 123, 255, 0.03);
    }

    &::placeholder {
      color: #888;
      font-size: 16px;
    }
  }

  .divider {
    width: 100%;
    height: 1px;
    background-color: #ddd;
  }

  .msg {
    position: absolute;
    bottom: -20px;
    left: 0;
    padding-left: 20px;
    color: #ff4d4f;
    font-size: 12px;
  }
`;

export const CombinedInput = (props) => {
  const { emailValue, pwValue, emailChangeEvt, pwChangeEvt, emailMsg, pwMsg } =
    props;
  return (
    <CombinedInputComp>
      <input
        type="text"
        value={emailValue}
        placeholder="아이디"
        onChange={emailChangeEvt}
      />
      <div className="divider"></div>
      <input
        type="password"
        value={pwValue}
        placeholder="비밀번호"
        onChange={pwChangeEvt}
      />
      {(emailMsg || pwMsg) && <div className="msg">{emailMsg || pwMsg}</div>}
    </CombinedInputComp>
  );
};
