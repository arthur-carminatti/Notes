import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Brand, Container, Content, Menu, Search, NewNote } from "./styles";

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Notes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title="Todos" $isactive /></li>
                <li><ButtonText title="React" /></li>
                <li><ButtonText title="Nodejs" /></li>
            </Menu>

            <Search>

            </Search>

            <Content>

            </Content>

            <NewNote>

            </NewNote>
        </Container>
    )
}