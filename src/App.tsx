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
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
import { Counter } from './components/class/Counter';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/template-literals/Toast';
import { CustomButton } from './components/html/Button';
import { CustomInput } from './components/html/Input';
import { Text } from './components/polymorphic/Text';

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
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <Counter message='The count value is' />
      <Private isLoggedIn={true} component={Profile} />
      {/* <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={(item) => console.log(item)}
      /> */}
      <List
        items={[
          { id: 1, first: 'Jon', last: 'Snow' },
          { id: 2, first: 'Eric', last: 'Chan' },
          { id: 3, first: 'Jane', last: 'Lee' },
        ]}
        onClick={(item) => console.log(item)}
      />
      <RandomNumber value={10} isPositive />
      <Toast position='left-center' />
      <CustomButton variant='primary' onClick={() => console.log('Clicked')}>
        Primary Button
      </CustomButton>
      <CustomInput />
      <Text as='h1' size='lg'>
        Heading
      </Text>
      <Text as='p' size='md'>
        Paragraph
      </Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>
        Label
      </Text>
    </div>
  );
}

export default App;
