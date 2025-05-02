import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useGetPokemonsDetailsQuery } from "../redux/pokemonsApi";

export const PokemonCard = ({pokemon, url}) => {
    const { data, error, isLoading } = useGetPokemonsDetailsQuery(pokemon.name);
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>No data</p>;
    return (
        <Card
            hoverable
            title={pokemon.name}
            loading={isLoading}
            style={{ width: 240 }}
            cover={<img loading="lazy" alt={pokemon.name} src={url} />}
            extra={<StarOutlined />}
        >
            <Card.Meta description={data.types.join(', ')} />
        </Card>
    );
};