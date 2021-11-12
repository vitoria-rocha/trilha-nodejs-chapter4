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