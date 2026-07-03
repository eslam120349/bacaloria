import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import SubjectPage from "./routes/SubjectPage";
import GradePage from "./routes/GradePage";
import TrackPage from "./routes/TrackPage";
import LessonPage from "./routes/LessonPage";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/:subjectSlug", element: <SubjectPage /> },
  { path: "/:subjectSlug/:gradeSlug", element: <GradePage /> },
  { path: "/:subjectSlug/:gradeSlug/lesson/:lessonSlug", element: <LessonPage /> },
  { path: "/:subjectSlug/:gradeSlug/:trackSlug", element: <TrackPage /> },
  {
    path: "/:subjectSlug/:gradeSlug/:trackSlug/lesson/:lessonSlug",
    element: <LessonPage />,
  },
  { path: "*", element: <NotFound /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
