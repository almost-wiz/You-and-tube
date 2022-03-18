import { Link as BaseLink, useLocation } from "react-router-dom";
import { contentTabs } from "../../router/index";

export const Link = ({ children, ...props }) => {
  const location = useLocation().pathname;
  const urlParams = new URLSearchParams(useLocation().search);
  const tab = urlParams.get("tab");
  let action = "";
  if (urlParams.get("video")) {
    action = `&video=${urlParams.get("video")}`;
  } else if (urlParams.get("chat")) {
    action = `&chat=${urlParams.get("chat")}`;
  }
  let url = props.to;

  if (props.force) {
    url = props.to;
  } else if (
    props.to.split("/")[1] === "videos" &&
    tab === "watch" &&
    location.split("/")[1] !== "videos"
  ) {
    url = `/videos?tab=watch${action}`;
  } else if (
    ["recommendations", "subscriptions", "author-panel", "authors"].find(
      (i) => i === props.to.split("/")[2]
    )
  ) {
    url = props.to;
  } else if (["/messages"].find((i) => i === props.to.split("?")[0])) {
    url = props.to;
  } else if (tab) {
    url = props.to.split("?")[0] + "?tab=" + tab + action;
  } else if (
    Object.keys(contentTabs).find((i) => i === location.split("/")[1])
  ) {
    url = props.to.split("?")[0] + "?tab=" + location.split("/")[1] + action;
  }

  return (
    <BaseLink {...props} to={url}>
      {children}
    </BaseLink>
  );
};
