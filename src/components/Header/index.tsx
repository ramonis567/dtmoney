import { Container, Content } from "./styles";
import logo from "../../assets/logo.svg";

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    
    return (
        <Container>
            <Content> 
                <img src={logo} alt="dtmoney logo" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}
