// @ts-nocheck
import ReactDOM from 'react-dom/client';
import { FormExample } from './Form';
import { Header } from './Header';
import { Page } from './Page';
import './index.scss';
import { Heading } from '@carbon/react';

// import '@milliman-innersource/milliman-design-system/dist/carbon/v11/index.css';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Page>
        <Heading className="mds-pb-2">Carbon v11 example</Heading>
        <FormExample />
      </Page>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
