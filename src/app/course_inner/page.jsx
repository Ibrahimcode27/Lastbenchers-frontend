import CourseInner from "../../components/courselist/course_inner"
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function CourseInnerPage() {
  return (
    <div>
      <Navbar theme="light" />
      <CourseInner />
      <Footer />
    </div>
  );
}

