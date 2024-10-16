import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
// import { Provider } from "react-redux";
// import store, { persistor } from "./redux/store"; // Import store and persistor
import LandingLayout from "./Applayout/LandingLayout";
import Home from "./pages/Home";
import InstructorLanding from "./pages/InstructorLanding";
import NotFound from "./pages/NotFound";
import DashboardLayout from "./Applayout/DashboardLayout";
import Courses from "./pages/Courses";
import Quizzes from "./pages/Quizzes";
import ForumActivity from "./pages/ForumActivity";
import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard";
import CoursesAllPage from "./pages/CourseAllPage";
import SignUp from "./components/SignUp";
import CourseOverview from "./pages/CourseOverview";
import InstructorDashboard from "./Applayout/InstructorDashboard";
import IntendedLearners from "./pages/IntendedLearners";
import CourseStructure from "./pages/CourseStructure";
import FilmEdit from "./pages/FilmEdit";
import SetCurriculum from "./pages/SetCurriculum";
import Pricing from "./pages/Pricing";
import CourseComments from "./pages/CourseComments";
import AuthLayout from "./Applayout/AuthLayout";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import PlayCourse from "./pages/PlayCourse";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  // Access the user data from Redux store
  const user = useSelector((state) => state.auth.user);

  const router = createBrowserRouter([
    // Landing Layout Routes
    {
      path: "/",
      element: <LandingLayout />, // Main landing layout
      children: [
        {
          index: true, // Renders Home component at '/'
          element: <Home />,
        },
        {
          path: "instructor", // Renders InstructorLanding component at '/instructor'
          element: <InstructorLanding />,
        },
      ],
    },
    // Auth Layout Routes
    {
      path: "/login",
      element: <AuthLayout />, // Wrap with AuthLayout
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "forgotpassword",
          element: <ForgotPassword />,
        },
        {
          path: "signup",
          element: <SignUp userType="student" />, // Student signup
        },
      ],
    },
    {
      path: "/signup", // Redirect to /login/signup, prevent redundant route
      element: <AuthLayout />, // Ensure it's wrapped in AuthLayout
      children: [
        {
          index: true,
          element: <SignUp userType="student" />,
        },
      ],
    },
    // Instructor login/signup
    {
      path: "/instructor/login",
      element: <AuthLayout />, // Instructor login wrapped in AuthLayout
      children: [
        {
          index: true,
          element: <Login />, // Assuming you reuse the same Login component
        },
        {
          path: "forgotpassword",
          element: <ForgotPassword />,
        },
      ],
    },
    {
      path: "/instructor/signup", // Instructor signup route
      element: <AuthLayout />, // Instructor signup wrapped in AuthLayout
      children: [
        {
          index: true,
          element: <SignUp userType="instructor" />, // Instructor signup form
        },
      ],
    },

    // Dashboard Layout Routes (protected routes)
    {
      path: "/dashboard",
      element: (
        <PrivateRoute roleRequired="student">
          <DashboardLayout />
        </PrivateRoute>
      ),
      children: [
        {
          index: true,
          element: <Dashboard />, // Dashboard page component
        },
        {
          path: "courses",
          element: <Courses />, // Courses page component
        },
        {
          path: "quizzes",
          element: <Quizzes />, // Quizzes page component
        },
        {
          path: "forum",
          element: <ForumActivity />, // Forum Activity page component
        },
        {
          path: "playcourse",
          element: <PlayCourse />,
        },
      ],
    },

    {
      path: "/instructordashboard",
      element: (
        <PrivateRoute roleRequired="instructor">
          <InstructorDashboard />
        </PrivateRoute>
      ),
      children: [
        {
          index: true,
          element: <Navigate to="/instructordashboard/intended-learners" />,
        },
        {
          path: "intended-learners",
          element: <IntendedLearners />,
        },
        {
          path: "course-structure",
          element: <CourseStructure />,
        },
        {
          path: "film-edit",
          element: <FilmEdit />,
        },
        {
          path: "set-curriculum",
          element: <SetCurriculum />,
        },
        {
          path: "pricing",
          element: <Pricing />,
        },
        {
          path: "course-comments",
          element: <CourseComments />,
        },
      ],
    },

    // Other routes...
    {
      path: "/courses-all",
      element: <LandingLayout />,
      children: [
        {
          index: true, // Renders Home component at '/courses-all'
          element: <CoursesAllPage />,
        },
      ],
    },
    {
      path: "/course-overview/:id",
      element: <CourseOverview />,
    },

    {
      path: "/courses/:courseId",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <PlayCourse />,
        },
      ],
    },

    // Catch-all route for 404
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
  // return (
  //   <Provider store={store}>
  //     <PersistGate loading={null} persistor={persistor}>
  //       <RouterProvider router={router} />
  //     </PersistGate>
  //   </Provider>
  // );
};

export default App;
