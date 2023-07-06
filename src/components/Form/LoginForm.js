import s from "./LoginForm.module.scss";

export const LoginForm = () => {
  return (
    <form className={s.form}>
      <div className={s.inputField}>
        <span className={`${s.icon} ${s.username}`}></span>
        <input
          className={s.input}
          id="name"
          name="name"
          type="text"
          minLength={2}
          maxLength={100}
          placeholder="Username"
          required
        />
      </div>

      <div className={s.inputField}>
        <span className={`${s.icon} ${s.email}`}></span>
        <input
          className={s.input}
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          required
        />
      </div>
    </form>
  )
}