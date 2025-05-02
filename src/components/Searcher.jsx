import { useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/searchSlice";
import { Input } from "antd";
export const Searcher = () => {
    const dispatch = useDispatch();

    const handleSearch = (value) => { 
        // Add your search logic here
        dispatch(setSearchTerm(value.target.value));
    };
    return (
        <div className="searcher">
            <Input style={{  minWidth: '300px', maxWidth: '700px' }} placeholder="Search a pokemon" onChange={handleSearch} />
        </div>
    );
}