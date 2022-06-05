import React from 'react'

const Workouts = ({exercises})=> {

    if (!exercises){
        return <h5 className='center'> What are you waiting for, let's get started!</h5>
    }

    return (
    <div className=''>
        <h2>WORKOUT LOG</h2>

        <p>Congratulations on your progress. You have Points!</p>

        {exercises && 
        exercises.map(exercises => (
            <div key={exercises._id} style={{border: "solid blue 3px"}}> 
            <p>{exercises.exerciseTypes}</p>
                <p>{exercises.sets}</p>
                <p>{exercises.reps}</p>
            </div>
            
        )

        ) }
    </div>
    )
}


export default Workouts