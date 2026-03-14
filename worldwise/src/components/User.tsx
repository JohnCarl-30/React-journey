import styles from "./User.module.css";


interface FAKE_USERProps {
    name: string;
    email: string;
    password?: string;
    avatar: string;
}
const FAKE_USER: FAKE_USERProps = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function User() {
  const user = FAKE_USER;

  function handleClick() {}

  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;

