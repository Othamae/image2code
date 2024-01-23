# Image2Code

Image2Code is a cutting-edge project created for learning purposes, leveraging the power of artificial intelligence to convert images into code snippets. With a focus on simplicity and efficiency, this tool aims to streamline the process of translating visual designs into functional code.

## Getting Started

Before you begin, ensure you have the following prerequisites:

- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [OpenAI Account](https://openai.com/): You must have an account on OpenAI to obtain an API key.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Othamae/image2code.git
   ```
2. Navigate to the project directory:
    ```bash
   cd image2code
   ```
3. Install dependencies:
   ```bash
    npm install
    # or
    yarn install
   ```
4.  Create a ``.env`` file in the root of the project with the following content:
   
    ```javaScript
    OPENAI_API_KEY=your_openai_api_key
    ```
    Replace *your_openai_api_key* with your actual OpenAI API key.

### Development

To run the project in development mode, use the following script:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
