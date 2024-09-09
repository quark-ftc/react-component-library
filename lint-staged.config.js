const processFiles = (fileNames) => {
  const joinedFileNames = fileNames.join(' ');
  return [
    `pnpm exec eslint ${joinedFileNames}`,
    `pnpm exec prettier -w ${joinedFileNames}`,
  ];
};

export default {
  'src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,css,scss}': processFiles,
  './*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,css,scss}': processFiles,
};
