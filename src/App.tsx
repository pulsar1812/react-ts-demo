import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';

function App() {
  const personName = {
    first: 'Jon',
    last: 'Snow',
  };

  const nameList = [
    {
      first: 'Jane',
      last: 'Lee',
    },
    {
      first: 'May',
      last: 'Chan',
    },
    {
      first: 'Jim',
      last: 'Woo',
    },
  ];

  return (
    <div className='App'>
      <Greet name='Jon' messageCount={10} isLoggedIn={true} />
      <Greet name='Jon' isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='success' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Jon Snow!</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event, id);
        }}
      />
      <Input value='' handleChange={(event) => console.log(event)} />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
    </div>
  );
}

export default App;
