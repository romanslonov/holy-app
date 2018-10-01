const workspacesController = require('../../controllers/workspaces');
// const workspacesMemberController = require('../../controllers/workspacesMember');

module.exports = (app) => {
  app.get('/api/v1/workspaces', workspacesController.findAll);
  app.get('/api/v1/workspaces/:id', workspacesController.findById);
  app.delete('/api/v1/workspaces/:id', workspacesController.deleteById);
  app.get('/api/v1/workspaces/:id/members', workspacesController.getAllMembersByWorkspaceId);
  app.post('/api/v1/workspaces/create', workspacesController.create);
  // app.post('/api/v1/workspaces/invite', workspacesMemberController.invite);
};
