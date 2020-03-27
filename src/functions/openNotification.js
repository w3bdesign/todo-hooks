import { notification } from 'antd';

export const openNotification = (placement, text) => {
  notification.info({
    message: `${text}`,
    placement
  });
};
