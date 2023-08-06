import { Button } from "../../components/Button/index.jsx"
import { ButtonText } from "../../components/ButtonText/index.jsx"
import { Header } from "../../components/Header/index.jsx"
import { Section } from "../../components/Section/index.jsx"
import { Tag } from "../../components/Tag/index.jsx"
import { Container, Content, Links } from "./styles.js"

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, dolores reiciendis similique natus nemo minima deserunt nihil?
            Excepturi, sit tempora iure provident reiciendis, iste ipsum ipsam perspiciatis dolores sint rerum.
          </p>

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

        </Content>
      </main>
    </Container>
  )
}