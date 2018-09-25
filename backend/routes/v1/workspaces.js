const workspacesController = require('../../controllers/workspaces');
// const workspacesMemberController = require('../../controllers/workspacesMember');

module.exports = (app) => {
  app.get('/api/v1/workspaces', workspacesController.getAll);
  app.get('/api/v1/workspaces/:id', workspacesController.getOne);
  // app.get('/api/v1/workspaces/:id/members', workspacesMemberController.getAllMembers);
  app.post('/api/v1/workspaces/create', workspacesController.create);
  // app.post('/api/v1/workspaces/invite', workspacesMemberController.invite);
};
