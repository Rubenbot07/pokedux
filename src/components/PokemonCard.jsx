import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useGetPokemonsDetailsQuery } from "../redux/pokemonsApi";
import { Loading } from "./Loading";

export const PokemonCard = ({pokemon, url}) => {
    const { data, error, isLoading } = useGetPokemonsDetailsQuery(pokemon.name);
    
    if(error) {
        return <div>Error</div>
    }

    return (
        <Card
            hoverable
            title={pokemon.name}
            loading={isLoading}
            style={{ width: 240 }}
            cover={<img className="pokemon-image" loading="lazy" alt={pokemon.name} src={url} />}
            extra={<StarOutlined />}
        >
            <Card.Meta description={data?.types.join(', ')} />
        </Card>
    );
};