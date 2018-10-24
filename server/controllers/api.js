async function getAllAssignments(ctx) {
  let assignments = await ctx.state.user.findAllAssignments();
  await ctx.ok({ assignments });
}

module.exports = { getAllAssignments };
