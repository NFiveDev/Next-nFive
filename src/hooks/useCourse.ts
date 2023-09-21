import { toggleFilter } from '@/store/features/course';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

export default function useCourse() {
  const dispatch = useAppDispatch();
  const isCourseFilterOpen = useAppSelector(state => state.course.filterFormOpen)

  const courseFilterToggleHandler = () => {
    dispatch(toggleFilter());
  };

  return {
    CourseFilterIsOpen: isCourseFilterOpen,
    Toggle: courseFilterToggleHandler,
  };
}
