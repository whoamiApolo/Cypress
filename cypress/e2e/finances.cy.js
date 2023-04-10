describe("Transações", () => {
  // hooks = executar antes ou depois de cada ou de todos os testes
  // before
  // after
  // beforeEach
  // afterEach

  beforeEach(() => {
    cy.visit("https://devfinance-agilizei.netlify.app/#");
  });

  // antes de iniciar o teste, ele vai executar o que foi definido no beforeEach
  it("Cadastrar uma entrada", () => {
    // beforeEach subistitui essa linha cy.visit("https://devfinance-agilizei.netlify.app/#")

    criarTransacao("Freela", 250.00);
    cy.get("tbody tr td.description").should("have.text", "Freela");
    //eu espero que exista um elemento td.description e contenha o texto "Freela"

    criarTransacao("Freela durante horário de almoço", 500.00);
  });

  it("Cadastrar uma saída", () => {
    // beforeEach subistitui essa linha cy.visit("https://devfinance-agilizei.netlify.app/#")

    criarTransacao("Cinema", -60.00);
    cy.get("tbody tr td.description").should("have.text", "Cinema");
  });


  it('Excluir transação', () => {
    criarTransacao("Agilizei", 459.00)
    criarTransacao("Fatura cartão", "1950.00")

    cy.contains(".description", "Agilizei") // navegamos até o elemento para ter um ponto de referência
    .parent() //navegar para o elemento pai TR
    .find('img')
    .click()

    // outra forma

    // .siblings() valida a quantidade de irmãos o elemento tem
    // .children('img') navega até o elemento filho img do elemento escolhido
    // .click()

    cy.get("tbody tr").should("have.length", 1)
  });
});

function criarTransacao(descricao, valor) {
  cy.contains("Nova Transação").click();
  cy.get("#description").type(descricao);
  cy.get("#amount").type(valor);
  cy.get("#date").type("2023-02-15"); // yyyy-mm-dd

  cy.contains("button", "Salvar").click();
}
