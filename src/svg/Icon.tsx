import {
  IconCompleted,
  IconDownArrow,
  IconPb,
  IconRestart,
  IconTrophy,
  PatternConfetti,
  PatternStar,
  Logo,
  LogoSmall,
  PatternAsterisk,
} from '.';

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case 'completed':
      return <IconCompleted />;
    case 'down-arrow':
      return <IconDownArrow />;
    case 'pb':
      return <IconPb />;
    case 'restart':
      return <IconRestart />;
    case 'trophy':
      return <IconTrophy />;
    case 'pattern-confetti':
      return <PatternConfetti />;
    case 'pattern-star':
      return <PatternStar />;
    case 'pattern-asterisk':
      return <PatternAsterisk />;
    case 'logo':
      return <Logo />;
    case 'logo-small':
      return <LogoSmall />;
    default:
      return null;
  }
};
export default Icon;
