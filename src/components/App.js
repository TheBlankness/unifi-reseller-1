import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Checkbox,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Step,
  Tab,
  Form
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import choice from "../images/celebration.png";
import home from "../images/home.png";
import rocket from "../images/rocket.png";
import steps from "../images/steps.png";
import splash from "../images/splash.jpg";

import BackgroundSection from "../components/BackgroundSection"

import { ScrollTo } from "react-scroll-to";
  
// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === "undefined";

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="UNIFI FIBRE"
      
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "lighter",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em"
      }}
    />
    <Header
      as="h2"
      content="The definition of internet speed."
      
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    />
    <ScrollTo>
    {({ scroll }) => (
    <Button  color="black"  size="big" 
    onClick={() => scroll({ x: 20, y: 2950, smooth: true })}
    >
      Register now
      <Icon name="right arrow" />
    </Button>
    )}
    </ScrollTo>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
      
      
          <BackgroundSection style={{
            minHeight: 700,
            padding: "1em 0em",
            textAlign:"center",
            zIndex: "9999"
          }} >
            <Menu
              fixed={fixed ? "top" : null}
           
              pointing={!fixed}
              secondary={!fixed}
              size="large"
         
            >
              <Container>
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>

                <ScrollTo>
                  {({ scroll }) => (
                    <Menu.Item
                      as="a"
                      onClick={() => scroll({ x: 20, y: 2350, smooth: true })}
                    >
                      Unifi Home Plan
                    </Menu.Item>
                  )}
                </ScrollTo>
                <Menu.Item as="a">Unifi Business</Menu.Item>
                <Menu.Item as="a">Unifi Tv Pack</Menu.Item>
               
              </Container>
            </Menu>
            <HomepageHeading />
            </BackgroundSection>
        
         
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Unifi Home Plan</Menu.Item>
          <Menu.Item as="a">Unifi Business</Menu.Item>
          <Menu.Item as="a">Unifi Tv Pack</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
        <BackgroundSection style={{ minHeight: 350, padding: "1em 0em" , backgroundImage:
        `url(${splash})`,  textAlign:"center" }}>
        
        
            <Container>
              <Menu  pointing secondary size="large" color="white" >
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                 
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
            </BackgroundSection>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const panes = [
  { menuItem: "30 Mbps", render: () => <Tab.Pane>
  <Container >
  <Header as='h2' style={{ marginBottom:"0em", fontSize: "2.5em" , fontWeight:"normal"}}>30 Mbps</Header>
  <Header as='h3' style={{ marginTop: "0em", fontSize: "2em", fontWeight:"normal" }}>RM89.00</Header>
  <List size="huge">
  <List.Item icon='download'  content='Download Speed 30 Mbps' />
  <List.Item icon='upload' content='Upload Speed 10 Mbps' />
  <List.Item icon='wifi' content='Unlimited Quota' />
  <List.Item icon='call' content='Call rates Pay Per Use 20 sen/minit' />
  <List.Item icon='rss' content='Free Modem & Router' />
  </List>
  </Container>
 
  
  </Tab.Pane> },
  { menuItem: "100 Mbps", render: () => <Tab.Pane>  <Container >
  <Header as='h2' style={{ marginBottom:"0em", fontSize: "2.5em" , fontWeight:"normal"}}>100 Mbps</Header>
  <Header as='h3' style={{ marginTop: "0em", fontSize: "2em", fontWeight:"normal" }}>RM129.00</Header>
  <List size="huge">
  <List.Item icon='download'  content='Download Speed 100 Mbps' />
  <List.Item icon='upload' content='Upload Speed 5  0 Mbps' />
  <List.Item icon='wifi' content='Unlimited Quota' />
  <List.Item icon='call' content='Free 600 minutes of call time to mobile and fixed lines throughout Malaysia' />
  <List.Item icon='tv' content='Free PlayTv channels Varnam + Pack / Variety + Pack / Ruby + Pack' />
  </List>
  </Container></Tab.Pane> },
  { menuItem: "300 Mbps", render: () => <Tab.Pane>  <Container >
  <Header as='h2' style={{ marginBottom:"0em", fontSize: "2.5em" , fontWeight:"normal"}}>300 Mbps</Header>
  <Header as='h3' style={{ marginTop: "0em", fontSize: "2em", fontWeight:"normal" }}>RM199.00</Header>
  <List size="huge">
  <List.Item icon='download'  content='Download Speed 30 Mbps' />
  <List.Item icon='upload' content='Upload Speed 10 Mbps' />
  <List.Item icon='wifi' content='Unlimited Quota' />
  <List.Item icon='call' content='Call rates Pay Per Use 20 sen/minit' />
  <List.Item icon='rss' content='Free Modem & Router' />
  </List>
  </Container></Tab.Pane> }
];

const TabExampleMenuPositionRight = () => (
  <Tab
    menu={{ fluid: true, vertical: true }}
    menuPosition="left"
    panes={panes}
  />
);

const App = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Why Register with us?
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              We are Authorized Unifi resellers, where we do all the lifting.
              The only thing you need to do is just fill a form.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image rounded size="large" src={choice} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          

          <ScrollTo>
          {({ scroll }) => (
            <Grid.Column textAlign="center">
            <Button size="huge"  onClick={() => scroll({ x: 20, y: 2950, smooth: true })}>Register Now</Button>
          </Grid.Column>
          )}
          </ScrollTo>

        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Image centered rounded size="medium" src={home} />
            <Header as="h3" style={{ fontSize: "2em" }}>
              Comfort of Home
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Get Unifi at the comfort of your house
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Image centered rounded size="medium" src={rocket} />
            <Header as="h3" style={{ fontSize: "2em" }}>
              Quick Registration
            </Header>
            <p style={{ fontSize: "1.33em" }}>Register now and get responded</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Easy Steps
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              We are a Authorized Unifi resellers, where we do all the lifting.
              The only thing you need to do is just fill a form.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image rounded size="large" src={steps} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Step.Group ordered>
              <Step active>
                <Step.Content>
                  <Step.Title>Fill up form</Step.Title>
                  <Step.Description>Enter your details</Step.Description>
                </Step.Content>
              </Step>

              <Step>
                <Step.Content>
                  <Step.Title>Thumbprint</Step.Title>
                  <Step.Description>For verification purposes</Step.Description>
                </Step.Content>
              </Step>

              <Step>
                <Step.Content>
                  <Step.Title>Installation</Step.Title>
                  <Step.Description>You are set with unifi</Step.Description>
                </Step.Content>
              </Step>
            </Step.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "8em 0em" }} vertical>
   
      <Container>
        <Header textAlign="center" as="h3" style={{ fontSize: "3em", fontWeight:"normal" }}>
          Home Plans
        </Header> 

        <TabExampleMenuPositionRight />
      </Container>
    </Segment>

    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header textAlign="center" as="h3" style={{ fontSize: "2em" }}>
          Register Form
        </Header>
        <Form>
          <Form.Group>
            <Form.Input fluid label="Name" placeholder="Name" width={10} />
            <Form.Input fluid label="IC" placeholder="IC" width={6} />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input fluid label="Email" placeholder="Email" />
            <Form.Input fluid label="Phone Number" placeholder="Phone" />
          </Form.Group>
          <Form.Field>
            <label>Address Line 1</label>
            <input placeholder="Address Line 1" />
          </Form.Field>
          <Form.Field>
            <label>Address Line 2</label>
            <input placeholder="Address Line 2" />
          </Form.Field>
          <Form.Group>
            <Form.Input fluid label="City" placeholder="City" width={7} />
            <Form.Input fluid label="State" placeholder="State" width={5} />
            <Form.Input fluid label="ZipCode" placeholder="ZipCode" width={4} />
          </Form.Group>
          <Form.Field>
            <label>Package</label>
            <input placeholder="Package" />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Location</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Why us?</List.Item>
                <List.Item as="a">What we do</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">F.A.Q</List.Item>
                <List.Item as="a">Support</List.Item>
                <List.Item as="a">Terms & Conditions</List.Item>
                <List.Item as="a">Privacy Policy</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
              PakarKom
              </Header>
              <p inverted >
              TM Authorized Reseller since 2005 with extensive experience in handling unifi and Streamyx registrations.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);

export default App;
