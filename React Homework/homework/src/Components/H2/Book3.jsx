const Book3 = ({ title, author, textColor }) => {
  return (
    <>
      <h1 style={{ color: textColor }}>{title}</h1>
      <h2 style={{ color: textColor }}>{author}</h2>
    </>
  );
};
export default Book3;
