import { FaCircleCheck } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

const Messages = ({ msg, removeMsg }) => {
  if (msg.length === 0) {
    return null;
  }

  return (
    <div className="fixed top-10 right-10 flex flex-col gap-2 z-10">
      {msg.map((m) => (
        <div key={m.id}>
          {m.type === "success" && (
            <div className="flex justify-between items-center gap-2 shadow bg-white rounded-lg p-4">
              <div className="bg-green-100 p-2 rounded">
                <FaCircleCheck className="text-green-600" />
              </div>
              <div className="text-gray-500 text-sm">{m.text}</div>
              <button
                type="button"
                className=" text-gray-400 hover:bg-gray-100 rounded hover:text-gray-600"
                onClick={() => removeMsg(m.id)}
              >
                <IoIosClose size={30} />
              </button>
            </div>
          )}
          {m.type === "danger" && (
            <div className="flex justify-between items-center gap-2 shadow bg-white rounded-lg p-4">
              <div className="bg-red-100 p-2 rounded">
                <IoCloseCircle className="text-red-600" />
              </div>
              <div className="text-gray-500 text-sm">{m.text}</div>
              <button
                type="button"
                className=" text-gray-400 hover:bg-gray-100 rounded hover:text-gray-600"
                onClick={() => removeMsg(m.id)}
              >
                <IoIosClose size={30} />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Messages;
