import { useAuth } from "../../hooks/auth";
import { Container, Logout, Profile } from "./styles";
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
    const { signOut } = useAuth()

    return (
        <Container>
            <Profile to="/profile">
                <img
                    src="https://github.com/arthur-carminatti.png"
                    alt="foto do usuário"
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Arthur Carminatti</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}