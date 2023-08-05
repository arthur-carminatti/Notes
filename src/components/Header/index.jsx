import { Container, Logout, Profile } from "./styles";
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
    return (
        <Container>
            <Profile>
                <img
                    src="https://github.com/arthur-carminatti.png"
                    alt="foto do usuário"
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Arthur Carminatti</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}