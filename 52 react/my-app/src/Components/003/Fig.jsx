import "./fruit.scss";

const Fig = ({ fruit }) => {
  return (
    <li className="f-li">
      <div className="fig-sq" style={{ backgroundColor: fruit.color }}>
        <h3>{fruit.id}</h3>
        <h4>{fruit.name}</h4>
      </div>
    </li>
  );
};
export default Fig;
