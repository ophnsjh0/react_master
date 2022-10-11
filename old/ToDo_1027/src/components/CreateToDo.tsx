import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { toDoState, categoryState } from "../atoms";

// const value = useRecoilValue(toDoState); ->  recoil 값만 불러올때
// const modfn = useSetRecoilState(toDoState); -> recoil 값을 변경할때

interface IForm {
    toDo: string;
}

function CreateToDO() {
    // const modfn = useSetRecoilState(toDoState); -> recoil 값을 변경할때
    const setToDos = useSetRecoilState(toDoState);
    const { register, handleSubmit, setValue } = useForm<IForm>()
    const category = useRecoilValue(categoryState);
    const handleValid = ({ toDo }: IForm) => {
        setToDos(oldToDos => [{ text: toDo, category, id: Date.now() }, ...oldToDos])
        setValue('toDo', "");
    };

    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input
                {...register("toDo", {
                    required: "Please write a To Do",
                })}
                placeholder="Write a to do"
            />
            <button>Add</button>
        </form>
    );
};

export default CreateToDO;