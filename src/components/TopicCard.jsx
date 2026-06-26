export default function TopicCard({ topic }) {
  return (
    <article className='card topic-card'>
      <span className='card-emoji'>{topic.emoji}</span>
      <h2>{topic.title}</h2>
      <p>{topic.description}</p>
    </article>
  );
}
