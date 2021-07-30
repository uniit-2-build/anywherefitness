
describe("sign up form test", () => {
    beforeEach(() => {
        cy.visit("localhost:3000/sign-up")
    })
    it("input exists", () => {
        allInputs.forEach(input => input().should("exist"))
    })
    it("inputs type properly", () => {
        allTextInputs.forEach(input => 
            input()
                .should("have.value", "")
                .type("someValue")
                .should("have.value", "someValue")
        )
    })
    it("submit test", () => {
        submitInput().should("be.disabled")
        nameInput().type("coolhatguy")
        passwordInput().type("basalisk")
        confirmPasswordInput().type("basalisk")
        emailInput().type("jacobshomali@gamil.com")
        submitInput().should("not.be.disabled").click()
        allTextInputs.forEach(input => 
            input().should("have.value", "")
        )
    })
})

const nameInput = () => cy.get("[data-cy='username']")
const passwordInput = () => cy.get("[data-cy='password']")
const confirmPasswordInput = () => cy.get("[data-cy='confirmPassword']")
const emailInput = () => cy.get("[data-cy='email']")
const submitInput = () => cy.get("[data-cy='submit']")

const allInputs = [
    nameInput, 
    passwordInput, 
    confirmPasswordInput, 
    emailInput, 
    submitInput
]
const allTextInputs = [
    nameInput, 
    passwordInput, 
    confirmPasswordInput, 
    emailInput
]