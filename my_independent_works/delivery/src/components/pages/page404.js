
import { useNavigate } from "react-router-dom";

const Page404 = () => {
    const navigate = useNavigate();
    return (
        <div>
            <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'marginTop': '30px','fontSize': '24px'}}>Страница не найдена</p>
            <p onClick={() => navigate(-1)} style={{'display': 'block','textAlign': 'center','fontWeight': 'regular', 'fontSize': '24px', 'marginTop': '30px', 'cursor': 'pointer'}} >Назад, на главную страницу</p>
        </div>
    )
}

export default Page404;