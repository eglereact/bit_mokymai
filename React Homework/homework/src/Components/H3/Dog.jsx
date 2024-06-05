import "./h3-style.css";

const Dog = ({ dog, c, i }) => {
  return (
    // <>
    //   {/* //1 */}
    //   <div
    //     style={{
    //       backgroundColor: "skyblue",
    //       marginBottom: "5px",
    //       width: "200px",
    //     }}
    //   >
    //     <h1>{dog}</h1>
    //   </div>
    // </>

    // <>
    //   {/* //2 */}
    //   <div
    //     style={{
    //       width: "100px",
    //       height: "100px",
    //       borderRadius: "50%",
    //       backgroundColor: "skyblue",
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //   >
    //     <h3>
    //       {i + 1}. {dog}
    //     </h3>
    //   </div>
    // </>

    <>
      {/* //3 */}
      <div className={c}>
        <h3>{dog}</h3>
      </div>
    </>

    // <>
    //   {/* //4 */}
    //   <div>
    //     <h3>{dog}</h3>
    //   </div>
    // </>

    // <>
    //   {/* //5 */}
    //   <div className={c}>
    //     <h1>{dog.length}</h1>
    //   </div>
    // </>
  );
};
export default Dog;
