import child_process from 'child_process';

// starts a command line process to get the git hash
const gitVersion = child_process
  .execSync('git log --pretty=format:"%h, %ci" -n1')
  .toString()
  .trim();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GIT_COMMIT_HASH: gitVersion,
  },
};

export default nextConfig;
