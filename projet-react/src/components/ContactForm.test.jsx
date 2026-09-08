import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

async function fillAndSubmit({ name, email, message }) {
  if (name !== undefined) {
    await userEvent.type(screen.getByLabelText(/nom/i), name);
  }
  if (email !== undefined) {
    await userEvent.type(screen.getByLabelText(/email/i), email);
  }
  if (message !== undefined) {
    await userEvent.type(screen.getByLabelText(/message/i), message);
  }
  await userEvent.click(screen.getByRole('button', { name: /envoyer/i }));
}

describe('ContactForm', () => {
  it('affiche les trois champs et le bouton d\'envoi', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/nom/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /envoyer/i })).toBeInTheDocument();
  });

  it('affiche un message d\'erreur quand l\'email est invalide', async () => {
    render(<ContactForm />);

    await fillAndSubmit({
      name: 'Ada Lovelace',
      email: 'pas-un-email',
      message: 'Bonjour, je souhaite échanger sur vos projets.',
    });

    expect(
      screen.getByText(/adresse email valide/i)
    ).toBeInTheDocument();
    expect(screen.queryByText(/message envoyé/i)).not.toBeInTheDocument();
  });

  it('n\'affiche aucune erreur et confirme l\'envoi quand le formulaire est valide', async () => {
    render(<ContactForm />);

    await fillAndSubmit({
      name: 'Ada Lovelace',
      email: 'ada@example.com',
      message: 'Bonjour, je souhaite échanger sur vos projets.',
    });

    expect(screen.getByText(/message envoyé/i)).toBeInTheDocument();
    expect(screen.queryByText(/adresse email valide/i)).not.toBeInTheDocument();
  });
});
