import SubjectCard from '../components/SubjectCard';
import { subjects } from '../data/subjects';

export default function Home({ onSelectSubject }) {
  return (
    <main className='page'>
      <section className='hero'>
        <p className='eyebrow'>Personal developer knowledge base</p>
        <h1>DeCodex</h1>
        <p className='hero-text'>
          A place to decode programming concepts, collect useful notes, and
          build real understanding one topic at a time.
        </p>
      </section>

      <section className='grid'>
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            subject={subject}
            onSelect={onSelectSubject}
          />
        ))}
      </section>
    </main>
  );
}
