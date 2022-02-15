import { useEffect } from "react";
import { withRouter } from "react-router";
function Redirection(props) {
    const handleNextpage = () => {
        props.history.push("/Messger/index");
    }
    useEffect(() => {
         // eslint-disable-next-line react-hooks/exhaustive-deps
        handleNextpage();
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <p>Đang chuyển Hướng Của Messger</p>
    )
}
export default withRouter(Redirection);