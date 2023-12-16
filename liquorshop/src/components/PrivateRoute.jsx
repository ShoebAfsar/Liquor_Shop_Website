import { Navigate } from 'react-router-dom';
import { isAuthenticated } from "../utils/TokenUtil";


export function PrivateRoute(props) {

    if (isAuthenticated()) {
        return props.children;;
    } else {
        return <Navigate to={'/log-in'}></Navigate>
    }
}

export function AdminPrivateRoute(props) {

    if (isAuthenticated()) {
        return props.children;;
    } else {
        return <Navigate to={'/admin-log-in'}></Navigate>
    }
}