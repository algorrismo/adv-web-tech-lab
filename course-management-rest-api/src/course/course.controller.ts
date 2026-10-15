import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CourseService } from './course.service.js';

//This tells NestJS that every route inside this Controller starts with '/course.'
@Controller('course')
export class CourseController {
    //* This is called dependency injection.
    // It makes the CourseService available inside the Controller.
    // Think of it like the Controller telling NestJS:
    // "I need CourseService to perform the work."
    constructor(private readonly courseService: CourseService) {}

    @Get()
    getAllCourses(): string {
        return this.courseService.getAllCourses();
        // return this.courseService.getAllCourses()
    }

    @Get(':id')
    getCourseById(@Param('id') id: string): string {
        return this.courseService.getCourseById(id);
    }

    @Post()
    createCourse(): string {
        return this.courseService.createCourse();
    }

    @Put(':id')
    updateCourse(@Param('id') id: string): string {
        return this.courseService.updateCourse(id);
    }
    @Patch(':id')
    patchCourse(@Param('id') id: string): string {
        return this.courseService.patchCourse(id);
    }

    @Delete(':id')
    deleteCourse(@Param('id') id: string): string {
        return this.courseService.deleteCourse(id);
    }
}
