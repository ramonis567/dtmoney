import Modal from 'react-modal';
import { useState } from 'react';
import closeModalIMG from '../../assets/fechar.svg';
import entradasImg from "../../assets/entradas.svg";
import saidasImg from "../../assets/saidas.svg";
import { Container, RadioBox, TransactionTypeSelector } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [type, setType] = useState("deposit");

    return (
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type="button" 
                onClick={onRequestClose}
                className="close-modal-button"
            >
                <img src={closeModalIMG} alt="Fechar"/>
            </button>
            <Container>
                <h2>Cadastrar transação</h2>
                <input type="text" placeholder="Título" />
                <input type="number" placeholder="Preço" />
                
                <TransactionTypeSelector>
                    <RadioBox 
                        type="button" 
                        onClick={() => {setType('deposit');}}
                        isActive={type === 'deposit'}
                    >
                        <img src={entradasImg} alt="Entradas/Depósitos" />
                        <span>Entrada</span>
                    </RadioBox>
                    <RadioBox 
                        type="button" 
                        onClick={() => {setType('withdraw');}}
                        isActive={type === 'withdraw'}
                    >
                        <img src={saidasImg} alt="Saídas/Retiradas" />
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeSelector>

                <input type="text" placeholder="Categoria" />
                <button type="submit">
                    Cadastrar transação
                </button>
            </Container>
        </Modal>     
    )
}
