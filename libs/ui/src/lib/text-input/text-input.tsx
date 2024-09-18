import styles from './text-input.module.css';

interface TextInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export function TextInput({
  value,
  onChange,
  onKeyDown,
  placeholder,
}: TextInputProps) {
  return (
    <input
      className={styles['container']}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder || 'Introduzca un texto...'}
      type="text"
      value={value}
    />
  );
}

export default TextInput;
