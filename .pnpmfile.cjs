// .pnpmfile.cjs
module.exports = {
  hooks: {
    readPackage(pkg) {
      if (pkg.name === 'ffmpeg-static') {
        delete pkg.scripts.install;
      }
      return pkg;
    },
  },
};
