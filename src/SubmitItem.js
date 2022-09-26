const Submit = (props) => {
  return (
    <input type={props.type} value={props.value} onClick={props.onclick} />
  );
};

export default Submit;
