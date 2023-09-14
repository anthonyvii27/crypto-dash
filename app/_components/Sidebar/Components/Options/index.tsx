import { ReactNode } from "react";
import {
    BarChart3,
    Bitcoin,
    BookMarked,
    CircleDollarSign,
    Home,
    Image,
    Newspaper,
    Wallet,
} from "lucide-react";
import { Root, Option, Separator, Credits, CreditText } from "./styles";

const Options = (): ReactNode => (
    <Root>
        <Option data-status="selected">
            <Home size={22} />
            Início
        </Option>
        <Option>
            <CircleDollarSign size={22} />
            Preços
        </Option>
        <Option>
            <BarChart3 size={22} />
            Gráficos
        </Option>
        <Option>
            <Image size={22} />
            NFTs
        </Option>
        <Option>
            <Newspaper size={22} />
            Notícias
        </Option>
        <Option>
            <BookMarked size={22} />
            Conteúdos
        </Option>
        <Option>
            <Wallet size={22} />
            Wallet
        </Option>

        <Separator />

        <Option>
            <Bitcoin size={22} />
            Bitcoin
        </Option>
        <Option>
            <Wallet size={22} />
            Ethereum
        </Option>
        <Option>
            <Wallet size={22} />
            Cardano
        </Option>

        <Credits>
            <CreditText>
                Developed by{" "}
                <a href="https://github.com/anthonyvii27" target="_blank">
                    @anthonyvii27
                </a>
            </CreditText>
            <CreditText>Liberado para usos educacionais</CreditText>
        </Credits>
    </Root>
);

export { Options };
