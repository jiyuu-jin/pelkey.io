import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '../Home.module.css';

export const metadata: Metadata = {
  title: 'Projects | Zachary Pelkey',
  description: 'Some of the cool projects Zachary Pelkey has been a part of.',
};

const projects = [
  {
    name: 'RageKit',
    url: 'https://github.com/jiyuu-jin/RageKit',
    description:
      "When you're tilted, don't think — press the button. Exits your degen positions into stables across chains.",
    language: 'TypeScript',
  },
  {
    name: 'IronNest',
    url: 'https://github.com/jiyuu-jin/IronNest',
    description: "The world's most advanced home automation system.",
    language: 'Rust',
  },
  {
    name: 'Rivals',
    url: 'https://github.com/jiyuu-jin/Rivals',
    description:
      'A cross-platform AR game where players hunt geo-anchored treasures, plant proximity-mine traps, and battle mobs to earn — and steal — on-chain tokens.',
    language: 'C# / Unity',
  },
  {
    name: 'mintprint.io',
    url: 'https://github.com/jiyuu-jin/mintprint.io',
    description:
      'A service for creators to mint and print NFTs paired with real-world merchandise.',
    language: 'TypeScript',
  },
  {
    name: 'RustyPals',
    url: 'https://github.com/jiyuu-jin/RustyPals',
    description:
      'Tamagotchi-inspired virtual friends that live in your browser and reproduce with wasm.',
    language: 'Rust',
  },
  {
    name: 'midi-rs',
    url: 'https://github.com/jiyuu-jin/midi-rs',
    description:
      'A low-spec MIDI controller and synthesizer written in Rust, perfect for running on a Raspberry Pi.',
    language: 'Rust',
  },
];

export default function Projects() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link className={styles.backLink} href="/">
          &larr; pelkey.io
        </Link>

        <h1 className={styles.title}>Projects</h1>

        <p className={styles.description}>
          Some of the cool projects that I&apos;ve been a part of.
        </p>

        <div className={styles.grid}>
          {projects.map((project) => (
            <a
              className={styles.card}
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{project.name} &rarr;</h3>
              <p>{project.description}</p>
              <span className={styles.cardMeta}>{project.language}</span>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
