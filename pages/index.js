import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                <h2 className={`${utilStyles.heading2Xl}`}>Project</h2>
                <ul>
                    <li>
                        <a
                            href="https://www.facebook.com/profile.php?id=1602457063"
                            target="_blank"
                            className={utilStyles.headingLg}
                        >
                            Spotify
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://t.me/HarrisonPengBot"
                            target="_blank"
                            className={utilStyles.headingLg}
                        >
                            Telegram Bot
                        </a>
                    </li>
                </ul>
            </section>
        </Layout>
    )
}