const CustomLabel = ({ icon, text, className }) => {
  return (
    <div className={className}>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </div>
  );
};

export default CustomLabel;
