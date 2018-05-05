import _ from 'lodash';
import React from 'react';
import Link from 'gatsby-link';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import RotatingText from '../components/rotating-text';
import MailchimpSignupForm from '../components/mailchimp-signup-form';
import { FeaturesBlock, Feature } from '../components/features-block';
import DetailsBlock from '../components/details-block';
import RequestStream from '../components/request-stream';
import StackedGraph from '../components/stacked-graph';
import EditableBody from '../components/editable-body';

import { styled, media, css } from '../styles';
import { siteMetadata } from '../../gatsby-config.js';

const FullWidth = styled.section`
  ${media.desktop`
    padding-right: calc((100vw - ${p => p.theme.pageWidth.desktop}) / 2);
    padding-left: calc((100vw - ${p => p.theme.pageWidth.desktop}) / 2);
    margin: 0 calc(-1 * (100vw - ${p => p.theme.pageWidth.desktop}) / 2);
  `}

  ${media.tablet`
    padding-left: 30px;
    padding-right: 30px;
  `}

  ${media.mobile`
    padding-left: 10px;
    padding-right: 10px;
  `}
`;

const HeroBlock = FullWidth.extend`
  padding-top: 120px;
  padding-bottom: 120px;

  ${media.mobile`
    padding-top: 60px;
    padding-bottom: 60px;
  `}

  color: ${p => p.theme.mainColor};
  background-color: ${p => p.theme.mainBackground};

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);

  text-align: left;
`;

const TopHeroBlock = HeroBlock.extend`
  padding-bottom: 299px;
`;

const IntroTextContainer = styled.div`
  margin-bottom: 54px;
`;

const PitchHeading = styled.h1`
  margin-top: -12px;
  line-height: 1.3;
  font-weight: bold;
  margin-bottom: 18px;

  ${media.desktop`
    max-width: 700px;
  `}

  ${p => p.theme.fontSizeHeading}
`;

const Subheading = styled.h2`
  line-height: 1.25;
  margin-top: 25px;

  text-transform: uppercase;
  letter-spacing: 1px;
  ${p => p.theme.fontSizeSubheading};
  color: ${p => p.theme.mainSubtleColor};
`;

const RotatingTextHeading = styled(RotatingText)`
  text-decoration: underline;
  text-decoration-color: rgba(255, 66, 31, 0.2);
  color: #e1421f;
  white-space: nowrap;
`;

const SignupForm = styled(MailchimpSignupForm)`
  display: flex;
  justify-content: start;

  ${media.mobile`
      flex-direction: column;
  `}
`;

const SignupText = styled.p`
  ${p => p.theme.fontSizeText};
  color: ${p => p.theme.mainSubtleColor};
`;

const overlay = (overlayStyles) => css`
  &:after {
    content: '';
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;

    ${overlayStyles}
  }
`;

const BackgroundEditor = styled(EditableBody)`
  width: 50%;

  ${overlay(`
    background: linear-gradient(to right,
        rgba(250, 250, 250, 0.1),
        rgba(250, 250, 250, 0.3) 30%,
        rgba(250, 250, 250, 0.6) 60%,
        rgba(250, 250, 250, 0.9) 80%,
        rgba(250, 250, 250, 1) 100%
      );
  `)}
`;

const StreamWrapper = styled.div`
  ${overlay(`
    background: linear-gradient(to right,
        rgba(250, 250, 250, 0.3),
        rgba(250, 250, 250, 0.3) 15%,
        rgba(250, 250, 250, 0.8) 25%,
        rgba(250, 250, 250, 0.9) 60%,
        rgba(250, 250, 250, 1) 90%
      ), linear-gradient(to top,
        rgba(250, 250, 250, 0) 85%, rgba(250, 250, 250, 1) 100%
      );
  `)}

  > div {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 0;
  }
`;

const trafficData = [
  [],
  [],
  [0, 0, 1],
  [0, 0, 1],
  [0, 0, 1, 2],
  [0, 0, 0, 2],
  [2, 0, 0, 0, 2],
  [0, 0, 0, 0, 2, 2],
  [5, 0, 0, 0, 0, 4],
  [2, 1, 0, 0, 1, 2],
  [4, 0, 0, 0, 0, 2],
  [2, 0, 0, 0, 0, 2],
  [1],
].map(([JSON, GraphQL, HTML, JS, CSS, image]) => _.mapValues({
  JSON, GraphQL, HTML, JS, CSS, image
}, v => v || 0));

export default () => (<div>
  <TopHeroBlock>
    <IntroTextContainer>
      <PitchHeading>
        Debug, test & change how <RotatingTextHeading>
          <span>your code</span>
          <span>your web app</span>
          <span>your mobile app</span>
          <span>your IoT device</span>
          <span>your backend</span>
        </RotatingTextHeading>
        {' '}
        communicates.
      </PitchHeading>

      <Subheading>
        Beautiful, open&#8209;source & cross&#8209;platform<br/>
        HTTP proxy, analyzer and client.
      </Subheading>
    </IntroTextContainer>

    <SignupForm
      autoFocus
      action="https://tech.us18.list-manage.com/subscribe/post?u=f6e81ee3f567741ec9800aa56&amp;id=32dc875c8b"
      emailTitle={"Enter your email to get early access"}
      hiddenFieldName={"b_f6e81ee3f567741ec9800aa56_32dc875c8b"}
      submitText={"Get early access"}
    />
  </TopHeroBlock>

  <FeaturesBlock>
    <Feature>
      <h3>Debug</h3>
      <FontAwesomeIcon icon={['fal', 'search']} size='3x' />
      <p>
        Transparently proxy & intercept HTTP(S) traffic
      </p>
      <p>
        Visualize, diff & inspect HTTP requests & responses
      </p>
      <p>
        Built-in support for Chrome, Android, Docker and more
      </p>
    </Feature>
    <Feature>
      <h3>Test</h3>
      <FontAwesomeIcon icon={['fal', 'stopwatch']} size='3x' />
      <p>
        Edit requests live to mock API or client behaviour
      </p>
      <p>
        Simulate slow connections and HTTP errors
      </p>
      <p>
        Analyze live request performance & security
      </p>
    </Feature>
    <Feature>
      <h3>Change</h3>
      <FontAwesomeIcon icon={['fal', 'wrench']} size='3x' />
      <p>
        Create, edit & save requests for rapid prototyping
      </p>
      <p>
        Export & share ready-to-use requests for curl, fetch
        &amp; more
      </p>
      <p>
        Automate with HTTP Toolkit's{' '}
        <a href="https://github.com/pimterry/mockttp">
          open-source internals
        </a>
      </p>
    </Feature>
  </FeaturesBlock>

  <DetailsBlock direction='right'>
    <StreamWrapper>
      <RequestStream />
    </StreamWrapper>
    <h3>
      Intercept HTTP
    </h3>
    <p>
      <strong>See everything that's sent & received</strong>, at a glance. Understand, remote&nbsp;debug, or reverse engineer any web traffic on your network.
    </p>
    <p>
      Intercept & proxy HTTP traffic from almost anywhere, including HTTPS. Built-in support for debugging <strong>Chrome, Android & Docker</strong>.
    </p>
    <p>
      <strong>Simulate slow or unstable connections & HTTP errors</strong>, to understand how your code would behave in different environments and failure cases.
    </p>
  </DetailsBlock>

  <DetailsBlock direction='left'>
    <StackedGraph
      data={trafficData}
      highlighted={9}
      opacity={0.3}
      graphPaddingPx={33}
    />

    <h3>
      Inspect & analyze HTTP
    </h3>
    <p>
      Inspect HTTP request & response headers, bodies, metrics & more.<br/>
      Smart formatting available for <strong>JSON, GraphQL, XML</strong> and others.
    </p>
    <p>
      <strong>Diff HTTP requests & responses</strong> to understand failure cases.
    </p>
    <p>
      Explore overall <strong>performance metrics</strong> & see <strong>security warnings</strong> for problematic requests to spot non-functional issues early.<br/>
      Use built-in visualizations, or define your own.
    </p>
  </DetailsBlock>

  <DetailsBlock direction='right'>
    <BackgroundEditor
      heading='Response body'
      contentType='application/json'
    >
      {JSON.stringify({
        key1: "value",
        key2: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8
        ],
        key3: 456
      })}
    </BackgroundEditor>

    <h3>
      Create & rewrite HTTP
    </h3>

    <p>
      Edit live HTTP requests & responses to simulate client or server behaviour.
    </p>

    <p>
      Edit body content directly, or with built-in JSON, XML & GraphQL editors.
    </p>

    <p>
      Create & send requests from scratch, to explore & debug API behaviour.
    </p>

    <p>
      Repeat, save and export any request or response. Share them with your team as HARs, or export as code to quickly add them to your codebase.
    </p>
  </DetailsBlock>

  <HeroBlock>
    <PitchHeading>
      Sign up now<br/>to find out more
    </PitchHeading>
    <SignupForm
      action="https://tech.us18.list-manage.com/subscribe/post?u=f6e81ee3f567741ec9800aa56&amp;id=32dc875c8b"
      emailTitle={"Enter your email to get early access"}
      hiddenFieldName={"b_f6e81ee3f567741ec9800aa56_32dc875c8b"}
      submitText={"Get early access"}
    />
  </HeroBlock>
</div>);
