import { useRecoilState, useRecoilValue } from "recoil";
import { toDoState, toDoSelector, categoryState, Category } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

// const value = useRecoilValue(toDoState); ->  recoil 값만 불러올때
function ToDoList() {
    // toDoState 자체를 렌더링할때 불러오는 정보 
    // const toDos = useRecoilValue(toDoState);
    const toDos = useRecoilValue(toDoSelector)
    const [category, setCategory] = useRecoilState(categoryState)
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        const { currentTarget: { value } } = event
        setCategory(value as any);
    }

    // 카테고리 별 렌더링 및 분류를 위한 selector 불러오기
    // const [toDo, doing, done] = useRecoilValue(toDoSelector);
    // console.log(toDos)
    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <select value={category} onInput={onInput}>
                <option value={Category.TO_DO}>TO_DO</option>
                <option value={Category.DOING}>DOING</option>
                <option value={Category.DONE}>DONE</option>
            </select>
            <CreateToDo />
            {toDos?.map((toDo) => <ToDo key={toDo.id} {...toDo} />)}
            {/* 렌더링에서 분류하는 방법 (잘 안씀)            
            {category === "TO_DO" && toDo.map((aToDo) => <ToDo key={aToDo.id} {...aToDo} />)}
            {category === "DOING" && doing.map((aToDo) => <ToDo key={aToDo.id} {...aToDo} />)}
            {category === "DONE" && done.map((aToDo) => <ToDo key={aToDo.id} {...aToDo} />)} */}


            {/* 카테고리 별 렌더링 
            <h2>"To_Do</h2>
            <ul>
                {toDo.map((toDo) => (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
            <hr />
            <h2>"Doing</h2>
            <ul>
                {doing.map((toDo) => (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
            <hr />
            <h2>"Done"</h2>
            <ul>
                {done.map((toDo) => (
                    <ToDo key={toDo.id} {...toDo} />
                ))}
            </ul>
            <hr /> */}
        </div >
    );
};


export default ToDoList;


// **.. ReFactoring 전 정보 ..** //

// interface IForm {
//     toDo: string;
// }

// function ToDoList() {
//     // const value = useRecoilValue(toDoState); ->  recoil 값만 불러올때
//     // const modfn = useSetRecoilState(toDoState); -> recoil 값을 변경할때
//     const [toDos, setToDos] = useRecoilState(toDoState); // -> recoil 값을 불러오고 변경할때 useState와 같은 API
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//         setValue,
//     } = useForm<IForm>()

//     const onSubmit = ({ toDo }: IForm) => {
//         setToDos(oldToDos => [{ text: toDo, category: "TO_DO", id: Date.now() }, ...oldToDos])
//         setValue('toDo', "");
//         console.log(toDos);
//     }

//     return (
//         <div>
//             <h1>To Do List</h1>
//             <hr />
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input {...register("toDo", { required: "Please write a To Do" })} placeholder="Write a to do" />
//                 <button>Add</button>
//                 <span>{errors?.toDo?.message}</span>
//             </form>
//             <ul>
//                 {toDos.map((toDo) => (<li key={toDo.id}>{toDo.text}</li>))}
//             </ul>
//         </div>
//     );
// }

// export default ToDoList;

// **..  바닐라 JS -> ToDo 폼 예제 ..** //

// function ToDoList() {
//     const [toDo, setToDo] = useState("");
//     const [toDoError, setToDoError] = useState("");
//     const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//         const { currentTarget: { value }, } = event;
//         setToDo(value);
//     }
//     const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if (toDo.length < 10) {
//             return setToDoError("To do should be longer");
//         }
//         console.log(toDo);
//     }
//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//                 <button>Add</button>
//                 {toDoError !== "" ? toDoError : null}
//             </form>
//         </div>
//     );
// }

// export default ToDoList;

// **.. 로그인 폼 예제 ..** //

// interface IForm {
//     email: string;
//     firstname: string;
//     lastname: string;
//     username: string;
//     password: string;
//     password1: string;
//     extraError?: string;
// }

// function ToDoList() {
//     const { register, handleSubmit, formState: { errors }, setError } = useForm<IForm>({
//         defaultValues: {
//             email: "@naver.com",
//         }
//     });
//     const onValid = (data: IForm) => {
//         if (data.password !== data.password1) {
//             setError(
//                 "password1",
//                 { message: "Password are not the same" },
//                 { shouldFocus: true }
//             );
//         }
//         // setError("extraError", { message: "Server offline." });
//     };

//     console.log(errors);
//     return (
//         <div>
//             <form style={{ display: "flex", flexDirection: "column" }}
//                 onSubmit={handleSubmit(onValid)}>
//                 <input {...register("email", {
//                     required: "Email is required",
//                     pattern: {
//                         value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//                         message: "Only naver.com emails allowed",
//                     }
//                 })} placeholder="Email" />
//                 <span>{errors?.email?.message}</span>
//                 <input {...register("firstname", {
//                     required: "First_Name is required",
//                     validate: {
//                         noShin: (value) => value.includes("shin") ? "no shin allowed" : true,
//                         noNico: (value) => value.includes("nico") ? "no nico allowed" : true,
//                     }
//                 })} placeholder="First_Name" />
//                 <span>{errors?.firstname?.message}</span>
//                 <input {...register("lastname", { required: "Last_Name is required" })} placeholder="Last_Name" />
//                 <span>{errors?.lastname?.message}</span>
//                 <input {...register("username", {
//                     required: "User_Name is required", minLength: {
//                         value: 10,
//                         message: "Your User_Name is too short"
//                     }
//                 })} placeholder="User_Name" />
//                 <span>{errors?.username?.message}</span>
//                 <input {...register("password", {
//                     required: "Password is required",
//                     minLength: {
//                         value: 5,
//                         message: "Your password is too short.",
//                     }
//                 })} placeholder="Password" />
//                 <span>{errors?.password?.message}</span>
//                 <input {...register("password1", {
//                     required: "Password is required",
//                     minLength: {
//                         value: 5,
//                         message: "Your password is too short.",
//                     }
//                 })} placeholder="Password1" />
//                 <span>{errors?.password1?.message}</span>
//                 <button>Add</button>
//                 <span>{errors?.extraError?.message}</span>
//             </form>
//         </div>
//     );
// }

// export default ToDoList;
