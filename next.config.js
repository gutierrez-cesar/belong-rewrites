module.exports = {
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: `https://dualstack.awseb-awseb-1lx8eb9btctnt-1054739197.us-west-1.elb.amazonaws.com/:path*`,
        },
      ],
    }
  },
}
