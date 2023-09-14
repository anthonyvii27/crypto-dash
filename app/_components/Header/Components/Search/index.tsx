import { ReactNode } from "react";
import { Search as SearchIcon } from "lucide-react";
import { Root } from "./styles";

const Search = (): ReactNode => (
    <Root>
        <SearchIcon color="#b9bbc6" size={18} />
        <input
            type="text"
            name="search-input"
            placeholder="Pesquisar Blockchain, Wallets, Transações e Blocos"
        />
    </Root>
);

export { Search };
