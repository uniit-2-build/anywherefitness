
describe("search testing", () => {
    beforeEach(() => {
        cy.visit("localhost:3000/")
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
    it("date and time test", () => {
        dateInput()
            .should("have.value", "")
            .type("2200-12-12")
            .should("have.value", "2200-12-12")
        timeInput()
            .should("have.value", "")
            .type("12:12")
            .should("have.value", "12:12")
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
        textInputs.forEach(input => input().type("lalalalala"))
        numberInputs.forEach(input => input().type("10"))
        dateInput().type("2200-12-12")
        timeInput().type("12:12")
        resetInput().click()
        textInputs.forEach(input => input().should("have.value", ""))
        dateInput().should("have.value", "")
        timeInput().should("have.value", "")
        // number value reset does not work for some reason ?
        numberInputs.forEach(input => input().should("have.value", ""))
    })
})

const nameInput = () => cy.get("[data-cy='class-name']")
const typeInput = () => cy.get("[data-cy='class-type']")
const dateInput = () => cy.get("[data-cy='class-date']")
const timeInput = () => cy.get("[data-cy='class-time']")
const durationInput = () => cy.get("[data-cy='class-duration']")
const intensityInput = () => cy.get("[data-cy='class-intensity']")
const locationInput = () => cy.get("[data-cy='class-location']")
const maxInput = () => cy.get("[data-cy='class-max']")
const resetInput = () => cy.get("[data-cy='reset']")

const allInputs = [
    nameInput,
    typeInput,
    dateInput,
    timeInput,
    durationInput,
    intensityInput,
    locationInput,
    maxInput,
    resetInput,
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