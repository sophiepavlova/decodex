import TopicCard from '../components/TopicCard';
import { reactTopics } from '../data/reactTopics';

export default function ReactPage({ onBack }) {
  return (
    <main className='page'>
      <button className='back-button' onClick={onBack}>
        ← Back
      </button>

      <section className='hero'>
        <p className='eyebrow'>Subject</p>
        <h1>React</h1>
        <p className='hero-text'>
          A map of React concepts: mental models, state, hooks, rendering, and
          the mistakes that finally make things click.
        </p>
      </section>

      <section className='grid'>
        {reactTopics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </section>
    </main>
  );
}
