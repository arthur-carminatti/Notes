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
    const [search, setSearch] = useState("")
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])
    const [notes, setNotes] = useState([])

    function handleTagSelected(tagName) {
        const alreadySelected = tagsSelected.includes(tagName)

        if (alreadySelected) {
            const filteredTags = tagsSelected.filter(tag => tag !== tagName)
            setTagsSelected(filteredTags)
        } else {
            setTagsSelected(prevState => [...prevState, tagName])
        }

    }

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/tags")
            console.log(response.data)
            setTags(response.data)
        }

        fetchTags()
    }, [])

    useEffect(() => {
        async function fatchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
            setNotes(response.data)
        }

        fatchNotes()
    }, [tagsSelected, search])

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
                        onClick={() => handleTagSelected("all")}
                        $isactive={tagsSelected.length === 0}
                    />
                </li>

                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText
                                title={tag.name}
                                onClick={() => handleTagSelected(tag.name)}
                                $isactive={tagsSelected.includes(tag.name)}
                            />
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input
                    placeholder="Pesquisar pelo título"
                    icon={FiSearch}
                    onChange={e => setSearch(e.target.value)}
                />
            </Search>

            <Content>
                <Section title="Minhas notas">
                    {
                        notes.map(note => (
                            <Note
                                key={String(note.id)}
                                data={note}
                            />
                        ))
                    }
                </Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
    )
}