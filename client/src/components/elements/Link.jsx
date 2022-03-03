import { Link as BaseLink, useLocation } from 'react-router-dom'
import { contentTabs } from '../../router/index'

export const Link = ({ children, ...props }) => {
  const location = useLocation().pathname;
  const urlParams = new URLSearchParams(useLocation().search);
  let url = props.to

  if (props.force) {
    url = props.to
  } else if (props.to.split('/')[1] === 'videos' && urlParams.get('tab') === 'watch' && location.split('/')[1] !== 'videos') {
    url = '/videos?tab=watch'
  } else if (['recommendations', 'subscriptions', 'author-panel', 'authors'].find((i) => i === props.to.split('/')[2])) {
    url = props.to
  } else if (urlParams.get('tab')) {
    url = props.to + '?tab=' + urlParams.get('tab');
  } else if (Object.keys(contentTabs).find((i) => i === location.split('/')[1])) {
    url = props.to + '?tab=' + location.split('/')[1];
  }

  return <BaseLink {...props} to={url}>{children}</BaseLink>
}
