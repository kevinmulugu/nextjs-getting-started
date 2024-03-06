export default function Layout({children, team, analytics}) {
    return (
        <div id="parallel-routes">
            {children}
            {team}
            {analytics}
        </div>
    )
}