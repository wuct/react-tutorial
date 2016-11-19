// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  createReactApp: require("../assets/create-react-app.png"),
  shoudComponentUpdate: require("../assets/should-component-update.png")
};

preloader(images);

const theme = createTheme({
  primary: "#D0104C",
  secondary: "#FC9F4D"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              React 101
            </Heading>
            <Heading  size={4} margin="0 0 20px 0" textColor="black">
              吳敬庭 WUCT
            </Heading>
            <Link href="https://blog.wuct.me">
              <Text bold caps textColor="tertiary">Blog</Text>
            </Link>
            <Link href="https://github.com/wuct">
              <Text bold caps textColor="tertiary">Github</Text>
            </Link>
            <Link href="https://twitter.com/wu_ct">
              <Text bold caps textColor="tertiary">Twitter</Text>
            </Link>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps fit textColor="white" textFont="primary">
              React is a Javasript Library for
            </Heading>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Buildging UI
            </Heading>
            <Layout>
              <Fill>
                <Appear>
                  <List>
                    <ListItem textColor="white">Website</ListItem>
                    <ListItem textColor="white">iOS</ListItem>
                    <ListItem textColor="white">Android</ListItem>
                  </List>
                </Appear>
              </Fill>
              <Appear>
                <Fill>
                  <List>
                    <ListItem textColor="white">macOS</ListItem>
                    <ListItem textColor="white">Windows</ListItem>
                    <ListItem textColor="white">Ubuntu</ListItem>
                  </List>
                </Fill>
              </Appear>
              <Appear>
                <Fill>
                  <List>
                    <ListItem textColor="white">WebVR</ListItem>
                    <ListItem textColor="white">And...</ListItem>
                  </List>
                </Fill>
              </Appear>
            </Layout>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={2} caps fit textColor="white">
              Let's build an app
            </Heading>
            <Layout>
              <Fill>
                <CodePane
                  lang="bash"
                  source={`
# Install the React CLI tool globally
npm install -g create-react-app

# Then, create your awesome app
create-react-app my-awesome-app

# Go to the folder of the app you've just created
cd my-awesome-app

# Start the development server
npm start

# Then open http://localhost:3000
                  `}
                  margin="20px auto"
                />
              </Fill>
              <Fill>
                <Link href="http://localhost:3000">
                  <Text bold textColor="white" margin="20px 0">http://localhost:3000</Text>
                </Link>
                <Image src={images.createReactApp.replace("/", "")} width={350} />
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary" notes="Jsx is smiliar to HTML.">
            <Heading size={1} caps fit textColor="white">
              Go break something!
            </Heading>
            <Heading size={4} textColor="primary">
              ./src/App.js
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/App.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Feel Good to Deploy</Heading>
            <CodePane
              lang="bash"
              source={`
# Install surge.sh CLI tool globally
npm install -g surge

# Create an optimized production build
npm run build

# Deploy our app to surge
surge -p ./build/ -d my-first-react-app.surge.sh

# Login or create an surge account in the CLI

# Then open https://my-first-react-app.surge.sh
# Yeah!
            `}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Heading caps fit textColor="white">A useful tip</Heading>
            <Text bold textColor="primary">
              Save the deploy script to ./package.json
            </Text>
            <CodePane
              lang="json"
              source={
`{
  ...
  "scripts": {
    ...
    "deploy": "surge -p ./build/ -d my-first-react-app.surge.sh"
  }
}`
              }
              margin="20px auto"
            />
            <Heading size={4} textColor="white">
              To update our app
            </Heading>
            <CodePane
              lang="bash"
              source={`npm run deploy`}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>All non-trivial abstractions, to some degree, are leaky.</Quote>
              <Cite>Joel Spolsky, CEO of Stack Overflow</Cite>
            </BlockQuote>
            <Link
              textColor="secondary"
              href="http://www.joelonsoftware.com/articles/LeakyAbstractions.html"
            >
              The Law of Leaky Abstractions
            </Link>
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="secondary">
            <Heading caps fit size={1} textColor="primary">
              What's inside create-react-app?
            </Heading>
            <List>
              <ListItem textColor="white">Webpack with plugins and loaders</ListItem>
              <ListItem textColor="white">Babel with a preset for React</ListItem>
              <ListItem textColor="white">Autoprefixer</ListItem>
              <ListItem textColor="white">ESLint</ListItem>
              <ListItem textColor="white">Jest</ListItem>
              <ListItem textColor="white">and others.</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps size={1} textColor="secondary">
              Webpack
            </Heading>
            <List>
              <ListItem>
                <Link href="https://webpack.js.org/" textColor="white">
                  webpack.js.org
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://webpack.github.io/" textColor="white">
                  webpack.github.io
                </Link>
              </ListItem>
            </List>
            <Heading caps size={1} textColor="secondary">
              Babel
            </Heading>
            <List>
              <ListItem>
                <Link href="https://babeljs.io/" textColor="white">
                  babeljs.io
                </Link>
              </ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary" notes="Jsx is smiliar to HTML.">
            <Heading size={1} caps fit textColor="white">
              How do we load App.js?
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/AppWithComment.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["fade"]} bgColor="black" textColor="primary">
            <Heading size={1} caps fit textColor="white">
              Core concepts of React
            </Heading>
            <List>
              <ListItem>React Element</ListItem>
              <ListItem>React Componet</ListItem>
              <ListItem>State and lifecycle</ListItem>
              <ListItem>Props</ListItem>
              <ListItem>Handling events</ListItem>
              <ListItem>Forms</ListItem>
              <ListItem>List and keys</ListItem>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              React Element
            </Heading>
            <Text>The JSX</Text>
            <CodePane
              lang="jsx"
              source={`<div>Hello World</div>`}
              margin="20px auto"
            />
            <Text>is Actually</Text>
            <CodePane
              lang="jsx"
              source={`React.createElement('div', {}, 'Hello World')`}
              margin="20px auto"
            />
            <Text>which is</Text>
            <CodePane
              lang="jsx"
              source={`{ type: 'div', children: 'Hello World', ... }`}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              React Element Tree
            </Heading>
            <CodePane
              lang="jsx"
              source={
`<div>
  Hello
  <h1>
    World
  </h1>
</div>`
              }
              margin="20px auto"
            />
            <Text>equalls</Text>
            <CodePane
              lang="jsx"
              source={
`{
  type: 'div',
  children: [
    'Hello',
    {
      type: 'h1',
      children: 'World'
    }
  ]
}`
              }
              margin="20px auto"
            />
          </Slide>

          <Slide bgColor="white">
            <Image src={images.shoudComponentUpdate} />

            <Text bold>
              Source:
              <Link
                textColor="secondary"
                href="https://facebook.github.io/react/docs/optimizing-performance.html"
              >
                React Docs
              </Link>
            </Text>
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="secondary">
            <Heading size={1} caps fit>
              We give this tree to a renderer
            </Heading>
            <Heading size={1} textColor="primary">
              ./src/index.js
            </Heading>
            <CodePane
              lang="jsx"
              source={
`ReactDOM.render(
  <div>
    Hello
    <h1>
      World
    </h1>
  </div>,
  document.getElementById('root')
)`
              }
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="black">
            <Heading size={1} caps fit>
              React Component
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/Counter.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps>
              Lifecycle
            </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/Lifecycle.example")}
              margin="20px auto"
            />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
