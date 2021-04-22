import { FaHome, FaCalendar, FaCheckCircle, FaUser} from 'react-icons/fa';
import { ItemMenu } from './components/ItemMenu';
import { MenuWrapper } from './styles';

const MenuOptions = [
    {
        icon: FaHome,
        label: 'Home',
        path: "/",
    },
    {
        icon: FaCalendar,
        label: 'Shedule',
        path: "/schedule",
    },
    {
        icon: FaCheckCircle,
        label: 'Create Task',
        path: "/create",
    },
    {
        icon: FaUser,
        label: 'Profile',
        path: "/user",
    }
];

export const Menu = ({pathname}) => {
    return (
      <MenuWrapper>
        {MenuOptions.map((item, i) => (
          <ItemMenu active={item.path === pathname} key={i} {...item} />
        ))}
      </MenuWrapper>
    );
  };