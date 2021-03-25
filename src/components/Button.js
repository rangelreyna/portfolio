
function Button({ className, onClick, content }) {
  return (
    <button className={className + " button"} onClick={onClick}>
      {content}
    </button>
  );
}
  
export default Button;