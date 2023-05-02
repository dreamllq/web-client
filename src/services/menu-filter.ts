import { isString } from 'lodash';
import { checkPermission } from './permission';

const menuItemFilter = (menuItem) => {
  if (isString(menuItem.permission)) {
    const hasPermission = checkPermission(menuItem.permission);
    if (hasPermission !== true) return null;
    else {
      if (Array.isArray(menuItem.children)) {
        const hasPermissionChildren = menuChildrenFilter(menuItem.children);
        if (hasPermissionChildren.length > 0) {
          return {
            ...menuItem,
            children: hasPermissionChildren
          };
        } else {
          return null;
        }
      } else {
        return menuItem;
      }
    }
  } else {
    if (Array.isArray(menuItem.children)) {
      const hasPermissionChildren = menuChildrenFilter(menuItem.children);
      if (hasPermissionChildren.length > 0) {
        return {
          ...menuItem,
          children: hasPermissionChildren
        };
      } else {
        return null;
      }
    } else {
      return menuItem;
    }
  }
};


const menuChildrenFilter = (menuChildren) => {
  const hasPermissionMenuItems = [];

  menuChildren.forEach(menuItem => {
    const item = menuItemFilter(menuItem);
    if (item !== null) {
      hasPermissionMenuItems.push(item);
    }
  });

  return hasPermissionMenuItems;
};


export default menuChildrenFilter;