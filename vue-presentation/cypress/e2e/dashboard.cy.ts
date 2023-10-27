describe('verifies if render correctly data on page', () => {
  it('should render header', () => {
    cy.visit('/')
    expect(cy.get("header"))
  })

  it('should render dashboard', () => {
    cy.visit('/')
    expect(cy.get(".container-table"))
  })

  it('should render controls', () => {
    cy.visit('/')
    expect(cy.get(".controls"))
  })
})

describe("verifies functionalities of the page", () => {
  it('should render modal on click at transaction', () => {
    cy.visit('/')

    cy.get(".container-table table tbody tr:first").click();
    expect(cy.get(".modal").should('be.visible'))

    expect(cy.get(".modal .title"))
    expect(cy.get(".modal .situation"))
    expect(cy.get(".modal .wrapper"))
  })

  it('should close modal on click at close button', () => {
    cy.visit('/')

    cy.get(".container-table table tbody tr:first").click();
    expect(cy.get(".modal .wrapper"))

    expect(cy.get(".modal .close").click())
  })

  it('should search by text filter', () => {
    cy.visit('/') 

    let initialQuantity: number
    let atualQuantity: number

    cy.get(".container-table table tbody tr").then((list) => {
      initialQuantity = list.length
    })
    
    cy.get(".controls input").type("res")
    
    cy.get(".container-table table tbody tr").then((atualList) => {
      atualQuantity = atualList.length
      expect(atualQuantity).to.be.lessThan(initialQuantity)
    })
  })

  it('should search by status', () => {
    cy.visit('/') 

    let initialQuantity: number
    let atualQuantity: number

    cy.get(".container-table table tbody tr").then((list) => {
      initialQuantity = list.length
    })
    
    cy.get(".controls select").select("created");
    
    cy.get(".container-table table tbody tr").then((atualList) => {
      atualQuantity = atualList.length
      expect(atualQuantity).to.be.lessThan(initialQuantity)
    })
  })
})
