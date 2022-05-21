

export default function Profile({ profile: { username, email } }) {
  return (
    <article>
        <h1>{username}</h1>
        <h3>{email}</h3>
    </article>
  )
}
