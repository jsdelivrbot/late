async function index(ctx) {
  ctx.state.title = 'Dashboard';

  await ctx.render('dashboard/dashboard');
}

module.exports = { index };