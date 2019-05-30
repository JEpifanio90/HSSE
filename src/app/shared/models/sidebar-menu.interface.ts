import { ISideBarSubMenu } from './sidebar-submenu.interface';

export interface ISideBarMenu {
  title: string;
  icon: string;
  subMenuLinks?: Array<ISideBarSubMenu>;
}
