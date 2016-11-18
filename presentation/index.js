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
  createReactApp: require('../assets/create-react-app.png'),
  city: require("../assets/city.jpg"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#CB1B45"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              React 101
            </Heading>
            <Heading size={1} fit caps>
              2016/11/19 @ ALPHACamp
            </Heading>
            <Text bold textColor="black">
              吳敬庭 WUCT
            </Text>
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

          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>

          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
