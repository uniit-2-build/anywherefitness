describe("login testing", () => {
    beforeEach(() => {
        cy.visit("localhost:3000/login")
    })
    it("exists", () => {
        nameInput().should("exist");
        passwordInput().should("exist");
        submitInput().should("exist");
    })
    it("types properly", () => {
        nameInput()
            .should("have.value", "")
            .type("value")
            .should("have.value", "value")
        passwordInput()
            .should("have.value", "")
            .type("value")
            .should("have.value", "value")
    })
    it("submits properly", () => {
        submitInput().should("be.disabled")
        nameInput().type("username");
        passwordInput().type("password");
        submitInput().should("not.be.disabled").click()
        nameInput().should("have.value", "");
        passwordInput().should("have.value", "");
    })
})

const nameInput = () => cy.get("[data-cy='username']")
const passwordInput = () => cy.get("[data-cy='password']")
const submitInput = () => cy.get("[data-cy='submit']")