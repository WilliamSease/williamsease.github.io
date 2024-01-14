import {
  Anchor,
  FlexBox,
  InlineImage,
  SiteSpacer,
  SiteText,
} from "../sdk/CommonComponents";
import { useImageDefinitions } from "./ImageDefinitions";

export const useWorks = () => {
  const { imageDefinitions } = useImageDefinitions();

  return [
    {
      key: "Spotify95",
      component: (
        <>
          <SiteText value="A custom react frontend for Spotify." />
          <SiteSpacer />
          <Anchor link="https://williamasease.github.io/spotify-95">
            {"Site"}
          </Anchor>
          <SiteSpacer />
          <InlineImage
            {...imageDefinitions.spotify1}
            style={{ width: "50%" }}
          />
        </>
      ),
    },
    {
      key: "Rogolf",
      component: (
        <>
          <SiteText value="Senior seminar, game made as part of a two-person team" />
          <SiteText value="Play through 18 holes, acquiring upgrades and experiencing misfortune along the way" />
          <SiteText value="Unity" />
          <SiteSpacer />
          <Anchor link="https://williamasease.github.io/rogolf/web-build/">
            <SiteText value="Play In Browser" />
          </Anchor>
          <SiteSpacer />
          <Anchor link="https://williamasease.github.io/rogolf/windows-build.rar">
            <SiteText value="Download for Windows (Works better)" />
          </Anchor>
          <SiteSpacer />
          <InlineImage
            style={{ width: "50%" }}
            noDiv
            {...imageDefinitions.rogolf1}
          />
          <InlineImage
            style={{ width: "50%" }}
            noDiv
            {...imageDefinitions.rogolf2}
          />
          <InlineImage
            style={{ width: "50%" }}
            noDiv
            {...imageDefinitions.rogolf3}
          />
        </>
      ),
    },
    {
      key: "Tetris Galaxy",
      component: (
        <>
          <SiteText value="Apphack X (2019) Hackathon winning entry" />
          <SiteText value="Made as part of a 4-person team" />
          <SiteText value="Java" />
          <SiteSpacer />
          <Anchor link="https://github.com/swansonmp/tetrisGalaxy/blob/master">
            <SiteText value="Download" />
          </Anchor>
          <SiteSpacer />
          <FlexBox orientation="row" fullWidth>
            <InlineImage
              style={{ width: "75%" }}
              {...imageDefinitions.tetrisGalaxy1}
            />
            <InlineImage
              style={{ width: "75%" }}
              {...imageDefinitions.tetrisGalaxy2}
            />
          </FlexBox>
        </>
      ),
    },
    {
      key: "Java Mode 7",
      component: (
        <>
          <SiteText value="Implementation of the Super Nintendo's Mode 7 Algorithm in Java" />
          <SiteSpacer />
          <Anchor link="https://www.youtube.com/watch?v=7a97zlXLQ7Q">
            <SiteText value="View on Youtube" />
          </Anchor>
          <SiteSpacer />

          <Anchor link="https://drive.google.com/file/d/1cdzMI87Hn5ebUkXUuw4GOwYnHwVuAJ-_/view">
            <SiteText value="Download" />
          </Anchor>
          <SiteSpacer />
          <InlineImage
            {...imageDefinitions.mode7Game1}
            style={{ width: "50%" }}
          />
        </>
      ),
    },
  ];
};
