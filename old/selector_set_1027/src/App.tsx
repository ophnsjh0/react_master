import React from "react";
import { useRecoilState } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
	const [minutes, setMinutes] = useRecoilState(minuteState)
	const [hours, setHours] = useRecoilState(hourSelector)
	const onChangeMinutes = (event: React.FormEvent<HTMLInputElement>) => {
		setMinutes(+event.currentTarget.value)
	}
	const onChangeHours = (event: React.FormEvent<HTMLInputElement>) => {
		setHours(+event.currentTarget.value)
	}
	return (
		<div>
			<input type="number" value={minutes} onChange={onChangeMinutes} name="minutes" placeholder="minutes"></input>
			<input type="number" value={hours} onChange={onChangeHours} name="hours" placeholder="hours"></input>
		</div>
	)
}

export default App;
