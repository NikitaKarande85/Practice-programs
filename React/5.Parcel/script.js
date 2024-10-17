import { createRoot } from 'react-dom/client'

const h1 = <h1>Hello World</h1>

const root = createRoot(document.getElementById('root'))

root.render(h1)
console.log('Hello world!!!')


// when we run npx parcel index.html this command then dist folder is created



// Parcel is a fast, zero-configuration bundler for JavaScript applications, and it comes with a host of features designed to simplify development workflows. Here are some key features of Parcel:

// 1. **Zero Configuration**: 
//    Parcel works out of the box with minimal setup. It automatically detects dependencies and configures the build process without requiring complex configuration files like Webpack.

// 2. **Fast Bundling**: 
//    Parcel is built for speed. It uses multi-core processing, parallel bundling, and efficient caching to bundle projects quickly, even as they scale.

// 3. **Built-in Development Server**: 
//    Parcel provides a built-in development server with hot module replacement (HMR). It updates the code in the browser instantly without reloading the whole page.

// 4. **Tree Shaking**: 
//    It automatically removes unused code (dead code elimination) to reduce bundle size, improving performance.

// 5. **Code Splitting**: 
//    Parcel supports code splitting, allowing you to break up your application into smaller chunks for faster load times and efficient resource usage.

// 6. **Automatic Asset Handling**: 
//    Parcel can automatically process and bundle assets like JavaScript, CSS, HTML, images