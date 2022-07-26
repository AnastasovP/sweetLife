import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const GuardRouter = ({
    children
}) => {
    const { user } = useAuthContext();

    return user.email ? children : <Navigate to="/login" />
}
export default GuardRouter;