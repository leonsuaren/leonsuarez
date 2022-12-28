import { render, screen, cleanup, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { Contact } from './Contact';
import { AdminLogedInProvider } from '../../context';

afterEach(cleanup);

const renderAdminLogedInContext = (login) => {
  return  render(
    <AdminLogedInProvider value={{ login: login }}>
      <Contact />
    </AdminLogedInProvider>
  );
}
