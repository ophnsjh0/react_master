import { useSetRecoilState } from "recoil";
import { idText } from "typescript";
import { IToDo, toDoState, Category } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const { currentTarget: { name } } = event;
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
            const newToDo = { text, category: name as any, id }
            return [
                ...oldToDos.slice(0, targetIndex),
                newToDo,
                ...oldToDos.slice(targetIndex + 1),
            ]

        });
    }

    // onClick 에 인자를 전달하는 방식
    // const onclick = (newCategory: IToDo["category"]) => {
    //     console.log("I wanna to", newCategory);
    // }
    return (
        <li>
            <span>{text}</span>
            {category !== Category.DOING && (<button name={Category.DOING} onClick={onClick}>Doing</button>)}
            {category !== Category.TO_DO && (<button name={Category.TO_DO} onClick={onClick}>To Do</button>)}
            {category !== Category.DONE && (<button name={Category.DONE} onClick={onClick}>Done</button>)}

            {/* onClick 에 인자를 전달하는 방식 
             {category !== "DOING" && (<button onClick={() => onclick("DOING")}>Doing</button>)}
            {category !== "TO_DO" && (<button onClick={() => onclick("TO_DO")}>To Do</button>)}
            {category !== "DONE" && (<button onClick={() => onclick("DONE")}>Done</button>)} */}
        </li >
    );
}

export default ToDo;