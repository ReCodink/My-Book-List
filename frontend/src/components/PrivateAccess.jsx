import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateAccess({ children, ...rest}) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getToken = localStorage.getItem("token");
        console.info(isAuthenticated);
        if (getToken) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    return <div>{isAuthenticated ? children : <h1>Not Authenticated</h1>}</div>;
}