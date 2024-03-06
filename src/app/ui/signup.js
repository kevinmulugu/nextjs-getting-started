export function Signup() {
    return (
        <section>
            <form>
                <div>
                    Name: <input type="text" placeholder="Your names"/>
                </div>
                <div>
                    Email: <input type="text" placeholder="Email"/>
                </div>
                <div>
                    Password: <input type="password" placeholder="Password"/>
                </div>
                <div>
                    Confirm Password: <input type="password" placeholder="Password confirmation"/>
                </div>
                <div>
                    <button type="submit">Sign up</button>
                </div>
            </form>
        </section>
    )
}