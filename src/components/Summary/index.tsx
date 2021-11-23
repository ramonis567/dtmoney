import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

import entradasImg from "../../assets/entradas.svg";
import saidasImg from "../../assets/saidas.svg";
import totalImg from "../../assets/total.svg";


export function Summary() {
    const { transactions } = useTransactions();

    const totalDeposits = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            return acc + transaction.amount;
        }

        return acc;
    }, 0);

    const totalWithdraw = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'withdraw') {
            return acc - transaction.amount;
        }

        return acc;
    }, 0);

    const balance = totalDeposits + totalWithdraw;
    
    return (
        <Container isBalanceNegative={balance < 0}>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                }).format(totalDeposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidasImg} alt="Saídas" />
                </header>
                <strong>
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    }).format(totalWithdraw)}
                </strong>
           </div>
           <div className="total-style">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                    {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL"
                    }).format(balance)}
                </strong>
           </div>

        </Container>
    )
}
