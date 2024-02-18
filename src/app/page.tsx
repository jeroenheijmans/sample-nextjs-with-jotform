import Link from 'next/link';
import ContactForm from './components/contact-form';
import Image from 'next/image';
import Utrecht from '../../public/utrecht.jpg';

export default function Home() {
  return (
    <>
      <div className='px-4'>
        <h1 className='mt-8 text-4xl font-bold'>NextJS with Jotform Sample</h1>
        <p className='my-8'>
          This application showcases how Jotform could work inside a NextJS
          application. Different pages will have different examples of forms
          created with{' '}
          <Link
            className='text-indigo-600 underline hover:text-indigo-800'
            href='https://www.jotform.com/'
            target='_blank'
          >
            Jotform
          </Link>
          , a paid SAAS platform for creating forms on the fly.
        </p>
      </div>
      <ContactForm />
      <p className='my-8'>
        Below a form can be more text from a page, just like this. It is merely
        meant to demonstrate that the form is embedded in the page, not inserted
        at the end. It will also look a lot more realistic if there is content
        surrounding the form.
      </p>
      <p className='my-8'>
        Here iss a nice picture of Utrecht to liven up the page.
      </p>
      <Image
        className='rounded border shadow-xl'
        src={Utrecht}
        alt='Lake amidst heath and grass'
      />
      <p className='my-8'>Followed by some more text.</p>
    </>
  );
}
