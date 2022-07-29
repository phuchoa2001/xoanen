import Styles from './index.module.css';
import { useEffect, useState } from 'react';
import Item from '../../../commons/blog/item2';
import callApi from '../../../commons/Api/apiCaller';
function Propose({ id }) {
    const [List, setList] = useState([]);
    const [loading, SetLoading] = useState(true);
    useEffect(() => {
        callApi(`blog/gettag?tag=${id}`, "GET", {}).then(res => {
            setList(res.data);
            SetLoading(false);
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])
    if (loading) {
        return <h3>đang tải bài viết liên quan...</h3>
    }
    return (
        <div>
            <h3>Bài viết liên quan</h3>
            <div className={Styles.list}>
                <div className="row">
                    {List.length !== 0 && List.map((item, index) => (
                        <Item
                            key={index}
                            id={item._doc["_id"]}
                            title={item._doc.title}
                            author={"Đặng Phúc Hòa"}
                            time={item._doc.time}
                            img={item._doc.img}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Propose;