import React, { useState } from 'react';
import { Text } from 'react-native';
import Autocomplete from 'ui/components/inputs/Autocomplete/Autocomplete';

const Contratacao: React.FC = () => {
    const [valor, setValor] = useState('');
    const [valorEscolhido, setValorEscolhido] = useState('');

    return (
        <>
            <Autocomplete
                disabled
                value={valor}
                onChange={setValor}
                clearOnSelect
                onSelect={setValorEscolhido}
                label="Escolha o valor"
                options={['Morango', 'Chocolate', 'Baunilha']}
                noOptionsText="Nenhum produto encontrado com esses termos"
            />
            <Text>{valorEscolhido}</Text>
        </>
    );
};

export default Contratacao;
