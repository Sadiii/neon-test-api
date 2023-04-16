/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    // PGHOST: 'ep-hidden-grass-536062.us-east-2.aws.neon.tech',
    // PGDATABASE: 'neondb',
    // PGUSER:'Sadiii',
    // PGPASSWORD:'c2Syd1lUkxZu'
    NEON_DATABASE_URL: 'postgres://Sadiii:c2Syd1lUkxZu@ep-hidden-grass-536062.us-east-2.aws.neon.tech/neondb',
  }
}

module.exports = nextConfig
