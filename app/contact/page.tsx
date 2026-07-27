import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../Home.module.css';

export const metadata: Metadata = {
  title: 'Contact | Zachary Pelkey',
  description:
    'Contact Zachary Pelkey with business inquiries or just to say hello.',
};

const channels = [
  {
    name: 'Email',
    url: 'mailto:zach@pelkey.io',
    description: 'zach@pelkey.io — business inquiries or just to say hello.',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/jiyuu-jin',
    description: 'jiyuu-jin — where all the code lives.',
  },
  {
    name: 'X / Twitter',
    url: 'https://x.com/0xPelkey',
    description: '@0xPelkey — occasional thoughts on code and crypto.',
  },
];

export default function Contact() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link className={styles.backLink} href="/">
          &larr; pelkey.io
        </Link>

        <h1 className={styles.title}>Contact Me</h1>

        <p className={styles.description}>
          Contact me with business inquiries or just to say hello.
        </p>

        <div className={styles.grid}>
          {channels.map((channel) => (
            <a
              className={styles.card}
              key={channel.name}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{channel.name} &rarr;</h3>
              <p>{channel.description}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
