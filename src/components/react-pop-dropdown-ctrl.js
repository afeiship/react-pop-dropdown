import ReactPopDropdown from 'components/react-pop-dropdown';
import noop from 'noop';

export default class ReactPopDropdownCtrl{
  static _instance = null;

  static createInstance(inProps) {
    ReactPopDropdownCtrl._instance = ReactPopDropdownCtrl._instance || ReactPopDropdown.newInstance(inProps);
    return ReactPopDropdownCtrl._instance;
  }

  static show(inOptions, inCallback) {
    ReactPopDropdownCtrl._instance.component.show(inOptions, inCallback || noop);
  }

  static hide(inCallback) {
    ReactPopDropdownCtrl._instance.component.hide(inCallback || noop);
  }

  static destory() {
    ReactPopDropdownCtrl._instance.destory();
    ReactPopDropdownCtrl._instance = null;
  }
}
