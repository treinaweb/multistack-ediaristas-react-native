import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import VerificarProfissionais from '@partials/encontrar-diarista/_verificar-profissionais';

import { RootStackParamList } from 'ui/router/Router';

type NavigationProp = StackNavigationProp<
    RootStackParamList,
    'EncontrarDiarista'
>;

const EncontrarDiaristas: React.FC = () => {
    const navigation = useNavigation<NavigationProp>();

    return (
        <>
            <VerificarProfissionais onContratarProfissional={() => {}} />
        </>
    );
};

export default EncontrarDiaristas;
