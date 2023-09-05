import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react';

type MenuSelectProps = {
  buttonComponent: JSX.Element;
   
}


export default function MenuSelect(props: MenuSelectProps) {
  const {buttonComponent} = props;
  return (
    <Menu>
      <MenuButton as={'button'} >
        
      </MenuButton>
      <MenuList>
        {
          
        }
        
      </MenuList>
    </Menu>
  )
}