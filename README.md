## Testes automatizados

### Testes unitários
Na aplicação temos os use cases que são repsonsáveis pela lógica do usuário, verificações se o usuario existe, usuario duplicado, salvar no db etc... A estrutura lógica se concentra no use case.

Ou seja, testamos os casos de sucesso e erro no proprio use case.

Não testamos db.

Com os testes unitarios conseguimos garantir a performance do nosso código.

### Testes de integração

Quando queremos testar a aplicação iteira, então precisamos estar desde quando a requisição pela rota é feita, ao controller, use case etc....

Ou seja, devemos testar a nossa aplicação toda.

Para isso criamos um db fake. 

Testamos todos os serviços externos.

--> routes -> controllers -> useCases --> repositories <-- useCases <-- controllers <-- routes


# TDD
Não é uma forma de fazer teste.

TDD é uma metodologia para realização de testes
 - Test Driven Development
    Essa metodologia diz que primeiramente precisamos criar nossos testes para depois iniciar o desenvolvimento da aplicação.

  
Vantagem:
Se uma regra de negocio mudar, ao fazer o teste conseguimos rodar os testes e ver o que tá acontecendo.


## Instalando JEST
Biblioteca para realizar testes
> yarn add jest @types/jest -D

> yarn jest --init

✔ Would you like to use Jest when running "test" script in "package.json"? … yes
✔ Would you like to use Typescript for the configuration file? … yes
✔ Choose the test environment that will be used for testing › node
✔ Do you want Jest to add coverage reports? … no
✔ Which provider should be used to instrument code for coverage? › v8
✔ Automatically clear mock calls and instances between every test? … yes

> yarn add ts-jest -D

No arquivo jest.config procurar pela propriedade *PRESET*

descomentar e alterar:
 > preset: "ts-jest",

 Ainda no arquivo jest.config:

 testMatch: [
   "**/*.spec.ts"
 ],

 bail: true,

 ## TSCONFIG/PATHS

 Serve para conseguir usar @modules etc


 ## REQUISITOS

 O analista faz a ponte entre a equipe e o cliente, faz o mapeamento dos requisitos funcionais e não funcionais.


 # Cadastro de carro

**RF**
- Deve ser possível cadastrar um novo carro.


**RN** 
- Não deve ser possível cadastrar um carro com uma placa já existente.
- O carro deve ser cadastrado, por padrão, com disponibilidade.
- O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**RF** 
- Deve ser possível listar todos os carros disponíveis
- Deve ser possível listar todos os carros disponíveis pelo - nome da categoria
- Deve ser possível listar todos os carros disponíveis pelo - nome da marca
- Deve ser possível listar todos os carros disponíveis pelo - nome do carro

**RN**
- O usuário não precisar estar logado no sistema.


# Cadastro de Especificação no carro

**RF**
- Deve ser possível cadastrar uma especificação para um carro


**RN**
- Não deve ser possível cadastrar uma especificação para um - carro não cadastrado.
- Não deve ser possível cadastrar uma especificação já - existente para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário - administrador.


# Cadastro de imagens do carro

**RF**
- Deve ser possível cadastrar a imagem do carro

**RNF**
- Utilizar o multer para upload dos arquivos

**RN**
- O usuário deve poder cadastrar mais de uma imagem para o - mesmo carro
- O usuário responsável pelo cadastro deve ser um usuário - administrador.


# Alugel de carro

**RF**
- Deve ser possível cadastrar um aluguel


**RN**
- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível cadastrar um novo aluguel caso já - exista um aberto para o mesmo usuário
- Não deve ser possível cadastrar um novo aluguel caso já - exista um aberto para o mesmo carro
- O usuário deve estar logado na aplicação
- Ao realizar um aluguel, o status do carro deverá ser - alterado para indisponível


# Devolução de carro 

**RF**
- Deve ser possível realizar a devolução de um carro

**RN**
- Se o carro for devolvido com menos de 24 horas, deverá - ser cobrado diária completa.
- Ao realizar a devolução, o carro deverá ser liberado para - outro aluguel.
- Ao realizar a devolução, o usuário deverá ser liberado - para outro aluguel.
- Ao realizar a devolução, deverá ser calculado o total do - aluguel. 
- Caso o horário de devolução seja superior ao horário - previsto de entrega, deverá ser cobrado multa - proporcional aos dias de atraso.
- Caso haja multa, deverá ser somado ao total do aluguel.
- O usuário deve estar logado na aplicação


# Listagem de Alugueis para usuário

**RF**
- Deve ser possível realizar a busca de todos os alugueis para o usuário

**RN**
- O usuário deve estar logado na aplicação


# Recuperar Senha

**RF**
- Deve ser possível o usuário recuperar a senha informando o e-mail
- O usuário deve receber um e-mail com o passo a passo para a recuperação da senha
- O usuário deve conseguir inserir uma nova senha

**RN**
- O usuário precisa informar uma nova senha
- O link enviado para a recuperação deve expirar em 3 horas

# TDD

Primeiro o teste irá falhar > Passar > Refatorar colocando regra de negocio e validação dentro do banco.

Começar cirando um createcar

## Biblioteca DAYJS

> yarn add dayjs

Importa o dayjs no use case
