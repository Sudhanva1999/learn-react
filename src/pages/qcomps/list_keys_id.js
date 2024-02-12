function Avatar({person, size=100}) {
  return (
    <div>
        <img
      className="avatar"
      src={'https://i.imgur.com/' + person.imageId + 's.jpg'}
      alt={person.name}
      width={size}
      height={size}
    />
    <h2>{person.name}</h2>
    </div>
  );
}

export const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'szV5sdG'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'YfeOqp2'
}];

function getImageUrl(imageId) {
    return "https://i.imgur.com/" + imageId + "s.jpg"
}
export default function List() {
  const listItems = people.map((person) =>
    <li key ={"person_"+ person.id}>
       <Avatar
            person={{ name: person.name, imageId: person.imageId}}
            size={200} />
    </li>
  );
  return <ul>{listItems}</ul>;
}