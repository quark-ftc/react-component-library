export default {
  'src/**/*.{js,mjs,cjs,ts,jsx,tsx,css,scss,json},*.{ts,js,json,html}': (
    fileNames,
  ) => {
    const joinedFileNames = fileNames.join(' ');
    return [
      `pnpm exec eslint ${joinedFileNames}`,
      `pnpm exec prettier -w ${joinedFileNames}`,
    ];
  },
};
