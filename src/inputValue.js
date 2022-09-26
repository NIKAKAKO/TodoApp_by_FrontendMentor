const InputValue = (props) => {
  return (
    <input
      value={props.value}
      type={props.text}
      onChange={props.onchange}
      placeholder={props.placeholder}
    />
  );
};

export default InputValue;
