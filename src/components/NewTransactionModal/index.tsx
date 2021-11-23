import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { api } from '../../services/api';

import closeModalIMG from '../../assets/fechar.svg';
import entradasImg from "../../assets/entradas.svg";
import saidasImg from "../../assets/saidas.svg";
import { Container, RadioBox, TransactionTypeSelector } from './styles';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("deposit");
    const [category, setCategory] = useState("");

    const handleCreateNewTransaction = (event: FormEvent) => {
        event.preventDefault();

        const data = {
            title, price, type, category,
        };

        api.post("/transactions", data);
    }

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
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>
                <input 
                    type="text" 
                    placeholder="Título" 
                    value={title} 
                    onChange={event => setTitle(event.target.value)}
                />
                <input 
                    type="number" 
                    placeholder="Preço"
                    value={price}
                    onChange={event => setPrice(Number(event.target.value))}
                />
                
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

                <input 
                    type="text" 
                    placeholder="Categoria" 
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">
                    Cadastrar transação
                </button>
            </Container>
        </Modal>     
    )
}
