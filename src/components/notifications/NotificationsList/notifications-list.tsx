const mock = [{ isRead: false, content: 'notif 1' }, { isRead: false, content: 'notif 2' }, { isRead: true, content: 'notif 3' }];

export const NotificationsList = () => {
  return (
    <div className='notification-list width-[250px]'>
      {mock.map(item => {
        return <div className='notification-item'>{item.content}</div>;
      })}
    </div>
  );
};
