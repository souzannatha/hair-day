import Text from './components/text';

export default function App() {
  return (
    <>
      <Text as='p' variant='title-lg' className='text-yellow-dark'>
        Olá Mundo
      </Text>
      <Text as='p' variant='title-md'>
        Olá Mundo
      </Text>
      <Text as='p' variant='title-sm'>
        Olá Mundo
      </Text>
      <Text as='p'>Olá Mundo</Text>
      <Text as='p' variant='text-sm'>
        Olá Mundo
      </Text>
    </>
  );
}
