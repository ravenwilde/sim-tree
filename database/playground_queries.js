query {
  info
	sims {
    id
    firstName
    lastName
  }
}

mutation {
  addSim(data: {
    firstName: "Don"
    lastName: "Lothario"
  }) {
    id
  }
}