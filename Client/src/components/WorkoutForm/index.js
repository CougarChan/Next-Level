import { useMutation } from "@apollo/client";
import React, {useState} from "react";
import { ADD_WORKOUT } from "../../utils/mutations";

const WorkoutForm = ({ userId }) => {

    const [workType, setWorkType] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");

    const [addWorkout] = useMutation(ADD_WORKOUT);

    const handleButtonClick = async () => {
        try {
            const { data } = await addWorkout({
                variables: {
                    userId: userId,
                    exerciseTypes: workType,
                    sets: parseInt(sets),
                    reps: parseInt(reps)
                }
            });

            setWorkType("");
            setSets("");
            setReps("");

            console.log(data);
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <div className="container">
            <h1>Add a Workout</h1>
            {/* <div className="row">
                <div className="col s12">
                <div className="row"> */}

                
                <div className= "">
                <label>Exercise Type: </label>
                <input type="text" className="validate" placeholder="Enter Exercise Type" value={workType} onChange={(e) => setWorkType(e.target.value)}/>
                </div>

                <div className= "">
                <label> Sets: </label>
                <input type="number" className="validate" placeholder="Enter the number of sets" value={sets} onChange={(e) => setSets(e.target.value)}/>
                </div>

                <div className= "">

                <label> Reps: </label>
                <input type="number" className="validate" placeholder="Enter the number of reps " value={reps} onChange={(e) => setReps(e.target.value)}/>
                <br />
                </div>

                <button className="waves-effect waves-light btn" onClick={() => handleButtonClick()}>Add Workout</button>
                </div>
               // </div>
           // </div>
        //</div>
    )

}



export default WorkoutForm