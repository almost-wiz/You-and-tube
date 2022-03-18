import { VideosSidebar } from "../components/sidebars/VideosSidebar";
import { ChatCreateSidebar } from "../components/sidebars/ChatCreateSidebar";
import { ChatsSidebar } from "../components/sidebars/ChatsSidebar";
import { SettingsSidebar } from "../components/sidebars/SettingsSidebar";
import { Video } from "../components/contents/videos/Video";
import { Recommendations } from "../components/contents/videos/Recommendations";
import { Subscriptions } from "../components/contents/videos/Subscriptions";
import { AuthorPage } from "../components/contents/videos/AuthorPage";
import { AddVideo } from "../components/contents/videos/AddVideo";
import { EditVideo } from "../components/contents/videos/EditVideo";
import { AuthorPanel } from "../components/contents/videos/AuthorPanel";
import { Messages } from "../components/contents/Messages";
import { Login } from "../pages/authorization/Login";
import { Registration } from "../pages/authorization/Registration";
import { PasswordReset } from "../pages/authorization/PasswordReset";
import { About } from "../pages/About";
import { EmailVerificate } from "../pages/authorization/EmailVerificate";

export const contentTabs = {
  watch: Video,
  messages: Messages,
};

export const privateRoutes = [
  { path: "/watch", sidebar: VideosSidebar, content: Video, exact: true },
  { path: "/videos", sidebar: VideosSidebar, content: null, exact: true },
  {
    path: "/videos/author-panel/new",
    sidebar: VideosSidebar,
    content: AddVideo,
    exact: true,
  },
  {
    path: "/videos/author-panel/edit",
    sidebar: VideosSidebar,
    content: EditVideo,
    exact: true,
  },
  {
    path: "/videos/recommendations",
    sidebar: VideosSidebar,
    content: Recommendations,
    exact: true,
  },
  {
    path: "/videos/subscribtions",
    sidebar: VideosSidebar,
    content: Subscriptions,
    exact: true,
  },
  {
    path: "/videos/authors/:id",
    sidebar: VideosSidebar,
    content: AuthorPage,
    exact: true,
  },
  {
    path: "/videos/author-panel",
    sidebar: VideosSidebar,
    content: AuthorPanel,
    exact: true,
  },
  {
    path: "/start-chat",
    sidebar: ChatCreateSidebar,
    content: null,
    exact: true,
  },
  { path: "/chats", sidebar: ChatsSidebar, content: null, exact: true },
  { path: "/messages", sidebar: ChatsSidebar, content: Messages, exact: true },
  { path: "/settings", sidebar: SettingsSidebar, content: null, exact: true },
  {
    path: "/login",
    exact: false,
    redirect: true,
    to: "/videos/recommendations",
  },
  { path: "/", exact: false, redirect: true, to: "/videos/recommendations" },
  { path: "*", exact: false, error: true },
];

export const publicRoutes = [
  { path: "/login", element: Login, exact: true },
  { path: "/signup", element: Registration, exact: true },
  { path: "/password-reset", element: PasswordReset, exact: true },
  { path: "/activate/:uid/:token/", element: EmailVerificate, exact: true },
  { path: "/", element: About, exact: true },
  { path: "*", exact: false, redirect: true, to: "/login" },
];
