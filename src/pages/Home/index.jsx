import { FiPlus, FiSearch } from 'react-icons/fi'
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Brand, Container, Content, Menu, Search, NewNote } from "./styles";
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function Home() {
    const [tags, setTags] = useState([])

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/tags")
            console.log(response.data)
            setTags(response.data)
        }

        fetchTags()
    }, [])

    return (
        <Container>
            <Brand>
                <h1>Notes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText
                        title="Todos"
                        $isactive
                    />
                </li>

                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText
                                title={tag.name}
                            />
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                        title: 'React',
                        tags: [
                            { id: '1', name: 'react' },
                            { id: '2', name: 'rocketseat' }
                        ]
                    }}
                    />
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
    )
}