import { useState } from "react";

function Event_ex() {
  let [users, setUsers] = useState([
    {
      user_name: "코디",
      user_email: "codi@gmail.com",
    },
    {
      user_name: "윤소희",
      user_email: "yoonsohee@gmail.com",
    },
  ]);

  let [name, setName] = useState();
  let [email, setEmail] = useState();

  return (
    <div>
      <input
        type="text"
        placeholder="이름"
        onChange={(e) => {
          setName(e.target.value);
        }}
      ></input>

      <input
        type="email"
        placeholder="이메일"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        onKeyUp={() => {
          if (window.event.keyCode == 13) {
            setUsers([...users, { user_name: name, user_email: email }]);
          }
        }}
      ></input>

      <button
        onClick={() => {
          setUsers([...users, { user_name: name, user_email: email }]);
        }}
      >
        등록
      </button>
      {users.map((a, i) => {
        return (
          <div
            onDoubleClick={() => {
              let list = users.filter((b, j) => {
                return users[j] != users[i];
              });
              setUsers(list);
            }}
          >
            {users[i].user_name}: {users[i].user_email}
          </div>
        );
      })}
    </div>
  );
}

export default Event_ex;
