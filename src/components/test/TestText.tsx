import { Button } from '../';

const TestText = () => {
  return (
    <section className='test__body'>
      <div className='test__overlay'>
        <Button type='button' className='btn btn-primary'>
          Start Typing Test
        </Button>
        <p>Or click the text and start typing</p>
      </div>
      <p>
        The archaeological expedition unearthed artifacts that complicated
        prevailing theories about Bronze Age trade networks. Obsidian from
        Anatolia, lapis lazuli from Afghanistan, and amber from the
        Baltic&mdash;all discovered in a single Mycenaean tomb&mdash;suggested
        commercial connections far more extensive than previously hypothesized.
        &quot;We&apos;ve underestimated ancient peoples&apos; navigational
        capabilities and their appetite for luxury goods,&quot; the lead
        researcher observed. &quot;Globalization isn&apos;t as modern as we
        assume.&quot;
      </p>
    </section>
  );
};
export default TestText;
