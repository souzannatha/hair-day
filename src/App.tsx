import Text from './components/text';
import TrashIcon from './assets/icons/trash.svg?react';
import Icon from './components/icon';
import Button from './components/button';

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
      <Icon svg={TrashIcon} className='fill-yellow-light' />
      <Button disabled>Agendar</Button>
      <Button className=''>Agendar</Button>
    </>
  );
}
