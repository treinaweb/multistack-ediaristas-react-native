import { UserInterface, UserType } from 'data/@types/UserInterface';
import { UserContext } from 'data/contexts/UserContext';
import { LoginService } from 'data/services/LoginService';
import React, { useContext } from 'react';
import Button from 'ui/components/inputs/Button/Button';

const AlterarDados = () => {
    const { userDispatch } = useContext(UserContext);

    function logout() {
        LoginService.logout();
        userDispatch({
            type: 'SET_USER',
            payload: {
                nome_completo: '',
                nascimento: '',
                cpf: '',
                email: '',
                foto_usuario: '',
                telefone: '',
                tipo_usuario: UserType.Cliente,
                reputacao: 0,
                chave_pix: '',
            } as UserInterface,
        });
    }

    return (
        <>
            <Button onPress={logout}>Logout</Button>
        </>
    );
};

export default AlterarDados;
