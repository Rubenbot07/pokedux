import { Input } from "antd";
export const Searcher = () => {
    return (
        <div className="searcher">
            <Input.Search style={{  minWidth: '300px', maxWidth: '700px' }} placeholder="input search text" />
        </div>
    );
}