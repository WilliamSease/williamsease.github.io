import "./App.css";
import { useBlogPosts } from "./data/BlogContent";
import {
  Anchor,
  FlexBox,
  InlineImage,
  InlineLink,
  SiteBody,
  SiteGutterLayout,
  SiteHorizontalRule,
  SiteSpacer,
  SiteText,
  WindowShade,
} from "./sdk/CommonComponents";
import { isMobile } from "react-device-detect";
import { ContactForm } from "./forms/Contactform";
import { BlogPostComponent } from "./components/BlogPostComponent";
import { ImagePreloader, useImageDefinitions } from "./data/ImageDefinitions";
import { TruthOfTheDay } from "./components/TruthOfTheDay";
import { ComponentSwitcher } from "./components/ComponentSwitcher";
import { useWorks } from "./data/Works";

const debug = false;

function App() {
  const blogPosts = useBlogPosts(debug);
  const works = useWorks();
  const { imageDefinitions, relPathsForPreload } = useImageDefinitions();

  return (
    <FlexBox
      orientation="column"
      style={{
        backgroundColor: "lightgrey",
        alignItems: "center",
        minHeight: "100%",
      }}
      fullWidth
    >
      <FlexBox
        orientation="column"
        style={{
          width: isMobile ? "90%" : 1000,
          flexGrow: 1,
          backgroundColor: "white",
          marginLeft: isMobile ? 5 : undefined,
          marginRight: isMobile ? 5 : undefined,
          paddingLeft: 5,
          paddingRight: 5,
          height: "100%",
        }}
      >
        <ImagePreloader images={relPathsForPreload} />
        <FlexBox style={{ marginTop: ".5rem" }} orientation="row">
          <SiteText
            style={{ flexGrow: 1 }}
            big
            bold
            value="William A. Sease's Personal Site"
          />
        </FlexBox>
        <SiteHorizontalRule />
        <SiteBody>
          <WindowShade alwaysOpen title="The Important Links">
            <Anchor link="https://www.linkedin.com/in/william-a-sease-907bb219a">
              Linkedin
            </Anchor>
            <Anchor link="mailto:WilliamASease@protonmail.com">Email</Anchor>
            <Anchor link="https://github.com/WilliamASease">Github</Anchor>
            <Anchor link="https://williamasease.github.io/seaseResume.pdf">
              Resume (PDF)
            </Anchor>
          </WindowShade>
          <WindowShade alwaysOpen title="Photos">
            <InlineImage noDiv {...imageDefinitions.william} />
            <InlineImage noDiv {...imageDefinitions.napoleon} />
          </WindowShade>
          <WindowShade alwaysOpen title="Work History">
            <SiteGutterLayout>
              <InlineImage {...imageDefinitions.epic} />
              <>
                <SiteText bold value="Epic Systems Corporation" />
                <SiteText value="Full Stack Software Developer" />
                <SiteText value="MyChart" />
                <SiteText value="June 2021 - June 2022" />
              </>
            </SiteGutterLayout>
            <SiteSpacer />
            <SiteGutterLayout>
              <InlineImage {...imageDefinitions.sas} />
              <>
                <SiteText bold value="SAS Institute" />
                <SiteText value="Senior Associate Software Developer" />
                <SiteText value="Health & Life Sciences" />
                <SiteText value="July 2022 - Present" />
              </>
            </SiteGutterLayout>
          </WindowShade>
          <WindowShade alwaysOpen title="Education">
            <SiteGutterLayout>
              <InlineImage {...imageDefinitions.appA} />
              <>
                <SiteText
                  bold
                  value="Appalachian State University, Boone, NC"
                />
                <SiteText value="Bachelor of Science in Computer Science, May 2021" />
                <SiteText value="Magna Cum Laude" />
              </>
            </SiteGutterLayout>
          </WindowShade>
          <WindowShade alwaysOpen title="Skills">
            <SiteText underline value="Craft" />
            <SiteText value="Experience across several successful web-dev & full-stack projects" />
            <SiteText value="Emphasis on accessability, usability, and UI design" />
            <SiteSpacer />
            <SiteText
              underline
              value="Professionalism & Interpersonal Communication"
            />
            <SiteText value="Enjoys collaboration" />
            <SiteText value="Works well with developers, project management, and quality assurance" />
          </WindowShade>
          <WindowShade alwaysOpen title="Works">
            <ComponentSwitcher pairs={works} />
          </WindowShade>
          <WindowShade alwaysOpen title="The Update">
            {blogPosts.map((bp, i) => (
              <WindowShade
                key={i}
                title={`${bp.month}. ${bp.day}, ${bp.year} - ${bp.title}`}
              >
                <BlogPostComponent blogPost={bp} />
              </WindowShade>
            ))}
          </WindowShade>
          <WindowShade alwaysOpen title="Contact">
            <ContactForm />
          </WindowShade>
        </SiteBody>
        <SiteHorizontalRule />
        <TruthOfTheDay />
      </FlexBox>
    </FlexBox>
  );
}

export default App;
