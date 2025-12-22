import {
  FormEvent,
  useCallback,
  useMemo,
  useState,
  ChangeEvent,
  FocusEvent,
} from 'react';
import PageContent from '../src/components/PageContent/PageContent';
import Animated from '../src/components/Animated/Animated';
import styles from './contact.module.css';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name: string | null;
  email: string | null;
  message: string | null;
}

interface FormTouched {
  name: boolean;
  email: boolean;
  message: boolean;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

type FormFieldName = keyof FormValues;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateField = (name: FormFieldName, value: string): string | null => {
  switch (name) {
    case 'name':
      if (!value || value.trim().length < 2) {
        return 'Minimum 2 characters';
      }
      return null;
    case 'email':
      if (!value || !EMAIL_REGEX.test(value)) {
        return 'Enter a valid email';
      }
      return null;
    case 'message':
      if (value.trim().length <= 4) {
        return 'Minimum 5 characters';
      }
      return null;
    default:
      return null;
  }
};

const isFormFieldName = (name: string): name is FormFieldName => {
  return name === 'name' || name === 'email' || name === 'message';
};

const ContactPage = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    message: '',
  });
  const [touched, setTouched] = useState<FormTouched>({
    name: false,
    email: false,
    message: false,
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const errors = useMemo<FormErrors>(() => {
    return {
      name: validateField('name', formValues.name),
      email: validateField('email', formValues.email),
      message: validateField('message', formValues.message),
    };
  }, [formValues]);

  const isValid = useMemo<boolean>(() => {
    return Object.values(errors).every((error) => error === null);
  }, [errors]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;

      if (!isFormFieldName(name)) {
        return; // Silently ignore unknown fields
      }

      setFormValues((prev) => ({ ...prev, [name]: value }));
      setTouched((prev) => ({ ...prev, [name]: true }));
      setStatus('idle');
    },
    []
  );

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name } = event.target;

      if (!isFormFieldName(name)) {
        return;
      }

      setTouched((prev) => ({ ...prev, [name]: true }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();

      if (!isValid) {
        setTouched({ name: true, email: true, message: true });
        return;
      }

      setStatus('submitting');

      try {
        const message = encodeURIComponent(formValues.message.trim());
        const formData = new URLSearchParams({
          name: formValues.name.trim(),
          email: formValues.email.trim(),
          message,
        });

        const response = await fetch(
          'https://kristinepemberton.com/processForm.php',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData.toString(),
          }
        );

        if (!response.ok) {
          throw new Error('Form submission failed');
        }

        setStatus('success');
        setFormValues({ name: '', email: '', message: '' });
        setTouched({ name: false, email: false, message: false });
      } catch {
        setStatus('error');
      }
    },
    [formValues, isValid]
  );

  return (
    <PageContent>
      <Animated animation="fadeInUp" delay={100} animateOnLoad>
        <h1 className={styles.heading}>
          <span>Contact</span>
        </h1>
      </Animated>

      <div>
        <Animated animation="fadeInUp" delay={200} animateOnLoad>
          {status === 'success' && (
            <p
              className={`${styles.paragraph} ${styles['paragraph-success']}`}
              role="status"
              aria-live="polite"
            >
              Thanks for reaching out! I&apos;ll be in touch.
            </p>
          )}

          {status === 'error' && (
            <p
              className={`${styles.paragraph} ${styles['paragraph-fail']}`}
              role="alert"
              aria-live="assertive"
            >
              Something went wrong. Try again later or contact me on{' '}
              <a
                href="https://www.linkedin.com/in/klpemberton/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{' '}
              or{' '}
              <a
                href="https://github.com/klpemberton"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              .
            </p>
          )}
        </Animated>

        <Animated animation="fadeInUp" delay={300} animateOnLoad>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles['input-row']}>
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formValues.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={touched.name && errors.name !== null}
                  aria-describedby={
                    touched.name && errors.name ? 'name-error' : undefined
                  }
                />
                {touched.name && errors.name && (
                  <div
                    id="name-error"
                    className={styles['error-message']}
                    role="alert"
                  >
                    {errors.name}
                  </div>
                )}
              </div>

              <div className={styles['input-row']}>
                <label htmlFor="email" className="sr-only">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formValues.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={touched.email && errors.email !== null}
                  aria-describedby={
                    touched.email && errors.email ? 'email-error' : undefined
                  }
                />
                {touched.email && errors.email && (
                  <div
                    id="email-error"
                    className={styles['error-message']}
                    role="alert"
                  >
                    {errors.email}
                  </div>
                )}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles['text-area-row']}>
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formValues.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={touched.message && errors.message !== null}
                  aria-describedby={
                    touched.message && errors.message
                      ? 'message-error'
                      : undefined
                  }
                />
                {touched.message && errors.message && (
                  <div
                    id="message-error"
                    className={styles['error-message']}
                    role="alert"
                  >
                    {errors.message}
                  </div>
                )}
              </div>
            </div>

            <div className={styles['button-row']}>
              <button
                type="submit"
                disabled={!isValid || status === 'submitting'}
                className={styles.button}
                aria-busy={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </Animated>
      </div>
    </PageContent>
  );
};

export default ContactPage;
