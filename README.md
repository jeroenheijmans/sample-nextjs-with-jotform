# Sample NextJS Application with Jotform

This is a sample NextJS application which demonstrates integration of [Jotform](https://www.jotform.com/), a paid SAAS tool to create web forms.

Latest production version can be viewed online at [sample-nextjs-with-jotform.vercel.app](https://sample-nextjs-with-jotform.vercel.app/).

## ⚠ Warning about lack of React support

There seemingly is no great Jotform-supported React or NextJS support.

- The [`react-jotform-embed` library](https://github.com/xurei/react-jotform-embed) is mentioned a lot online but marked as deprecated.
- The [`jotform-react` library](https://github.com/sbayd/jotform-react) also is a solo-maintainer project with low activity and a [months-old open issue](https://github.com/sbayd/jotform-react/issues/5) about React (and thus NextJS) support lagging behind.

Because of this this sample repository uses iframes to embed forms.
This has plenty of downsides, as there's no great sizing options by default.
We published this sample nonetheless as it might help someone.

PS. The iframe embed code on the Jotform website also asks you to include a whole bunch of minified javascript on the page, which was omitted. It's unclear what the effects of this omission would be.

## Running

Install dependencies and run the code:

```sh
npm ci
npm run dev
```

Possibly more instructions are forthcoming.
To integrate your own Jotform forms you'll need to change the code a bit.

## Documentation

- [Jotform React library](https://github.com/sbayd/jotform-react)
