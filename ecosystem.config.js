module.exports = {
  apps: [
    {
      name: 'koa-bff',
      cwd: './',
      script: './src/main.js',
      instances: 'max',
      instance_var: 'INSTANCE_ID',
      exec_mode: 'cluster',
      time: true,
      output: '/root/.pm2/logs/out.log',
      error: '/root/.pm2/logs/error.log',
      merge_logs: true,
      log_type: 'json',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      wait_ready: true,
      listen_timeout: 10000,
      kill_timeout: 3000,
      min_uptime: '60s',
      max_restarts: 10,
      max_memory_restart: '1000M',
      cron_restart: '1 0 * * *',
      interpreter: 'node',
      autorestart: true,
      env: {
        NODE_ENV: 'develop',
      },
      env_prod: {
        NODE_ENV: 'production',
      },
    },
  ],
};
