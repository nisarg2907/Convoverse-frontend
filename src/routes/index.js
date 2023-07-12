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
      </Route>

      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to={DEFAULT_PATH} replace />} />
        <Route path="app" element={<GeneralApp />} />
        <Route path="settings" element={<Settings />} />
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

const LoginPage = Loadable(lazy(() => import("../pages/auth/Login")));
const Settings = Loadable(lazy(() => import("../pages/dashboard/Settings")));
const Page404 = Loadable(lazy(() => import("../pages/Page404")));

export default Router;
