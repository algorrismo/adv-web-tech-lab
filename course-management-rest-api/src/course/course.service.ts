import { Injectable } from '@nestjs/common';

//? import { Injectable } brings in a NestJS decorator.
@Injectable()
export class CourseService {
    // constructor(private readonly courseService: CourseService) {}

    getAllCourses(): string {
        return "Here is ur all courses from service";
    }

    //* ': string' after the parentheses means the function returns a string.
    getCourseById(id: string): string {
        return `Here is the course with ID: ${id} from service`;
    }

    createCourse(): string{
        return "Course created successfully from service";
    }

    updateCourse(id: string): string {
        return `Course with ID: ${id} updated successfully from service`;
    }

    patchCourse(id: string): string {
        return `Course with ID: ${id} patched successfully from service`;
    }

    deleteCourse(id: string): string {
        return `Course with ID: ${id} deleted successfully from service`;
    }
}
