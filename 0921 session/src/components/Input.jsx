export default function Input({
  label,
  name,
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  disabled = false,
}) {
  const isFilled = value.length > 0;

  let stateClass = "border-neutral-200 bg-white text-neutral-500";

  if (isFilled) {
    stateClass = "border-neutral-400 bg-white text-neutral-500";
  }

  if (disabled) {
    stateClass =
      "cursor-not-allowed border-neutral-200 bg-neutral-100 text-neutral-300";
  }

  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={name}
        className={`body-md ${
          disabled ? "text-neutral-300" : "text-neutral-500"
        }`}
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`
          body-md w-full rounded-xl border px-6 py-3
          outline-none transition-colors
          placeholder:text-neutral-300
          focus:border-primary-500
          ${stateClass}
        `}
      />
    </div>
  );
}