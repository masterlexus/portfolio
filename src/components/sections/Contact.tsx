import { FiMail } from 'react-icons/fi';
import { profile } from '../../data/profile';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-20 md:py-28">
      <Reveal className="mx-auto max-w-content px-5 sm:px-6">
        <h2 className="text-h2 font-medium text-textPrimary md:text-h1">
          Want to get in touch?
        </h2>
        <div className="mt-8">
          <Button href={`mailto:${profile.email}`} icon={<FiMail size={14} />}>
            {profile.email}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
