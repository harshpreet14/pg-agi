import { useContext } from "react";
import {UserContext} from '../../context/userContext';
import Sidebar from '../components/Sidebar';


function Home() {
    const {user} = useContext(UserContext);

    return (
        <div>
            <Sidebar/>

        </div>
    )
}

export default Home
