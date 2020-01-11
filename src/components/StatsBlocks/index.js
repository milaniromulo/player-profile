import React from 'react';
import "./index.css";

const StatsBlocks = (props) => {
    return (
        <article className="statblock">
            <div className="statblock__header">Estatísticas da Temporada 2019-20</div>
            <ul className="statblock__content">
                <li>
                    <div className="statinfo">
                        <div className="statinfo__label" aria-label="Pontos por jogo">PTS</div>
                        <div className="statinfo__value">37.9</div>
                        <div className="statinfo__position" aria-label="Pos.">1º</div>
                    </div>
                </li>
                <li>
                    <div className="statinfo">
                        <div className="statinfo__label" aria-label="Rebotes por jogo">REB</div>
                        <div className="statinfo__value">6.0</div>
                        <div className="statinfo__position" aria-label="Pos.">61º</div>
                    </div>
                </li>
                <li>
                    <div className="statinfo">
                        <div className="statinfo__label" aria-label="Assistências por jogo">AST</div>
                        <div className="statinfo__value">7.5</div>
                        <div className="statinfo__position" aria-label="Pos.">9º</div>
                    </div>
                </li>
                <li>
                    <div className="statinfo">
                        <div className="statinfo__label" aria-label="Índice de Eficiência do Jogador">PER</div>
                        <div className="statinfo__value">31.71</div>
                        <div className="statinfo__position" aria-label="Pos.">2º</div>
                    </div>
                </li>
            </ul>
        </article>
    );
};

export default StatsBlocks;