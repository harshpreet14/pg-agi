import { useContext } from "react";
import {UserContext} from '../../context/userContext';

function Home() {
    const {user} = useContext(UserContext);

    return (
        <div>
            <h1>Home</h1>
            <div>{user.firstName}</div>
        </div>
    )
}

export default Home
