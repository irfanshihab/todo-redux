// import { useAppDispatch } from "@/redux/features/hook";
import { useAppDispatch } from "@/redux/features/hook";
import { Button } from "../ui/button";
import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";
// import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";

// type TTodoCardProps = {
//   id: string;
//   title: string;
//   description: string;
//   isCompleted?: boolean;
// };
// const TodoCard = ({ title, description, id, isCompleted }: TTodoCardProps) => {
//   const dispatch = useAppDispatch();
//   const toggleState = () => {
//     dispatch(toggleComplete(id));
//   };

//   return (
//     <div className="bg-white rounded-md flex justify-between items-center p-3 border">
//       <input
//         onChange={toggleState}
//         type="checkbox"
//         name="complete"
//         id="complete"
//       />
//       <p className="font-semibold">{title}</p>
//       <div>{isCompleted ? "done" : "pending"}</div>
//       <p>{description}</p>
//       <div className="space-x-5">
//         <Button onClick={() => dispatch(removeTodo(id))} className="bg-red-500">
//           {" "}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
//             />
//           </svg>
//         </Button>
//         <Button className="bg-blue-500">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             className="w-6 h-6"
//           >
//             <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
//             <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
//           </svg>
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default TodoCard;
type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};
const TodoCard = ({ title, description, id, isCompleted }: TTodoCardProps) => {
  const dispatch = useAppDispatch();
  const toggleState = () => {
    dispatch(toggleComplete(id));
    console.log(dispatch(toggleComplete(id)));
  };
  return (
    <div>
      <div className="bg-white rounded-md flex justify-between items-center p-3 border">
        <input
          onChange={toggleState}
          type="checkbox"
          name="complete"
          id="complete"
        />
        <p className="font-semibold">{title}</p>
        <div>
          {isCompleted ? (
            <p className="text-green-500">Done</p>
          ) : (
            <p className="text-red-500">pending</p>
          )}
        </div>
        <p>{description}</p>
        <div className="space-x-4">
          <Button
            onClick={() => dispatch(removeTodo(id))}
            className="bg-red-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>{" "}
          </Button>
          <Button className="bg-blue-500">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
              <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
