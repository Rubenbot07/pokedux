import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";

export const PokemonCard = () => {
    return (
        <Card
            hoverable
            title="Ditto"
            style={{ width: 240 }}
            cover={<img alt='ditto' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png' />}
            extra={<StarOutlined />}
        >
            <Card.Meta description="fire, magic" />
        </Card>
    );
};