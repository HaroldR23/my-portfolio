import { 
  CONTACT_ME_BOX,
  CONTACT_ME_CONTAINER, 
  CONTACT_ME_EMAIL, 
  CONTACT_ME_ICON, 
  CONTACT_ME_SOCIAL_MEDIA_ITEM, 
  CONTACT_ME_SUB_CONTAINER, 
  CONTACT_ME_TEXT, 
  CONTACT_ME_TITLE
} from "@/app/constants/styles/contactMeStyles";
import { SiGithub, SiLinkedin, SiMailboxdotorg } from "react-icons/si";

const ContactMe = () => {
  return (
    <div className={CONTACT_ME_CONTAINER}>
      <div className={CONTACT_ME_SUB_CONTAINER}>
        <h1 className={CONTACT_ME_TITLE}>Contact Me</h1>
        
        <div className={CONTACT_ME_BOX}>
          <div className="space-y-2">
            <p className={CONTACT_ME_TEXT}>
              If you want to contact me, please send me an email at:
            </p>
            <a 
              href="mailto:ahsro99@gmail.com"
              className={CONTACT_ME_EMAIL}
            >
              <SiMailboxdotorg className={CONTACT_ME_ICON} />
              <span className={CONTACT_ME_ICON

              }>ahsro99@gmail.com</span>
            </a>
          </div>

          <div className="space-y-4">
            <p className={CONTACT_ME_TEXT}>
              Or you can reach me on my social media:
            </p>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://www.linkedin.com/in/haroldrodriguez/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={CONTACT_ME_SOCIAL_MEDIA_ITEM}
                >
                  <SiLinkedin className={CONTACT_ME_ICON} />
                  <span className={CONTACT_ME_ICON}>
                    LinkedIn
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href="https://github/HaroldR23.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={CONTACT_ME_SOCIAL_MEDIA_ITEM}
                >
                  <SiGithub className={CONTACT_ME_ICON} />
                  <span className={CONTACT_ME_ICON}>GitHub</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
