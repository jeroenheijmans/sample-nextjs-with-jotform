import Link from 'next/link';
import Image from 'next/image';
import Water from '../../../public/water.jpg';
import SurveyForm from '../components/survey-form';

export default function Details() {
  return (
    <div className='px-4'>
      <h1 className='mt-8 text-4xl font-bold'>About this sample</h1>
      <p className='py-4'>
        This sample was created to experiment with all technologies involved.
        You can find more similar
        <Link
          href='https://github.com/jeroenheijmans?tab=repositories&q=sample&type=source&language=&sort='
          target='_blank'
        >
          samples for other technologies on GitHub
        </Link>
        .
      </p>
      <SurveyForm />
      <p className='py-4'>
        In addition to the form above, here is some content to fill up the page
        and make it look like a <strong>real</strong> website.
      </p>
      <Image
        className='rounded border shadow-xl'
        src={Water}
        alt='Lake amidst heath and grass'
      />
      <p className='py-4'>Taken in the lovely province of Flevoland.</p>
    </div>
  );
}
