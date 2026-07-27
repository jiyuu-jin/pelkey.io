import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './Resume.module.css';

export const metadata: Metadata = {
  title: 'Resume | Zachary Pelkey',
  description:
    'Resume of Zachary J. Pelkey — engineering leader across Rust, Go, TypeScript, and blockchain systems.',
};

const strengths = [
  'I frequently write Rust, Golang, Typescript, Python, Solidity',
  'Worked with databases of all kinds, PostgreSQL, MySQL, MongoDB, Redis',
  'Scaled complex, production systems to tens of thousands of concurrent users.',
  'Deep understanding of blockchain technologies within Bitcoin, Ethereum, and Solana ecosystems.',
  'Built cross-platform applications, webapps, native Java/Kotlin Android and iOS Swift apps.',
  'Founder, go-getter, big-dreamer and hard worker.',
];

const experience = [
  {
    company: 'HyperPlay Labs, Inc',
    dates: 'Sep. 2023 - Present',
    role: 'VP of Engineering',
    bullets: [
      'Conducted technical employee interviews and management of engineering team.',
      'Led the engineering team from MVP to production services used by more than 50,000 users.',
    ],
  },
  {
    company: 'Valist, Inc',
    dates: 'Dec. 2020 - Sep 2023',
    role: 'Chief Technology Officer',
    bullets: [
      'Guided executive business decisions based on technical requirements in the emerging Web3 market.',
      'Planned and developed the core infrastructure and code-bases for distributed systems and APIs.',
    ],
  },
  {
    company: 'Trilogy Education',
    dates: 'Oct. 2019 - Feb. 2021',
    role: 'Curriculum Engineer',
    bullets: [
      'Designed, built and tested curriculum for the blockchain units of the FinTech coding boot-camp.',
      'Worked and collaborated remotely to produce curriculum material within given time constraints.',
    ],
  },
  {
    company: 'Harrisburg University High Performance Computing Laboratory',
    dates: 'April 2019 - Nov. 2020',
    role: 'Software Dev. Research Associate',
    bullets: [
      'Presented research at University-wide symposiums of professors and administrators',
      'Aggregate, sort, clean and process data in data pipelines using Pandas, Jupyter, and SciPy.',
      'Deploy, operate and develop across cloud infrastructures Proxmox, OpenStack, Kubernetes',
    ],
  },
  {
    company: 'Thought Network (MistIQ Technologies)',
    dates: 'Jan 2017 - Dec 2019',
    role: 'Full Stack Blockchain Engineer',
    bullets: [
      'Developed and maintained Thought cryptocurrency wallet, block explorer and smart contracts.',
      'Maintained core blockchain infrastructure, nodes, RPC and pricing APIs.',
    ],
  },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  );
}

export default function Resume() {
  return (
    <div className={styles.backdrop}>
      <Link className={styles.backLink} href="/">
        &larr; pelkey.io
      </Link>

      <article className={styles.sheet}>
        <h1 className={styles.name}>Zachary J. Pelkey</h1>

        <Section title="Strengths">
          <ul className={styles.strengths}>
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="Work Experience">
          {experience.map((job) => (
            <div className={styles.job} key={job.company}>
              <div className={styles.jobHeader}>
                <span>{job.company}</span>
                <span className={styles.jobDates}>{job.dates}</span>
              </div>
              <div className={styles.jobRole}>{job.role}</div>
              <ul className={styles.bullets}>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section title="Education">
          <div className={styles.school}>
            Harrisburg University of Science and Technology
          </div>
          <div>Bachelor of Computer and Information Sciences</div>
        </Section>

        <Section title="Academic Achievements">
          USGIF Education of the Year Award - 2014, HackFS Finalist - 2020,
          EthNYC Winning Finalist - 2025
        </Section>
      </article>
    </div>
  );
}
