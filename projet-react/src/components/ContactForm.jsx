import { useState } from 'react';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [sent, setSent] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!EMAIL_PATTERN.test(values.email)) {
      setError('Veuillez saisir une adresse email valide.');
      setSent(false);
      return;
    }

    setError('');
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="contact-name">Nom</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="Ada Lovelace"
          value={values.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="text"
          placeholder="ada@example.com"
          value={values.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows="4"
          placeholder="Décrivez votre projet en quelques lignes..."
          value={values.message}
          onChange={handleChange}
          required
        />
      </div>

      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      {sent && !error && (
        <p className="form-success" role="status">
          Message envoyé, merci ! Je reviens vers vous rapidement.
        </p>
      )}

      <button type="submit">Envoyer</button>
    </form>
  );
}

export default ContactForm;
