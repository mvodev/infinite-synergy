import { FC } from "react";
import userDefaultLogo from '../../assets/user.png';
import styles from './UserInfo.module.css';

export interface User {
  id:number;
  name:string;
  position:string;
  department:string;
  company:string;
  avatar:string;
}

interface Props {
  user:User|null
}

const UserInfo:FC<Props> = ({user}) => {
  return user && (
    <article className={styles.userInfo}>
      <img className={styles.img} src={user.avatar.length > 0 ? user.avatar:userDefaultLogo} alt="user logo" />
      <div className={styles.userDescription}>
        <h5 className={styles.userHeader}>{user.name}</h5>
        <span>Должность: {user.position}</span>
        <span>Отдел: {user.department}</span>
        <span>Компания: {user.company}</span>
        <button className={styles.saveButton}>Сохранить</button>
      </div>
    </article>
  )
}

export default UserInfo;