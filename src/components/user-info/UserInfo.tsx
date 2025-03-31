import { FC, useEffect } from "react";
import userDefaultLogo from '../../assets/user.png';
import styles from './UserInfo.module.css';
import { useAppDispatch } from '../../store/hooks';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  position:string,
  department:string,
  company:string,
  exampleRequired: string,
};
import { modify } from '../../store/usersSlice';

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
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<Inputs>();
  useEffect(()=>{
    if(user) {
      setValue('name',user.name);
      setValue('company',user.company);
      setValue('position',user.position);
      setValue('department',user.department);
    }
  },[user,setValue])
  const onSubmit: SubmitHandler<Inputs> = data => {
    if(user) dispatch(
      modify({
      id:user.id,
      name:data.name,
      position:data.position,
      department:data.department,
      company:data.company,
      avatar:user.avatar,
    }));
  };
  return user && (
    <article className={styles.userInfo}>
      <img className={styles.img} src={user.avatar.length > 0 ? user.avatar:userDefaultLogo} alt="user logo" />
      <form className={styles.userDescriptionForm} onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>
          <input className={styles.userHeader} defaultValue={user.name} {...register("name", { required: true })}/>
          <span>Имя</span>
          {errors.name && <span className={styles.error}>Обязательное поле</span>}
        </label>
        <label className={styles.label}>
          <input defaultValue={user.position} {...register("position", { required: true })}/>
          <span>Должность</span>
          {errors.position && <span className={styles.error}>Обязательное поле</span>}
        </label>
        <label className={styles.label}>
          <input defaultValue={user.department} {...register("department", { required: true })}/>
          <span>Отдел</span>
          {errors.department && <span className={styles.error}>Обязательное поле</span>}
        </label>
        <label className={styles.label}>
          <input defaultValue={user.company} {...register("company", { required: true })}/>
          <span>Компания</span>
          {errors.company && <span className={styles.error}>Обязательное поле</span>}
        </label>
        <input className={styles.saveButton} type="submit" title='Изменить' value={'Изменить'}/>
      </form>
    </article>
  )
}

export default UserInfo;