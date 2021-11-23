import { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { Container } from "./styles";


export function TransactionsTable() {
    // usar contexto para passar os dados de transações para o componente summary
    const transactions = useContext(TransactionsContext);
    console.log(transactions)
    
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
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat("pt-BR", {
                                        style: "currency",
                                        currency: "BRL"
                                    }).format(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>{new Intl.DateTimeFormat("pt-br")
                                .format(new Date(transaction.createdAt))}</td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
       </Container>
    )
}
