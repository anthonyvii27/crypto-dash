import { ReactNode } from "react";
import {
    BarChart3,
    BookMarked,
    CircleDollarSign,
    Home,
    Image,
    Newspaper,
    Wallet,
} from "lucide-react";
import { Ethereum } from "@/app/_assets/Logos/ethereum";
import { Cardano } from "@/app/_assets/Logos/cardano";
import { Bitcoin } from "@/app/_assets/Logos/bitcoin";
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
            <Bitcoin width={30} height={30} />
            Bitcoin
        </Option>
        <Option>
            <Cardano width={30} height={30} />
            Cardano
        </Option>
        <Option>
            <Ethereum width={30} height={30} />
            Ethereum
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
