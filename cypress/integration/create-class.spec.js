
describe("create class form test", () => {
    beforeEach(() => {
        cy.visit("localhost:3000/create-class")
    })
    it("exists", () => {
        allInputs.forEach(input => input().should("exist"))
    })
    it("types properly", () => {
        textInputs.forEach(input => 
            input()
                .should("have.value", "")
                .type("lalalalala")
                .should("have.value", "lalalalala")
        )
    })
    it("date-time test", () => {
        startInput()
            .should("have.value", "")
            .type("2200-12-12T12:30")
            .should("have.value", "2200-12-12T12:30")
    })
    it("number tests", () => {
        numberInputs.forEach(input => 
            input()
                .should("have.value", "")
                .type("4")
                .trigger('change')
                .should("have.value", "4")
        )
    })
    it("submit test", () => {
        submitInput().should("be.disabled");
        textInputs.forEach(input => input().type("lalalalala"))
        numberInputs.forEach(input => input().type("10"))
        startInput().type("2200-12-12T12:30")
        submitInput().should("not.be.disabled").click()
        textInputs.forEach(input => input().should("have.value", ""))
        startInput().should("have.value", "")
        // number value reset does not work for some reason ?
        numberInputs.forEach(input => input().should("have.value", ""))
    })
})

const nameInput = () => cy.get("[data-cy='class-name']")
const typeInput = () => cy.get("[data-cy='class-type']")
const startInput = () => cy.get("[data-cy='class-start']")
const durationInput = () => cy.get("[data-cy='class-duration']")
const intensityInput = () => cy.get("[data-cy='class-intensity']")
const locationInput = () => cy.get("[data-cy='class-location']")
const maxInput = () => cy.get("[data-cy='class-max']")
const submitInput = () => cy.get("[data-cy='class-submit']")

const allInputs = [
    nameInput,
    typeInput,
    startInput,
    durationInput,
    intensityInput,
    locationInput,
    maxInput,
    submitInput,
]
const textInputs = [
    nameInput,
    typeInput,
    locationInput,
]
const numberInputs = [
    maxInput,
    intensityInput,
    durationInput,
]