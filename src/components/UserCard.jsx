export default function UserCard({ email, user }) {
    return (
        <div>
            <p>Email: {email}</p>
            <p>User name: {user}</p>
        </div>
    )
}