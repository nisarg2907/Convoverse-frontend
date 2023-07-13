import { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";
import MainLayout from "../layouts/main";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

const Router = () => {
  return (
    <Routes>
      <Route path="/auth" element={<MainLayout />}>
      <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="new-password" element={<NewPasswordPage />} />


      </Route>

      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to={DEFAULT_PATH} replace />} />
        <Route path="app" element={<GeneralApp />} />
        <Route path="settings" element={<Settings />} />
        <Route path="group"element={<GroupPage/>} />
        <Route path="call" element={<CallPage/>} />
        <Route path="profile" element={<ProfilePage/>}/>
        <Route path="404" element={<Page404 />} />
        
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>

      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp"))
);

const ResetPasswordPage = Loadable(lazy(() => import("../pages/auth/ResetPassword")));
const NewPasswordPage = Loadable(lazy(() => import("../sections/auth/NewPassword")));
const GroupPage = Loadable(lazy(() => import("../pages/dashboard/Group")));
const CallPage =  Loadable(lazy(() => import("../pages/dashboard/Call")));
const ProfilePage = Loadable(lazy(()=>import("../pages/dashboard/Profile")));
const RegisterPage = Loadable(lazy(() => import("../pages/auth/Register")));
const LoginPage = Loadable(lazy(() => import("../pages/auth/Login")));
const Settings = Loadable(lazy(() => import("../pages/dashboard/Settings")));
const Page404 = Loadable(lazy(() => import("../pages/Page404")));

export default Router;
