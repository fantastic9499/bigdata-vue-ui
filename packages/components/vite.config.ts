/// <reference types="vitest" />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

const test = '测试husky...';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      //   include: [],
      //   exclude: [
      //     'node_modules/',
      //     'src/**/*.d.ts',
      //     'src/**/*.test.ts',
      //     'src/**/*.stories.ts',
      //   ],
      include: ['./src/button/__test__/button.test.ts'], // 确保包含你的源文件
      //   include: ['/src/**/*.test.ts'], // 确保包含你的源文件
      //   include: ['**/*.test.ts'], // 排除测试文件和类型定义文件
    },
  },
  build: {
    // target: 'modules',
    //打包文件目录
    outDir: 'es',
    //压缩
    // minify: false,
    //css分离
    cssCodeSplit: true,
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      // external: ['vue', /\.less/],
      // input: ['src/index.ts'],
      input: ['index.ts'],
      output: [
        {
          format: 'es',
          //不用打包成.es.js,这里我们想把它打包成.js
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          // preserveModulesRoot: 'src',
          exports: 'named',
          //配置打包根目录
          dir: '../vue-ui/es',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          // preserveModulesRoot: 'src',
          exports: 'named',
          //配置打包根目录
          dir: '../vue-ui/lib',
        },
      ],
    },
    lib: {
      entry: './index.ts',
      name: 'vue-ui',
      // entry: './src/index.ts',
      // formats: ['es', 'cjs'],
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: 'src',
      include: ['./src', './index.ts'],
      outputDir: ['../vue-ui/es/src', '../vue-ui/lib/src'],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: '../../tsconfig.json',
      // entryRoot: "./src",
      // // include: ['./src'],
      // outDir: ["../vue-ui/es", "../vue-ui/lib"],
      // //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      // tsConfigFilePath: "../../tsconfig.json",
      // // tsconfigPath: "../../tsconfig.json",
    }),
    // ES 目录的类型定义
    // dts({
    //     tsconfigPath: '../../tsconfig.json',
    //     outDir: 'es',
    //     include: ['src', 'index.ts'],
    //     staticImport: true,
    // }),
    // // Lib 目录的类型定义
    // dts({
    //     tsconfigPath: '../../tsconfig.json',
    //     outDir: 'lib',
    //     include: ['src', 'index.ts'],
    //     staticImport: true,
    // })
  ],
});
