import React from "react";
import s from "../../../css/CommentForm.module.css"

const CommentForm = (props) => {
    return (
        <div className={s.wrapper}>
            <textarea className={s.textarea} placeholder="Напишите что-нибудь"></textarea>
            <button>Отправить</button>
        </div>
    )
}

export default CommentForm;