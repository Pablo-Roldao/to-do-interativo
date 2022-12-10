import './App.css';
import TodoList from './components/TodoList';
import { Amplify, I18n, } from "aws-amplify";

import { Authenticator, View, useTheme, Image, Text, translations } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

I18n.putVocabularies(translations);
I18n.setLanguage("pt");
I18n.putVocabularies({
  pt: {
    "Create Account": "Criar conta",
    "We Texted You": "Nós mandamos uma mensagem pra você",
    "Your code is on the way. To log in, enter the code we sent you. It may take a minute to arrive.": "Seu código foi enviado para você. Para entrar, insira o código que foi enviado. Isso levará apenas um minuto e serve para a sua própria segurança.",
    "Confirm": "Confirme",
    "We Emailed You": "Nós enviamos um e-mail para você",
    "Your code is on the way. To log in, enter the code we emailed to": "Seu código foi enviado. Para entrar, insira o código que enviamos para ",
    "It may take a minute to arrive.": "Vai levar apenas alguns instantes para chegar."
  }
});

I18n.putVocabulariesForLanguage('pt', {
  "Reset Password": "Recuperar senha",
  "Send code": "Enviar código",
  "Back to Sign In": "Voltar para o login",
  "confirme": "Confirme"
});

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="To Do Logo"
          src="https://cdn-icons-png.flaticon.com/512/2500/2500354.png"
          width={"50%"}
        />
      </View>
    );
  },
  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; Todos os direitos reservados para TodoInterativo
        </Text>
      </View>
    );
  },
}
const formFields = {
  signIn: {
    username: {
      label: "E-mail",
      placeholder: "Insira seu e-mail...",
    },
    password: {
      label: "Senha",
      placeholder: "Insira sua senha...",
    }
  },
  signUp: {
    name: {
      order: 1,
      label: "Nome",
      placeholder: "Insira seu nome..."
    },
    email: {
      order: 2,
      label: "E-mail",
      placeholder: "Insira seu e-mail...",
    },
    phone_number: {
      dialCode: "+55",
      order: 3,
      label: "Celular",
      placeholder: "Insira seu número de celular...",
    },
    password: {
      order: 4,
      label: "Senha",
      placeholder: "Insira sua senha...",
    },
    confirm_password: {
      order: 5,
      label: "Confirmação de senha",
      placeholder: "Insira sua senha novamente...",
    },
  },
  resetPassword: {

  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: "Insira seu código de confirmação...",
      label: "Código",
      isRequired: false,
    },
    password: {
      label: "Nova senha",
      placeholder: "Insira sua nova senha...",
    },
    confirm_password: {
      label: "Confirmação de senha",
      placeholder: "Insira sua nova senha novamente...",
    },
  },
}



function App({ signOut, user }) {

  return (
    <Authenticator
      components={components}
      formFields={formFields}
      signUpAttributes={["name", "phone_number"]}>
      {({ signOut, user }) => (
        <main>
          <div className="todo-app row">
            <h2 className="col m-3 display-6 fw-bold">Olá, {user.attributes.name}!</h2>
            <button onClick={signOut} className="sign-out-btn col-2 btn m-3 border border-dark shadow fw-bold">Sair</button>
            <div className='container border-top border-light text-center'>
              <TodoList />
            </div>
          </div>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
