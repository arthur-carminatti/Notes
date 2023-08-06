import { Button } from "../../components/Button/index.jsx"
import { Header } from "../../components/Header/index.jsx"
import { Section } from "../../components/Section/index.jsx"
import { Tag } from "../../components/Tag/index.jsx"
import { Container, Links } from "./styles.js"

export function Details() {
  return (
    <Container>
      <Header />

      <Section title="Links úteis" >
        <Links>
          <li>
            <a href="https://github.com/arthur-carminatti">https://github.com/arthur-carminatti</a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores" >
        <Tag title="express" />
        <Tag title="nodejs" />
      </Section>

      <Button title="Entrar" loading />
    </Container>
  )
}