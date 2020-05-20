import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Harrison Peng'
export const siteTitle = 'Harrison\'s Website'

export default function Layout() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <>
                    <img
                        src="/images/profile.png"
                        className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                        alt={name}
                    />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    <div className={`${utilStyles.iconImgBlock}`}>
                        <a href="https://www.facebook.com/profile.php?id=1602457063">
                            <img
                                src="/images/Facebook.png"
                                className={`${utilStyles.iconImg}`}
                                alt="facebook"
                            />
                        </a>
                        <a href="https://www.instagram.com/hao_0423/" target="_blank">
                            <img
                                src="/images/Instagram.png"
                                className={`${utilStyles.iconImg}`}
                                alt="Instagram"
                            />
                        </a>
                        <a href="https://github.com/hichyen1207" target="_blank">
                            <img
                                src="/images/Github.png"
                                className={`${utilStyles.iconImg}`}
                                alt="Github"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/harrison-peng/" target="_blank">
                            <img
                                src="/images/LinkedIn.png"
                                className={`${utilStyles.iconImg}`}
                                alt="LinkedIn"
                            />
                        </a>
                        <a href="mailto:hichyen1207@gmail.com" target="_blank">
                            <img
                                src="/images/email.png"
                                className={`${utilStyles.iconImg}`}
                                alt="email"
                            />
                        </a>
                    </div>
                    <p className={utilStyles.headingMd}><b>Traveling | Workout | Programming | Reading | Movie | Drama</b></p>
                </>
            </header>
        </div>
    )
}