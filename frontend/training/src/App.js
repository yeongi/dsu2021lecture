import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import userHandler from "./handler/userHandler";

function App() {
  const [userName, setUserName] = useState("");
  const [userDesc, setUserDesc] = useState("");
  const [userID, setUserID] = useState("");
  const [userPW, setUserPW] = useState("");

  const userInsertHandler = async () => {
    const curUser = {
      user_nm: userName,
      user_login_id: userID,
      user_login_pw: userPW,
      user_desc: userDesc,
    };

    const result = await userHandler.create(curUser);

    if (result) {
      console.log("회원가입 성공");
    } else {
      console.log("회원가입 실패");
    }
  };

  return (
    <div className="app-container">
      <h1>회원 가입 페이지</h1>
      <TextField
        id="outlined-basic"
        fullWidth
        label="아이디"
        variant="outlined"
        margin="normal"
        onChange={(e) => {
          setUserID(e.target.value);
        }}
        value={userID}
        required
      />
      <br />
      <TextField
        id="outlined-basic"
        fullWidth
        label="비밀번호"
        variant="outlined"
        type="password"
        margin="normal"
        onChange={(e) => {
          setUserPW(e.target.value);
        }}
        value={userPW}
        required
      />
      <br />
      <TextField
        id="outlined-basic"
        fullWidth
        label="이름"
        variant="outlined"
        margin="normal"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        value={userName}
        required
      />
      <br />
      <TextField
        id="outlined-basic"
        fullWidth
        label="상세정보"
        variant="outlined"
        margin="normal"
        value={userDesc}
        onChange={(e) => {
          setUserDesc(e.target.value);
        }}
        multiline
        rows={4}
        required
      />
      <br />
      <Button variant="contained" fullWidth onClick={userInsertHandler}>
        회원가입 하기
      </Button>
    </div>
  );
}

export default App;
