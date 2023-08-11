import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/TextArea";
import { Container, Form } from "./styles";

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href="/">Voltar</a>
                    </header>

                    <Input placeholder="Título" />
                    <TextArea placeholder="Observações" />

                    <Section title="Links úteis">
                        <NoteItem value="https://github.com/arthur-carminatti" />
                        <NoteItem isNew placeholder="Novo link" />
                    </Section>
                </Form>
            </main>
        </Container>
    )
}