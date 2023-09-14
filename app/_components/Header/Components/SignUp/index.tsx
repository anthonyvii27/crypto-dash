import { ReactNode } from "react";
import { UserPlus } from "lucide-react";
import { Root } from "./styles";

const SignUp = (): ReactNode => (
    <Root>
        <UserPlus size={20} color="#ebebef" />
        Cadastre-se
    </Root>
);

export { SignUp };
