import SurveyForm from '../components/survey-form';

export default function PopUpDemo() {
  return (
    <div className='px-4'>
      <h1 className='mt-8 text-4xl font-bold'>Details of this application</h1>
      <p className='py-4'>Before you continue reading, please consider this:</p>
      <SurveyForm />
      <p className='py-4'>
        Thanks for considering that. Now, some details on how this application
        was set up. The steps were pretty straightforward!
      </p>
      <ul className='list-disc pl-8'>
        <li>Create a default NextJS (with TailwindCSS) application</li>
        <li>Introduce Jotform forms in various parts</li>
        <li>...profit!?</li>
      </ul>
      <p className='py-4'>Really, that is it!</p>
    </div>
  );
}
