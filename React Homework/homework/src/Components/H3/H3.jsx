import Dog from "./Dog";

const H3 = () => {
  const dogs = ["šuo", "šunius", "Bobikas", "kudlius", "Šarikas", "avigalvis"];
  const startsWithLowercase = (word) => /^[\p{Ll}]/u.test(word);
  return (
    <div>
      {/* //1 */}
      {/* {dogs.map((dog, i) => (
        <Dog key={i} dog={dog} />
      ))} */}

      {/* //2 */}
      {/* {dogs
        .sort((a, b) => b.length - a.length)
        .map((dog, i) => (
          <Dog key={i} dog={dog} i={i} />
        ))} */}

      {/* //3 */}
      {dogs.map((dog, i) =>
        i % 2 == 0 ? (
          <Dog key={i} dog={dog} c="sq" />
        ) : (
          <Dog key={i} dog={dog} c="circle" />
        )
      )}

      {/* //4 */}
      {/* {dogs.filter(startsWithLowercase).map((dog, i) => (
        <Dog key={i} dog={dog} />
      ))} */}

      {/* //5 */}
      {/* {dogs.map((dog, i) =>
        dog.length > 6 ? (
          <Dog key={i} dog={dog} c="green" />
        ) : (
          <Dog key={i} dog={dog} c="red" />
        )
      )} */}
    </div>
  );
};
export default H3;
