import { GoPin, GoCommentDiscussion, GoUnread, GoBookmark, GoBlocked, GoTrash } from 'react-icons/go';

export interface ISelectors {
  title: string,
  counter: number,
  icon: JSX.Element,
}
const selectors: ISelectors[] = [{
    title: 'pinned',
    counter: 2,
    icon: <GoPin />,
  }, {
    title: 'all',
    counter: 20,
    icon: <GoCommentDiscussion />,
  }, {
    title: 'unread',
    counter: 0,
    icon: <GoUnread />,
  }, {
    title: 'archived',
    counter: 0,
    icon: <GoBookmark />,
  }, {
    title: 'blocked',
    counter: 0,
    icon: <GoBlocked />,
  }, {
    title: 'trash',
    counter: 0,
    icon: <GoTrash />,
  },
];

export default selectors;
