// import { useAppSelector } from "@/redux/features/hook";
// import AddTodoModal from "./AddTodoModal";
// import TodoCard from "./TodoCard";
// import TodoFilter from "./TodoFilter";
// import { useGetTodosQuery } from "@/redux/api/api";

// const TodoContainer = () => {
//   // from local state
//   // const { todos } = useAppSelector((state) => state.todos);

//   // from server
//   const [data: todos, isError, isLoading] = useGetTodosQuery(undefined);

//   if (isLoading){
//     return <p>Loading.....</p>
//   }
//   return (
//     <div>
//       <div className="flex justify-between mb-5">
//         <AddTodoModal></AddTodoModal>
//         <TodoFilter></TodoFilter>
//       </div>
//       <div className="bg-primary-gradient  w-full h-full rounded-xl p-5 space-y-3">
//         {/* <TodoCard></TodoCard>
//         <TodoCard></TodoCard>
//         <TodoCard></TodoCard>
//         <TodoCard></TodoCard> */}
//         {todos?.data.map((item) => (
//           <TodoCard id={""} {...item}></TodoCard>
//         ))}

//         {/* <div className="bg-white p-3 font-bold text-2xl  flex justify-center items-center rounded-lg">
//           <p>There is no task pending</p>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default TodoContainer;
