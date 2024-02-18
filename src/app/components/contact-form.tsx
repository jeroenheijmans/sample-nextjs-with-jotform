'use client';

export default function ContactForm() {
  return (
    <div className='rounded border border-stone-400 bg-amber-50'>
      <h2 className='p-4 text-xl font-bold'>Contact Form Example</h2>
      <p className='px-4'>Below is an iframed Jotform.</p>
      <div className='m-4 border'>
        <iframe
          id='JotFormIFrame-240485999485074'
          title='Contact Form'
          src='https://form.jotform.com/240485999485074'
          style={{
            minWidth: '100%',
            maxWidth: '100%',
            height: '1100px',
            border: 'none',
          }}
        />
      </div>
    </div>
  );
}
