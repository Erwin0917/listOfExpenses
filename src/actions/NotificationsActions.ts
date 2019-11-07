import { NotificationStatus } from '../const/NotificationStatus';
import { M } from '../models/M';

export class NotificationsActions {
	public static add = (level: NotificationStatus, message: string, title?: string) => {
		M.notifications.addNotification({
			title,
			message,
			level,
			position: 'br',
			dismissible: 'click'
		});
	};
}
