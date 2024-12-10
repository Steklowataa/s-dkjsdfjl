export default function TaskList({ tasks }) {
    //TODO: It's not the way I'd like to create tasks for you. I'll use github issues later, so this component can be removed
    return (
        <div>
            <h1>Twoje zadanie: </h1>
            <ul>
            {tasks.map((e, index) => 
                <li key={index}>{e}</li>
            )}
            </ul>
        </div>
    )
}