module.exports = {
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: `https://dualstack.awseb-awseb-6lr5azyfnmkz-244186263.us-west-1.elb.amazonaws.com/:path*`,
        },
      ],
    }
  },
}
