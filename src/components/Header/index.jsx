import { Container, Profile } from "./styles";

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
        </Container>
    )
}