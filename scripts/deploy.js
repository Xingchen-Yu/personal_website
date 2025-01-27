import { publish } from 'gh-pages';
import { env } from 'process';

publish('dist/public', {
  branch: 'gh-pages',
  repo: 'https://github.com/Xingchen-Yu/XingchenYu.github.io.git',
  user: {
    name: 'GitHub Actions',
    email: 'actions@github.com'
  },
  token: env.GITHUB_TOKEN,
  dotfiles: true
}, (err) => {
  if (err) {
    console.error('Deployment failed:', err);
    process.exit(1);
  } else {
    console.log('Deployed successfully!');
  }
});