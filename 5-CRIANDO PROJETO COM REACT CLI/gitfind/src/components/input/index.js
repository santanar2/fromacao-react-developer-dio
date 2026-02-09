import './style.css';

export default function Input({ value, onChange, placeholder }) {
  return (
    <input
      type="text"
      className="input"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
