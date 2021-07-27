
describe("sign up form test", () => {
    beforeEach(() => {
        cy.visit("localhost:3000/sign-up")
    })
    it("input exists", () => {
        allInputs.forEach(input => input().should("exist"))
    })
    it("inputs type propperly", () => {
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

const nameInput = () => cy.get("[name='username']")
const passwordInput = () => cy.get("[name='password']")
const confirmPasswordInput = () => cy.get("[name='confirmPassword']")
const emailInput = () => cy.get("[name='email']")
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