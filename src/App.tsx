import { useState } from 'react';
import styles from './App.module.css';
import './App.module.css';
import UserList from './components/user-list/UserList';
import UserInfo from './components/user-info/UserInfo';
import { useAppSelector } from './store/hooks';
export interface User {
  id:number;
  name:string;
  position:string;
  department:string;
  company:string;
  avatar:string;
}

const App = () => {
  const [userChoice, setUserChoice] = useState<User|null>(null); 
  const users = useAppSelector((state) => state.users.value);

  const handleListClick = (data:User)=>setUserChoice(data)

  return (
    <main>
      <h1 className={styles.header}>Тестовое задание ИНФИНАЙТ СИНЕРДЖИ</h1>
      <div className={styles.users}>
        <UserList users={users} onClick={handleListClick}/>
        <UserInfo user={userChoice}/>
      </div>
    </main>
  )
}

export default App
