import React from "react";
import s from "../../css/Profile.module.css"
import ava from "../../img/ava.jpg"
import ProfileComponent from "./ProfileComponent";

const Profile = (props) => {
    return (
        <div className={s.main_wrapper}>
            {/* Блок профиля и кол-во заданных вопросов (стата крч) */}
            <div className={s.info_block}>
                {/* Профиль с возможностью редактирования */}
                <div className={s.profile_block}>
                    <img className={s.ava} src={ava} />
                    <div className={s.profile}>
                        <button>Редактировать профиль</button>
                        <h2>Евгений Торгоня</h2>
                        <p>Воч ю ноу эбаут роулинг даун ин э дип, вен ёр брейнс гоу колм, ю кэн колл зэт ментал фриз, вен пипл толк ту мач</p>
                    </div>
                    <div>
                    <p>Участник проекта с 04.05.23</p>
                    </div>
                </div>

                {/* Блок с количеством вопросов */}
                <div className={s.question_block}>
                    <h3>Вопросов задано:</h3>
                    <span>25</span>
                    <h3>Ответов написано:</h3>
                    <span>108</span>

                </div>
            </div>

            {/* Активность пользователя */}
            <div className={s.activity_block}>
                <h3>Активность пользователся</h3>
                <div>
                    <span>Вопросы</span>
                    <span>Ответы</span>
                </div>
                <ProfileComponent />
            </div>
            <button type="">Наверх</button>
        </div>
    )
}

export default Profile;