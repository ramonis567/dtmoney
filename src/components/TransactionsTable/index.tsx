import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
    const [transactions, newTransactions] = useState([]);

    useEffect(() => {
        api.get("/transactions")
        .then(response => newTransactions(response.data))
    }, [])

    return (
       <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$ 12.000,00</td>
                        <td>Venda</td>
                        <td>12/06/2021</td>
                    </tr>
                    <tr>
                        <td>Lanche</td>
                        <td className="withdraw">R$ -40,00</td>
                        <td>Alimentação</td>
                        <td>10/04/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel do apartamento</td>
                        <td className="withdraw">R$ -1.100,00</td>
                        <td>Casa</td>
                        <td>05/04/2021</td>
                    </tr>
                    <tr>
                        <td>Computador</td>
                        <td className="deposit">R$ 5.300,00</td>
                        <td>Venda</td>
                        <td>29/03/2021</td>
                    </tr>
                </tbody>
            </table>
       </Container>
    )
}
