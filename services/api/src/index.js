import express from 'express';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'moxora-api',
    version: '0.1.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/projects', (req, res) => {
  res.json({
    projects: [
      { id: 'project-1', name: 'Moxora Core', type: 'workspace', status: 'ready' },
      { id: 'project-2', name: 'AI Team', type: 'agent', status: 'review' }
    ]
  });
});

app.listen(port, () => {
  console.log(`MOXORA API listening on http://localhost:${port}`);
});
