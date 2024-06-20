import Cat from "./Cat";

const CatsList = ({ cats, setDeleteModal }) => {
  if (null === cats) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex gap-5">
      {cats.map((c) => (
        <Cat key={c.id} c={c} setDeleteModal={setDeleteModal} />
      ))}
    </div>
  );
};
export default CatsList;
