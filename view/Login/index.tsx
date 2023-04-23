import {Container, Input, Titulo } from "./styles";

export default function Login() {
    return (
        <Container>
            <Titulo>Login</Titulo>
            <Titulo>Nome</Titulo><Input />
            <Titulo>Email</Titulo><Input />
            <Titulo>Senha</Titulo><Input />
        </Container>
    )
}