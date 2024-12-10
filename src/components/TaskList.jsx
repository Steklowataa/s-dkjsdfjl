export default function TaskList({ tasks }) {
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