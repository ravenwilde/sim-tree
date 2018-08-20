function info() {
	return `This is a GraphQL powered Sims4 Family Tree`
}

function sims(parent, args, context, info) {
	return context.db.query.sims({}, info)
}

module.exports = {
	info,
	sims,
}