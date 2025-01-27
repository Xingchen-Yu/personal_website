import { publish } from 'gh-pages';
import { env } from 'process';

publish('dist/public', {
  branch: 'master',
  repo: 'https://github.com/Xingchen-Yu/XingchenYu.github.io.git',
  user: {
    name: 'GitHub Actions',
    email: 'actions@github.com'
  },
  token: env.GITHUB_TOKEN
}, (err) => {
  if (err) {
    console.error('Deployment failed:', err);
    process.exit(1);
  } else {
    console.log('Deployed successfully!');
  }
});
