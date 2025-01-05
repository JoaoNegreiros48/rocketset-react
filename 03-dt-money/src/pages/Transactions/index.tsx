import { Header } from "../../components/Header";
import { Summary } from "../../components/summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />

                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width='50%'>Desenvolvimento de site</td>
                            <td>
                                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
                            </td>
                            <td>Venda</td>
                            <td>05/12/2025</td>
                        </tr>
                        <tr>
                            <td width='50%'>Desenvolvimento de site</td>
                            <td><PriceHighLight variant="outcome">- R$ 12.000,00</PriceHighLight></td>
                            <td>Venda</td>
                            <td>05/12/2025</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}