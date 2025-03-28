import { useState } from 'react';
import styles from './App.module.css';
import './App.module.css';
import UserList from './components/user-list/UserList';
import UserInfo from './components/user-info/UserInfo';

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
  const users = new Array(1000000).fill({}).map((_,index)=>{ 
      return {
        id:index+1,
        name:`user ${(index+1)}`,
        position:`user position ${(index + 1)}`,
        department:`user department ${(index + 1)}`,
        company:'user company',
        avatar:''
      }
    }
  );

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
