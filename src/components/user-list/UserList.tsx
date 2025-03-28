import { FC, memo } from "react";
import styles from './UserList.module.css';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import { User } from "../user-info/UserInfo";

interface Props {
  users:Array<User>
  onClick:(data:User)=>void
};

const UserList:FC<Props> = ({users,onClick}) => {

  const Row = memo(({ data, index, style }:ListChildComponentProps)=>{
    return (
      <span 
        onPointerDown = {() => onClick({...data[index]})} 
        style={style}> {<span>{`Пользователь ${users[index].id}`}</span>}
      </span>
    )
  })

  return (
    <div className={styles.users}>{
      <List
        height={500}
        width={300}
        itemSize={15}
        itemCount={users.length}
        itemData={users}
    >
      {Row}
    </List>}
    </div>
  );
};

export default UserList;