import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const isFormComplete =
    form.name.trim() !== "" &&
    form.email.trim() !== "" &&
    form.password !== "" &&
    form.passwordConfirm !== "";

  const handleSubmit = (event) => {
    event.preventDefault();

    if (form.password !== form.passwordConfirm) {
      window.alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    window.alert("회원가입 입력이 완료되었습니다.");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-80 flex-col gap-6"
      >
        <h1 className="title-sm text-neutral-500">회원가입</h1>

        <div className="flex flex-col gap-4">
          <Input
            label="이름"
            name="name"
            placeholder="이름을 입력해주세요"
            value={form.name}
            onChange={handleChange}
          />

          <Input
            label="이메일"
            name="email"
            type="email"
            placeholder="이메일을 입력해주세요"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            label="비밀번호"
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            value={form.password}
            onChange={handleChange}
          />

          <Input
            label="비밀번호 확인"
            name="passwordConfirm"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            value={form.passwordConfirm}
            onChange={handleChange}
          />
        </div>

        <Button
          text="회원가입"
          type="submit"
          disabled={!isFormComplete}
        />
      </form>
    </main>
  );
}