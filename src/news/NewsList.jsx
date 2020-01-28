import { h } from 'preact'; /** @jsx h **/
import NewsListSidebarSupport from './NewsListSidebarSupport';
import NewsListLatestReviews from './NewsListLatestReviews';
import NewsListContent from './NewsListContent';
import HeadStuff from '../reusables/HeadStuff';

export default function NewsList() {
  return [<HeadStuff title="Radioblog" />, <div className='news-list__wrapper'>
    <NewsListContent /><div className='news-list__sidebar'>
      <NewsListSidebarSupport />
      <NewsListLatestReviews />
    </div></div>];
}
