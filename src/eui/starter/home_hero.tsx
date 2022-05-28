import { FunctionComponent } from 'react'
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiTitle,
  EuiText,
  EuiButton,
  EuiLink,
} from '@elastic/eui'
import Link from 'next/link'
import { useEuiTheme } from '@elastic/eui'
import { css } from '@emotion/react'
import { useTheme } from '../theme'
import Image from 'next/image'
import { imageLoader } from '../lib/loader'
import IllustrationLight from '../../../public/images/home/illustration-eui-hero-500-shadow.svg'
import IllustrationDark from '../../../public/images/home/illustration-eui-hero-500-darkmode-shadow.svg'

export const homeHeroStyles = euiTheme => ({
  container: css`
    padding-bottom: ${euiTheme.size.base};

    @media (max-width: ${euiTheme.breakpoint.m}px) {
      text-align: center;

      > .euiFlexItem:first-of-type {
        order: 2;
      }
    }
  `,
  title: css`
    @media (min-width: ${euiTheme.breakpoint.m}px) {
      padding-top: ${euiTheme.size.base};
    }
  `,
  subtitle: css`
    padding-bottom: ${euiTheme.size.m};
  `,
  description: css`
    @media (max-width: ${euiTheme.breakpoint.m}px) {
      align-self: center;
    }
  `,
})

const HomeHero: FunctionComponent = () => {
  const { euiTheme } = useEuiTheme()
  const styles = homeHeroStyles(euiTheme)

  return (
    <EuiFlexGroup alignItems="center" css={styles.container}>
      <EuiFlexItem>
        <EuiTitle size="l" css={styles.title}>
          <h1>Next.js EUI Starter</h1>
        </EuiTitle>
        <EuiTitle size="s" css={styles.subtitle}>
          <h2>Welcome to Next.js EUI Starter</h2>
        </EuiTitle>

        <EuiText grow={false} css={styles.description}>
          <p>
            The Next.js Starter uses{' '}
            <EuiLink href="https://nextjs.org/" target="_blank">
              Next.js
            </EuiLink>
            ,{' '}
            <EuiLink href="https://elastic.github.io/eui/" target="_blank">
              EUI library
            </EuiLink>
            , and{' '}
            <EuiLink
              href="https://emotion.sh/docs/introduction"
              target="_blank"
            >
              Emotion
            </EuiLink>{' '}
            to help you make prototypes. You just need to know a few basic
            Next.js concepts and how to use EUI and you&apos;re ready to ship
            it!
          </p>

          <Link href="/getting-started" passHref>
            <EuiButton>
              <strong>Getting started</strong>
            </EuiButton>
          </Link>
        </EuiText>
      </EuiFlexItem>
      <EuiFlexItem>
        <HomeIllustration />
      </EuiFlexItem>
    </EuiFlexGroup>
  )
}

export const homeIllustration = euiTheme => ({
  homeIllustration: css`
    position: relative;
    display: flex;
    justify-content: center;

    @media (min-width: ${euiTheme.breakpoint.m}px) {
      justify-content: flex-end;
    }
  `,
  homeIllustrationEffect: css`
    display: block;
    position: relative;

    .homeIllustration__EffectSVG {
      transform: perspective(1600px);
      transform-style: preserve-3d;
      transition: all 0.3s ease-in-out;
      width: 100%;
      height: auto;

      &:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }

    .homeIllustration__TopLeftCorner {
      height: 50%;
      left: 0;
      position: absolute;
      top: 0;
      width: 50%;
      z-index: 300;

      &:hover ~ .homeIllustration__EffectSVG {
        transform: perspective(1600px) rotateX(-5deg) rotateY(5deg);
      }
    }

    .homeIllustration__TopRightCorner {
      height: 50%;
      position: absolute;
      right: 0;
      top: 0;
      width: 50%;
      z-index: 300;

      &:hover ~ .homeIllustration__EffectSVG {
        transform: perspective(1600px) rotateX(-5deg) rotateY(-5deg);
      }
    }

    .homeIllustration__BottomLeftCorner {
      bottom: 0;
      height: 50%;
      left: 0;
      position: absolute;
      width: 50%;
      z-index: 300;

      &:hover ~ .homeIllustration__EffectSVG {
        transform: perspective(1600px) rotateX(5deg) rotateY(5deg);
      }
    }

    .homeIllustration__BottomRightCorner {
      bottom: 0;
      height: 50%;
      position: absolute;
      right: 0;
      width: 50%;
      z-index: 300;

      &:hover ~ .homeIllustration__EffectSVG {
        transform: perspective(1600px) rotateX(5deg) rotateY(-5deg);
      }
    }
  `,
})

const HomeIllustration: FunctionComponent = () => {
  const { colorMode } = useTheme()
  const { euiTheme } = useEuiTheme()
  const styles = homeIllustration(euiTheme)

  const Illustration =
    colorMode === 'dark' ? IllustrationDark : IllustrationLight

  return (
    <div css={styles.homeIllustration}>
      <div css={styles.homeIllustrationEffect}>
        <div className="homeIllustration__TopLeftCorner" />
        <div className="homeIllustration__TopRightCorner" />
        <div className="homeIllustration__BottomLeftCorner" />
        <div className="homeIllustration__BottomRightCorner" />

        <div className="homeIllustration__EffectSVG">
          <Image
            width={500}
            height={500}
            src={Illustration}
            alt=""
            loader={imageLoader}
          />
        </div>
      </div>
    </div>
  )
}

export default HomeHero
