export default function SubjectCard({ subject, onSelect }) {
  return (
    <button className='card subject-card' onClick={() => onSelect(subject.id)}>
      <span className='card-emoji'>{subject.emoji}</span>
      <h2>{subject.title}</h2>
      <p>{subject.description}</p>
    </button>
  );
}
